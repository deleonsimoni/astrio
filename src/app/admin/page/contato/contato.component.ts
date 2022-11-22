import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ContatoService } from "@app/shared/services/contato/contato.service";
import { take } from "rxjs";

@Component({
  selector: 'app-contato-admin',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoAdminComponent {

  public contactForm: FormGroup;

  constructor(
    private contatoService: ContatoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.contactForm = this.createForm();

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
      .pipe(take(1))
      .subscribe(contact => {
        this.contactForm.patchValue({
          id: contact._id,
          address: contact.address,
          email: contact.email,
          phone: contact.phone,
          fax: contact.fax,
          linkMap: contact.linkMap
        });
      })
  }

  public register() {
    const body = this.contactForm.value;

    if (this.contactForm.valid) {
      this.contatoService.update(body)
        .subscribe(x => {
          this.listAll();
        }, error => console.log(error));
    }

  }

}
