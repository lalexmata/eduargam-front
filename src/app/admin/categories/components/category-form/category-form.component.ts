import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {CategoryService} from "../../../../api/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swall from 'sweetalert2';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  category_id: string | null | undefined;
  title: string = 'Nueva Categoría';

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.buildForm();
  }
  

  ngOnInit(): void {
    this.category_id =this.route.snapshot.paramMap.get('id');
    if(this.category_id){
      // TODO: buscar informacion de la categoria
      this.title = 'Editar Categoría';
      this.getCategory(this.category_id);
    }

  }
  // para implementar el guard exit
  onExit() {
    let salir = false;
    Swall.fire({
      title: '¿Está seguro de salir?',
      text: "No podrá deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        salir = true;
      }
    })

    return salir;
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
    this.categoryService.create(this.form.value)
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

  async getCategory(id: string) {
    const category = await this.categoryService.getCategoria(id).then((res) => {
        console.log(res);
    });
  }

  private buildForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      type: ['', [Validators.required]],
      slug: ['', ],
      image: ['', [Validators.required, Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]],
    });
  }


}
