import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';
import { Pag404Component } from './components/pag404/pag404.component';

import { Meta } from '@angular/platform-browser';
import { SocialmediaModule } from './components/socialmedia/socialmedia.module';
import { ClientsresourcesComponent } from './components/clientsresources/clientsresources.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    Pag404Component,
    ClientsresourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialmediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private meta: Meta) { 
    this.meta.addTags([ 
      { name: 'description', content: "FrontEnd Developer - Hello! I'm Ramon, a Passionate Frontend Developer who Enjoys Creating Functional, Creative, and Attractive Digital Solutions." }, 
      { name: 'title', content: 'Ramon Estol - FrontEnd Developer' },
      { name: 'keywords', content: 'Desarrollador Angular FrontEnd Developer' } 
  ]);
  }
}
