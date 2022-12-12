import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {WebsiteModule} from "./website/website.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TimeInterceptor} from "./interceptors/time.interceptor";
import {TokenInterceptor} from "./interceptors/token.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
                /*data: {
                  preload: true
                }*/
            },
            {path: '**', component: NotFoundComponent},
        ]),
        WebsiteModule,
        HttpClientModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
