import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '@app/shared/services/home/home.service';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeAdminComponent implements OnInit {

  public homeForm: FormGroup;

  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.homeForm = this.createForm();

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
        map(home => home[0])
      )
      .subscribe(home => {
        this.homeForm.patchValue({
          id: home._id,
          title: home.title,
          description: home.description
        });
      })
  }

  public register() {
    const body = this.homeForm.value;

    if (this.homeForm.valid) {
      this.homeService.update(body)
        .subscribe(x => {
          this.listAll();
        }, error => console.log(error));
    }

  }
}
