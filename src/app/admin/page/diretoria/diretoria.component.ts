import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DiretoriaService } from "@app/shared/services/diretoria/diretoria.service";

import { finalize, take } from "rxjs";

@Component({
  selector: "app-diretoria-admin",
  templateUrl: "./diretoria.component.html",
  styleUrls: ["./diretoria.component.scss"]
})
export class DiretoriaAdminComponent {

  public diretoriaForm: FormGroup
  public diretores: Array<any>;
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private diretoriaService: DiretoriaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.diretoriaForm = this.createForm();

    this.loading = true;
    this.listAll();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      title: [null],
      name: [null]
    })
  }

  private listAll() {
    this.diretoriaService.list()
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((diretores: any) => {
        this.diretores = diretores;
      }, error => this.showMessage(error.error))
  }

  public register(): void {
    const body = this.diretoriaForm.value;
    this.loading = true;

    if (this.diretoriaForm.valid) {
      this.diretoriaService.create(body)
        .subscribe(_ => {
          this.listAll();
          this.diretoriaForm.reset();
        }, error => this.showMessage(error.error));
    }

  }

  public remove(diretor: any): void {
    const id = diretor._id;
    this.loading = true;

    this.diretoriaService.delete(id)
      .subscribe(_ => {
        this.listAll();
      }, error => this.showMessage(error.error))
  }

  showMessage(text: any) {
    this.snackBar.open(text, 'X', { duration: 3000 })
  }

}
