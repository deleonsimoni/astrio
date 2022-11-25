import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstatutoService {

  private api = "/api/admin/estatuto";

  constructor(private http: HttpClient) { }

  public upload(id: string, file: File) {
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify({ id }));
    formData.append('file', file, `${file.name}`);

    return this.http.post(this.api, formData);
  }

  public list(): Observable<any> {
    return this.http.get(this.api);
  }

}
