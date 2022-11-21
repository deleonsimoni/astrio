import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AniversariantesService {

  constructor(private httpClient: HttpClient) { }

  getAniversariantes() {
    return this.httpClient.get('http://www.astrio.kinghost.net/aniversariantes/aniversariantes');
  }

  getLandingData() {
    return this.httpClient.get("/api/public");
  }

}
