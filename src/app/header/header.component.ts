import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@app/shared/interfaces';
import { ImagePathComplement } from '@app/shared/pipes/image-path-complement.pipe';

import { AuthService } from '@app/shared/services';
import { PublicService } from '@app/shared/services/public/public.service';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user: User | null = null;
  public estatuto: { file: string } = {
    file: ""
  };
  isLoggedin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private publicService: PublicService,
    private imagePathComplement: ImagePathComplement,
    private http: HttpClient
  ) {

    this.publicService.shareInformation
      .pipe(
        map(data => {
          if (data && data.estatuto) {
            this.estatuto.file = this.imagePathComplement.transform(data.estatuto.file) || "";
          }

          this.checkLoggin();
        })
      )
      .subscribe();
  }

  ngAfterViewInit() {
    this.loadScript();
  }

  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = "../../assets/js/astrio.js";
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }


  getFile() {
    return this.http.get(this.estatuto.file)
      .pipe(
        map((data: any) => {
          return new Blob([data.blob()], { type: 'application/pdf' });
        })
      )
  }

  logout(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/auth/login');
    this.isLoggedin = false;
  }

  private checkLoggin() {
    this.authService.getUser()
      .pipe(
        map(user => {
          if (user) {
            this.isLoggedin = true
          }
        })
      ).subscribe();
  }
}
