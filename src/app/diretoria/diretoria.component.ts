import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/shared/services/public/public.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-diretoria',
  templateUrl: './diretoria.component.html',
  styleUrls: ['./diretoria.component.scss']
})
export class DiretoriaComponent implements OnInit {

  public diretores: Array<any>;

  constructor(
    private publicService: PublicService
  ) { }

  ngOnInit(): void {
    this.listAll();
  }

  private listAll(): void {
    this.publicService.getDiretores()
      .pipe(take(1))
      .subscribe((diretores: any) => {
        this.diretores = diretores;
      });
  }

}
