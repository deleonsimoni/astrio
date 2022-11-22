import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/shared/services/public/public.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-presidentes',
  templateUrl: './presidentes.component.html',
  styleUrls: ['./presidentes.component.scss']
})
export class PresidentesComponent implements OnInit {

  public presidentes: Array<any>;

  constructor(
    private publicService: PublicService
  ) { }

  ngOnInit(): void {
    this.listAll();
  }

  private listAll(): void {
    this.publicService.getPresidentes()
      .pipe(take(1))
      .subscribe((presidentes: any) => {
        this.presidentes = presidentes
      });
  }

}
