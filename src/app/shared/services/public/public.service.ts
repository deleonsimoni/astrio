import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private api = "/api/public";

  constructor(private httpClient: HttpClient) { }

  public getLandingData() {
    return this.httpClient.get(this.api);
  }

  public getPresidentes() {
    return this.httpClient.get(`${this.api}/presidentes`);
  }

  public getDiretores() {
    return this.httpClient.get(`${this.api}/diretores`);
  }
}
