import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import {SwiperModule} from "swiper/angular";
import {OpinionsComponent} from "./components/opinions/opinions.component";
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import {ReactiveFormsModule} from "@angular/forms";
import  { PostsCategoryComponent} from "./pages/posts-category/posts-category.component";
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsDetailComponent } from './pages/posts-detail/posts-detail.component';


@NgModule({
    declarations: [
        LayoutComponent,
        HomeComponent,
        NavComponent,
        BannerComponent,
        FooterComponent,
        CarruselComponent,
        CategoriasComponent,
        OpinionsComponent,
        ClientesComponent,
        FormContactoComponent,
        ContactComponent,
        ConveniosComponent,
        PostsCategoryComponent,
        PostsListComponent,
        PostsDetailComponent
    ],
    exports: [
        NavComponent
    ],
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        SwiperModule,
        ReactiveFormsModule,
    ]
})
export class WebsiteModule { }
