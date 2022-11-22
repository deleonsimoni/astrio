import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { QuemSomosService } from "@app/shared/services/quem-somos/quem-somos.service";
import { take } from "rxjs";

@Component({
  selector: "app-quem-somos-admin",
  templateUrl: "./quem-somos.component.html",
  styleUrls: ["./quem-somos.component.scss"]
})
export class QuemSomosAdminComponent {

  public quemSomosForm: FormGroup;

  constructor(
    private quemSomosService: QuemSomosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.quemSomosForm = this.createForm();

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
      .pipe(take(1))
      .subscribe((quemSomos: any) => {
        this.quemSomosForm.patchValue({
          id: quemSomos._id,
          mission: quemSomos.mission,
          vision: quemSomos.vision,
          aboutUs: quemSomos.aboutUs
        });
      })
  }

  public register() {
    const body = this.quemSomosForm.value;

    if (this.quemSomosForm.valid) {
      this.quemSomosService.update(body)
        .subscribe(_ => {
          this.listAll();
        }, error => console.log(error));
    }

  }

}
