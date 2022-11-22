import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuemSomosService {

  private api = "/api/admin/quem-somos";

  constructor(private http: HttpClient) { }

  public list(): Observable<any> {
    return this.http.get(this.api)
      .pipe(
        map(about => about[0])
      );
  }

  public update(body: any): Observable<any> {
    return this.http.put(this.api, body);
  }

}
