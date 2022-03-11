import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HomeModule     não importar tudo logo ao iniciar o app, boas práticas => lazyLoading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
