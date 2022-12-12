import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../../api/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleService} from "../../../../api/role.service";
import {UserService} from "../../../../api/user.service";
import {Role} from "../../../../interfaces/user";
import Swall from "sweetalert2";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  user_id: string | null | undefined;
  roles: any = null;
  title: string = 'Nuevo Usuario';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private rolesService: RoleService,
    private userService: UserService,
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.getRoles();
    this.user_id =this.route.snapshot.paramMap.get('id');
    if(this.user_id){
      // TODO: buscar informacion de la categoria
      this.title = 'Editar Usuario';
      this.getUser(this.user_id);
    }

  }

  private buildForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', [Validators.required]],
      password: ['', [Validators.minLength(4)]],
    });
  }

  getUser(id: string) {
    const user = this.userService.getOne(id)
      .subscribe((res) => {
        const datos = {
          name: res.name,
          role_id: res?.role?.id,
          email: res.email,
          password: ''
        };
        this.form.patchValue(datos);
      }, error => {
        Swall.fire({
          icon: 'error',
          title: 'Ups! Ocurrió un error',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.goTo('/admin/users');
          }
        });
      });
  }

  async getRoles(){
    const roles = await this.rolesService.getAll()
      .subscribe((roles) => {this.roles =roles; })
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  get nameField() {
    return this.form.get('name');
  }

  get roleField() {
    return this.form.get('role_id');
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

  save() {
    this.form.markAllAsTouched()
    if(this.form.invalid) {return}
    this.userService.create(this.form.value)
      .subscribe((res) => {
        Swall.fire({
          icon: 'success',
          title: 'Creado exitosamente',
          confirmButtonText: 'Ok',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.goTo('/admin/users');
          }
        })
      }, error => {
        Swall.fire({
          icon: 'error',
          title: 'Ocurrió un error al guardar la información',
          confirmButtonText: 'Ok',
        })
        console.log('Ocurrió un error', error);
      })

  }

}
