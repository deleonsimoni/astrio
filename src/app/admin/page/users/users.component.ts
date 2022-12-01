import { Component, OnInit } from '@angular/core';
import { AdminService } from '@app/shared/services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private adminService: AdminService,) { }

  ngOnInit(): void {
    this.listAll();
  }

  public listAll() {
    this.adminService.list()
      .subscribe((res) => {
        this.users = res.response;
      }, err => {
        console.log(err);
      });
  }

  public isAdmin(user: any, isAdmin: any) {
    this.adminService.markeAdmin(user._id, isAdmin)
      .subscribe(() => {
        user.payment.icPaid = true;
      }, err => {
        console.log(err);
      });
  }

}
