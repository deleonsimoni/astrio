import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private router: Router
  ) {}

  public navigate(page: string): void {
    this.router.navigate([`/admin/${page}`])
  }

}
