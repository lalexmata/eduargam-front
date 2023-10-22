import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../../api/category.service";
import {PostsService} from "../../../../api/posts.service";
import {Category} from "../../../../interfaces/categories";
import {Post} from "../../../../interfaces/post";
import Swall from "sweetalert2";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  form: FormGroup;
  categorias: Category[] | undefined;
  post_id: string | null | undefined;
  title: string = 'Nueva Publicación';
  post: Post | undefined;
  constructor(
    private readonly categoryService: CategoryService,
    private readonly postService: PostsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.post_id =this.route.snapshot.paramMap.get('id');
    this.obtenerCategorias();

    if(this.post_id){
      this.title = 'Editar Publicación';
      this.getPost(this.post_id);
      if(this.post) {
        console.log('no se encontro lo solicitado');
      }
    }
  }

  get titleField() {
    return this.form.get('title');
  }
  get statusField() {
    return this.form.get('status');
  }

  get descriptionField() {
    return this.form.get('description');
  }
  get categoriesField() {
    return this.form.get('categories');
  }
  private buildForm() {
    return this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      categories: [[], [Validators.required]],
      status: ['', ],
      images: [[]]
      //images: [[], [Validators.required, Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]],
    });
  }
  private obtenerCategorias() {
    this.categoryService.getCategoriesList()
      .then((res) => { this.categorias = res})
      .catch((error) => {
      console.log('ocurrió un error');
    })
  }
  public save() {
    this.form.markAllAsTouched();

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
        this.goTo('/admin/posts');
      }
    })

  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
  private getPost(id: string) {
    this.postService.getOne(id).subscribe((res) => {
      if(res) {
        let categorias_id: (number | undefined)[] = [];
        res.categories?.forEach((categoria, valor) => {
          console.log('categoria con id', categoria.id);
          categorias_id.push(categoria.id);
        });
        console.log(categorias_id);
        this.form.patchValue(res);
      }
    });
  }
}
