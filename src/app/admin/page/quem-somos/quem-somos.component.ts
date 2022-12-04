import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { QuemSomosService } from "@app/shared/services/quem-somos/quem-somos.service";
import { finalize, take } from "rxjs";

@Component({
  selector: "app-quem-somos-admin",
  templateUrl: "./quem-somos.component.html",
  styleUrls: ["./quem-somos.component.scss"]
})
export class QuemSomosAdminComponent {

  public quemSomosForm: FormGroup;
  public loading = false;

  constructor(
    private quemSomosService: QuemSomosService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.quemSomosForm = this.createForm();

    this.loading = true;
    this.listAll();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      mission: [null],
      vision: [null],
      aboutUs: [null]
    })
  }

  private listAll() {
    this.quemSomosService.list()
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((quemSomos: any) => {
        this.quemSomosForm.patchValue({
          id: quemSomos._id,
          mission: quemSomos.mission,
          vision: quemSomos.vision,
          aboutUs: quemSomos.aboutUs
        });

        this.showMessage("Dados atualizados com sucesso!");
      }, error => this.showMessage(error.error))
  }

  public register() {
    const body = this.quemSomosForm.value;
    this.loading = true;

    if (this.quemSomosForm.valid) {
      this.quemSomosService.update(body)
        .subscribe(_ => {
          this.listAll();
        }, error => this.showMessage(error.error));
    }

  }

  showMessage(text: any) {
    this.snackBar.open(text, 'X', { duration: 3000 })
  }
}
