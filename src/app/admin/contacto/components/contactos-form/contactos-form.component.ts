import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../../api/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swall from "sweetalert2";
import {ContactoService} from "../../../../api/contacto.service";

@Component({
  selector: 'app-contactos-form',
  templateUrl: './contactos-form.component.html',
  styleUrls: ['./contactos-form.component.css']
})
export class ContactosFormComponent implements OnInit {
  form: FormGroup;
  contacto_id: string | null | undefined;
  title: string = 'Gestionar Solicitud de Contacto';
  solicitud: any;
  constructor(
    private contactoService: ContactoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.contacto_id =this.route.snapshot.paramMap.get('id');
    if(!this.contacto_id){
      // TODO: buscar informacion de la categoria
    }else{
      this.getSolicitud(this.contacto_id);
    }

  }

  async getSolicitud(id: string){
    //await this.contactoService.
  }

  get nameField() {
    return this.form.get('name');
  }
  get typeField() {
    return this.form.get('type');
  }

  get descriptionField() {
    return this.form.get('description');
  }

  get slugField() {
    return this.form.get('slug');
  }

  get imageField() {
    return this.form.get('image');
  }

  get isnameFieldValid(){
    return this.nameField?.touched && this.nameField.valid;
  }

  get isnameFieldInvalid(){
    return this.nameField?.touched && this.nameField.invalid;
  }

  get isDescriptionInvalid(){
    return this.descriptionField?.touched && this.descriptionField.invalid;
  }

  get isDescriptionFieldValid(){
    return this.descriptionField?.touched && this.descriptionField.valid;
  }

  get isImageFieldValid(){
    return this.imageField?.touched && this.imageField.valid;
  }

  get isImageFieldInvalid(){
    return this.imageField?.touched && this.imageField.invalid;
  }

  get isSlugFieldValid(){
    return this.slugField?.touched && this.slugField.valid;
  }

  get isSlugFieldInvalid(){
    return this.slugField?.touched && this.slugField.invalid;
  }

  save() {
    this.form.markAllAsTouched()
    console.log(this.form.value);
    if(this.form.invalid) {return}
    this.contactoService.update(this.form.value)
      .then((res) => {
        console.log('creado', res);
        Swall.fire({
          icon: 'success',
          title: 'Creado exitosamente',
          confirmButtonText: 'Ok',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.goTo('/admin/categories');
          }
        })
      })
      .catch((e) => {
        console.log('Ocurrió un error', e);
      })
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  private buildForm() {
    return this.formBuilder.group({
      status: [''],
      comments: [''],
    });
  }

}
