import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileProvider {

  public getImageData(files: any) {
    const FR = new FileReader();

    return new Observable((obs) => {
      FR.addEventListener("load", (e: any) => {
        obs.next({
          base64: e.target.result,
          file: files[0]
        });
      });

      if (files && files[0]) {
        FR.readAsDataURL(files[0]);
      }
    })
  }

}
