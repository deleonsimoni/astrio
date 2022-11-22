import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DiretoriaService } from "@app/shared/services/diretoria/diretoria.service";

import { take } from "rxjs";

@Component({
  selector: "app-diretoria-admin",
  templateUrl: "./diretoria.component.html",
  styleUrls: ["./diretoria.component.scss"]
})
export class DiretoriaAdminComponent {

  public diretoriaForm: FormGroup
  public diretores: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private diretoriaService: DiretoriaService
  ) {}

  ngOnInit() {
    this.diretoriaForm = this.createForm();

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
      .pipe(take(1))
      .subscribe((diretores: any) => {
        this.diretores = diretores;
      })
  }

  public register(): void {
    const body = this.diretoriaForm.value;

    if (this.diretoriaForm.valid) {
      this.diretoriaService.create(body)
        .subscribe(_ => {
          this.listAll();
          this.diretoriaForm.reset();
        }, error => console.log(error));
    }

  }

  public remove(diretor: any): void {
    const id = diretor._id;

    this.diretoriaService.delete(id)
      .subscribe(_ => {
        this.listAll();
      })
  }

}
