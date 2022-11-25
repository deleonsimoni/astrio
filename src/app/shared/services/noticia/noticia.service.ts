import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private api = "/api/admin/noticia";

  constructor(private http: HttpClient) { }

  public list(): Observable<any> {
    return this.http.get(this.api);
  }

  public create(body: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(body));

    if (file) {
      formData.append('file', file, `${file.name}`);
    }

    return this.http.post(this.api, formData);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

}
