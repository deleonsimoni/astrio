import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from '@app/shared/services/home/home.service';
import { finalize, map, take } from 'rxjs';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeAdminComponent implements OnInit {

  public homeForm: FormGroup;
  public loading = false;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.homeForm = this.createForm();

    this.loading = true;
    this.listAll();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      title: [null],
      description: [null]
    })
  }

  private listAll() {
    this.homeService.list()
      .pipe(
        take(1),
        map(home => home[0]),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(home => {
        this.homeForm.patchValue({
          id: home._id,
          title: home.title,
          description: home.description
        });
      }, error => this.showMessage(error.error))
  }

  public register() {
    const body = this.homeForm.value;
    this.loading = true;

    if (this.homeForm.valid) {
      this.homeService.update(body)
        .subscribe(_ => {
          this.listAll();
        }, error => this.showMessage(error.error));
    }

  }

  showMessage(text: any) {
    this.snackBar.open(text, 'X', { duration: 3000 })
  }
}
