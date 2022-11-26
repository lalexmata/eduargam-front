import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../api/category.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactoService} from "../../../api/contacto.service";
import Swall from 'sweetalert2';
@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private contactoService: ContactoService,
  ) {
    this.form = this.buildfForm();
  }

  categorias: any = [];



  ngOnInit(): void {
    this.getCategories();
  }

  private buildfForm() {
    return this.formBuilder.group({
      name: [ '', [Validators.required]],
      rut: [ '', [Validators.required]],
      telephone: [ '', [Validators.required]],
      email: [ '', [Validators.required]],
      address: [ '', [Validators.required]],
      category_id: [ '', [Validators.required]],
      tipo_contacto: [ '', [Validators.required]],
      comments: [ '', [Validators.required]],
    })
  }

  async getCategories() {
    this.categorias = await this.categoryService.getCategorias();
  }
  get nameField(){
    return this.form.get('name');
  }
  get rutField(){
    return this.form.get('rut');
  }

  get telephoneField(){
    return this.form.get('telephone');
  }
  get emailField(){
    return this.form.get('email');
  }
  get addressField(){
    return this.form.get('address');
  }
  get categoryField(){
    return this.form.get('category_id');
  }
  get tipoContactoField(){
    return this.form.get('tipo_contacto');
  }
  get commentsField(){
    return this.form.get('comments');
  }

  save(){
    this.form.markAllAsTouched();
    console.log(this.form.value);
    if(!this.form.valid){ return }
    this.contactoService.create(this.form.value)
      .then((res) => {
        console.log('creado', res);
        Swall.fire({
          icon: 'success',
          title: 'Hemos recibido su solicitud',
          html: 'Nos comunicaremos con usted en la brevedad',
          confirmButtonText: 'Ok',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.form.reset();
          }
        })
      })
      .catch((e) => {
        console.log('Ocurrió un error', e);
      })

  }

}
