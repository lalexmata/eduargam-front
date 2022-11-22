import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../api/category.service";

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) {}

  categorias: any = [];


  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {
    this.categorias = await this.categoryService.getCategorias();
    console.log(this.categorias);
  }

}
