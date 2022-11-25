import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileProvider } from '@app/shared/provider/file/file.provider';
import { NoticiaService } from '@app/shared/services/noticia/noticia.service';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'noticias-component',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})

export class NoticiasComponent implements OnInit {

  public noticiaForm: FormGroup;
  public noticias: Array<any>;
  public logo: string = "";
  public loading = false;
  private file: File;

  constructor(
    private noticiaService: NoticiaService,
    private formBuilder: FormBuilder,
    private fileProvider: FileProvider
  ) {}

  ngOnInit() {
    this.noticiaForm = this.createForm();

    this.loading = true;
    this.listAll();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      logo: [null],
      title: [null],
      description: [null]
    })
  }

  private listAll() {
    this.noticiaService.list()
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((noticias: any) => {
        this.noticias = noticias;
      })
  }

  public register(): void {
    const body = this.noticiaForm.value;
    this.loading = true;

    if (this.noticiaForm.valid) {
      this.noticiaService.create(body, this.file)
        .subscribe(_ => {
          this.listAll();
          this.logo = "";
          this.noticiaForm.reset();
        }, error => console.log(error));
    }

  }

  public remove(noticia: any): void {
    const id = noticia._id;
    this.loading = true;

    this.noticiaService.delete(id)
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
