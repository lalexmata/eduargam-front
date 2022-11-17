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
        ClientesComponent
    ],
    exports: [
        NavComponent
    ],
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        SwiperModule
    ]
})
export class WebsiteModule { }
