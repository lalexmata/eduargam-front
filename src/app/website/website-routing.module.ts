import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {PostsCategoryComponent} from "./pages/posts-category/posts-category.component";


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contacto',
        component: ContactComponent,
      },
      {
        path: 'posts',
        children: [
          {
            path: 'categoria/:category',
            component: PostsCategoryComponent,
          }
        ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
