import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ContatoService } from "@app/shared/services/contato/contato.service";
import { finalize, take } from "rxjs";

@Component({
  selector: 'app-contato-admin',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoAdminComponent {

  public contactForm: FormGroup;
  public loading = false;

  constructor(
    private contatoService: ContatoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.contactForm = this.createForm();

    this.loading = true;
    this.listAll();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      address: [null],
      email: [null],
      phone: [null],
      fax: [null],
      linkMap: [null]
    })
  }

  private listAll() {
    this.contatoService.list()
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(contact => {
        this.contactForm.patchValue({
          id: contact._id,
          address: contact.address,
          email: contact.email,
          phone: contact.phone,
          fax: contact.fax,
          linkMap: contact.linkMap
        });

        this.showMessage("Dados atualizados com sucesso!");
      }, error => {
        this.showMessage(error.error);
      })
  }

  public register() {
    const body = this.contactForm.value;
    this.loading = true;

    if (this.contactForm.valid) {
      this.contatoService.update(body)
        .subscribe(_ => {
          this.listAll();
        }, error => {
          this.showMessage(error.error);
        });
    }

  }

  showMessage(text: any) {
    this.snackBar.open(text, 'X', { duration: 3000 })
  }

}
