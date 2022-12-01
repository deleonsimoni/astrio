import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private api = "/api/admin/users";

  constructor(private http: HttpClient) { }

  public list(): Observable<any> {
    return this.http.get(this.api);
  }

  public markeAdmin(userId: any, isAdmin: any): Observable<any> {
    return this.http.put(`${this.api}/${userId}`, { isAdmin });

  }
}
