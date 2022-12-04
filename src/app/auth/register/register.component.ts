import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';

import { AuthService } from '@app/shared/services';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  public registerForm: FormGroup;
  public successMessage: string;
  public loading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {

    this.registerForm = this.createForm();

  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      fullname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      repeatPassword: [null, [Validators.required, this.passwordsMatchValidator]],
      dateBirth: [null],
      phone: [null]
    })
  }

  passwordsMatchValidator(control: FormControl): ValidationErrors | null {
    const password = control.root.get('password');
    return password && control.value !== password.value
      ? {
        passwordMatch: true,
      }
      : null;
  }

  get fullname(): AbstractControl {
    return this.registerForm.get('fullname')!;
  }

  get email(): AbstractControl {
    return this.registerForm.get('email')!;
  }

  get password(): AbstractControl {
    return this.registerForm.get('password')!;
  }

  get repeatPassword(): AbstractControl {
    return this.registerForm.get('repeatPassword')!;
  }

  register(): void {

    if (this.registerForm.invalid) {
      this.fullname.markAsDirty();
      this.email.markAsDirty();
      this.password.markAsDirty();
      this.repeatPassword.markAsDirty();
      return;
    }

    this.loading = true;

    const { fullname, email, password, repeatPassword, dateBirth, phone } =
      this.registerForm.getRawValue();

    this.authService
      .register(fullname, email, password, repeatPassword, dateBirth, phone)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(() => {
        this.registerForm.reset();
        this.successMessage = "Seu foi cadastro concluído com sucesso, aguarde a aprovação do administrador!"
      });
  }
}
