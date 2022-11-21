import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private api = "/api/admin/home";

  constructor(private http: HttpClient) { }

  public list(): Observable<any> {
    return this.http.get(this.api);
  }

  public update(body: any): Observable<any> {
    return this.http.put(this.api, body);
  }

}
