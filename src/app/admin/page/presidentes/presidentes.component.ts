import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PresidenteService } from "@app/shared/services/presidente/presidente.service";
import { take } from "rxjs";

@Component({
  selector: "app-presidentes-admin",
  templateUrl: "./presidentes.component.html",
  styleUrls: ["./presidentes.component.scss"]
})
export class PresidentesAdminComponent {

  public presidenteForm: FormGroup
  public presidentes: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private presidenteService: PresidenteService
  ) {}

  ngOnInit() {
    this.presidenteForm = this.createForm();

    this.listAll();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: [null],
      period: [null]
    })
  }

  private listAll() {
    this.presidenteService.list()
      .pipe(take(1))
      .subscribe((presidentes: any) => {
        this.presidentes = presidentes;
      })
  }

  public register(): void {
    const body = this.presidenteForm.value;

    if (this.presidenteForm.valid) {
      this.presidenteService.create(body)
        .subscribe(_ => {
          this.listAll();
          this.presidenteForm.reset();
        }, error => console.log(error));
    }

  }

  public remove(presidente: any): void {
    const id = presidente._id;

    this.presidenteService.delete(id)
      .subscribe(_ => {
        this.listAll();
      })
  }

}
