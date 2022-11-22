import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FileProvider } from "@app/shared/provider/file/file.provider";
import { ConvenioService } from "@app/shared/services/convenio/convenio.service";
import { take } from "rxjs";

@Component({
  selector: 'app-convenios-admin',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosAdminComponent {

  public convenioForm: FormGroup;
  public convenios: Array<any>;
  public logo: string = "";
  private file: File;

  constructor(
    private convenioService: ConvenioService,
    private formBuilder: FormBuilder,
    private fileProvider: FileProvider
  ) {}

  ngOnInit() {
    this.convenioForm = this.createForm();

    this.listAll();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      title: [null],
      description: [null],
      logo: [null]
    })
  }

  private listAll() {
    this.convenioService.list()
      .pipe(take(1))
      .subscribe((convenios: any) => {
        this.convenios = convenios;
      })
  }

  public register(): void {
    const body = this.convenioForm.value;

    if (this.convenioForm.valid) {
      this.convenioService.create(body, this.file)
        .subscribe(_ => {
          this.listAll();
          this.convenioForm.reset();
        }, error => console.log(error));
    }

  }

  public remove(convenio: any): void {
    const id = convenio._id;

    this.convenioService.delete(id)
      .subscribe(_ => {
        this.listAll();
      })
  }

  public getProfileImageCode(event: any): void {
    this.fileProvider.getImageData(event.target.files)
      .subscribe(({ base64, file }: any) => {
        this.logo = base64;
        this.file = file;
      });
  }

}
