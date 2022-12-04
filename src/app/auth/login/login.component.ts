import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@app/shared/services';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public loginForm: FormGroup;
  public error: string;
  public loading: boolean = false;

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) {

    this.loginForm = this.builder.group({
      // tslint:disable-next-line: max-line-length
      email: [null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });

  }

  login(): void {
    if (this.loginForm.valid) {
      this.loading = true

      this.authService.login(this.loginForm.value)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe((res: any) => {
          this.router.navigate(['/admin']);
        }, err => {
          if (err.status === 401) {
            this.error = 'Área reservada aos administradores do site!';

            setTimeout(() => {
              this.error = "";
            }, 4000)
          }
        });
    } else {
      this.error = 'Email ou senha inválidos!';

      setTimeout(() => {
        this.error = "";
      }, 4000)
    }
  }

  get validate() {
    return this.loginForm.controls;
  }
}
