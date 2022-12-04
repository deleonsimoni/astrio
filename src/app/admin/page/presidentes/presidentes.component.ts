import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PresidenteService } from "@app/shared/services/presidente/presidente.service";
import { finalize, take } from "rxjs";

@Component({
  selector: "app-presidentes-admin",
  templateUrl: "./presidentes.component.html",
  styleUrls: ["./presidentes.component.scss"]
})
export class PresidentesAdminComponent {

  public presidenteForm: FormGroup
  public presidentes: Array<any>;
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private presidenteService: PresidenteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.presidenteForm = this.createForm();

    this.loading = true;
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
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((presidentes: any) => {
        this.presidentes = presidentes;
      }, error => this.showMessage(error.error))
  }

  public register(): void {
    const body = this.presidenteForm.value;
    this.loading = true;

    if (this.presidenteForm.valid) {
      this.presidenteService.create(body)
        .subscribe(_ => {
          this.listAll();
          this.presidenteForm.reset();
        }, error => this.showMessage(error.error));
    }

  }

  public remove(presidente: any): void {
    const id = presidente._id;
    this.loading = true;

    this.presidenteService.delete(id)
      .subscribe(_ => {
        this.listAll();
      }, error => this.showMessage(error.error))
  }

  showMessage(text: any) {
    this.snackBar.open(text, 'X', { duration: 3000 })
  }
}
