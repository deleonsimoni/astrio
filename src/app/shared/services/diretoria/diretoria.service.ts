import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

enum Cargo {
  ""
}

@Injectable({
  providedIn: 'root'
})
export class DiretoriaService {

  private api = "/api/admin/diretor";

  constructor(private http: HttpClient) { }

  public list(): Observable<any> {
    return this.http.get(this.api);
  }

  public create(body: any): Observable<any> {
    return this.http.post(this.api, body);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

}


