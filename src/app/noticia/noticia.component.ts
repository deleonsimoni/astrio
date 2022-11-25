import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PublicService } from "@app/shared/services/public/public.service";

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {

  private id: any;
  public noticia: any;

  constructor(
    private route: ActivatedRoute,
    private publicService: PublicService,
    private router: Router
  ) {

    this.id = this.route.snapshot.params.id;

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  ngOnInit() {
    this.getNoticia();
  }

  private getNoticia(): void {
    this.publicService.shareInformation
      .subscribe(({ noticias }: any) => {
        if (noticias) {
          this.noticia = noticias.find((el: any) => el._id == this.id);
        } else {
          this.router.navigate(["/"]);
        }
      });
  }

}
