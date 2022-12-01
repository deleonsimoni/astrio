import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstatutoService } from '@app/shared/services/estatuto/estatuto.service';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public loading = false;
  public menu = [
    { title: "Usuários", path: "users" },
    { title: "Home", path: "home" },
    { title: "Quem somos", path: "quem-somos" },
    { title: "Convênios", path: "convenios" },
    { title: "Contato", path: "contato" },
    { title: "Presidentes", path: "presidentes" },
    { title: "Diretoria / Conselho", path: "diretoria" },
    { title: "Notícias", path: "noticia" },
    { title: "Atualizar o estatuto" }
  ]
  private id = "";

  constructor(
    private router: Router,
    private estatutoService: EstatutoService
  ) { }

  ngOnInit() {
    this.estatutoService.list()
      .pipe(take(1))
      .subscribe(data => {
        if (data.length > 0) {
          this.id = data[0]._id;
        }
      })
  }

  public navigate(page: string): void {
    this.router.navigate([`/admin/${page}`])
  }

  public getFile(event: any): void {
    const files: Array<File> = event.target.files;

    if (files && files.length > 0) {
      this.loading = true;

      this.estatutoService.upload(this.id, files[0])
        .pipe(
          take(1),
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe();
    }
  }

}
