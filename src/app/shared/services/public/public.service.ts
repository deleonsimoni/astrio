import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private api = "/api/public";
  public shareInformation: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private httpClient: HttpClient) { }

  public getLandingData() {
    return this.httpClient.get(this.api)
      .pipe(
        tap(data => this.shareInformation.next(data))
      );
  }

  public getPresidentes() {
    return this.httpClient.get(`${this.api}/presidentes`);
  }

  public getDiretores() {
    return this.httpClient.get(`${this.api}/diretores`);
  }
}
