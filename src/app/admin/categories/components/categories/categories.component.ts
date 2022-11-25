import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../api/category.service";
import Swall from "sweetalert2";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategoriesList().then(res => this.categories = res);
  }

  deleteCategory(id: string) {
    Swall.fire({
      title: '¿Está seguro de eliminar la categoría?',
      text: "No podrá deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.delete(id)
          .then((res) => {
            Swall.fire(
              'Eliminada!',
              'la categoría ha sido eliminada.',
              'success'
            )
          })
          .catch(e => {
            Swall.fire(
              'Ups!!',
              'Ocurrió un error al eliminar, intente nuevamente.',
              'error'
            )
          })
      }
    })
  }

}
