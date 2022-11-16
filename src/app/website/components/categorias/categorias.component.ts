import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../api/category.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


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
