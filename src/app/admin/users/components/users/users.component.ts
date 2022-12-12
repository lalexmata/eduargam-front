import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../api/category.service";
import Swall from "sweetalert2";
import {UserService} from "../../../../api/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe(res => this.users = res);
  }

  deleteUser(id: string) {
    Swall.fire({
      title: '¿Está seguro de eliminar el usuario?',
      text: "No podrá deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(id)
          .subscribe((res) => {
            Swall.fire(
              'Eliminada!',
              'el usuario ha sido eliminado.',
              'success'
            )
          }, error =>((error: any) => {
            Swall.fire(
              'Ups!!',
              'Ocurrió un error al eliminar, intente nuevamente.',
              'error'
            )
          }) );
      }
    })
  }

}
