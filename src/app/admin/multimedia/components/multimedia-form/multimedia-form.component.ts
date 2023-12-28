import { Component, OnInit } from '@angular/core';
import Swall from "sweetalert2";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {throwError} from "rxjs";
import {MultimediaService} from "../../../../api/multimedia.service";

@Component({
  selector: 'app-multimedia-form',
  templateUrl: './multimedia-form.component.html',
  styleUrls: ['./multimedia-form.component.css']
})
export class MultimediaFormComponent {
  title: string = 'Nuevas Imágenes';
  status: "initial" | "uploading" | "success" | "fail" = "initial";
  files: File | undefined;
  constructor(
    private readonly multimediaService: MultimediaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  onChange(event: any) {
    const files = event.target.files;

    if (files.length) {
      this.status = "initial";
      this.files = files;
    }
  }

  onUpload() {
    if (this.files) {
      const name = new Date().toISOString();
      // servicio de imagenes va aca
      this.status = "uploading";
      /*this.multimediaService.subir(this.files, name)
        .then(() => {
          this.status = "success";
        })
        .catch((error) => {
          this.status = "fail";
          return throwError(() => error);
        });*/
    }
  }

  public cancel() {
    Swall.fire({
      title: '¿Está seguro de descartar los cambios?',
      text: "No podrá deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.goTo('/admin/multimedia');
      }
    })

  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

}
