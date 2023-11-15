import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { TechsComponent } from './components/main/techs/techs.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/main/about/about.component';
import { HomeComponent } from './components/main/home/home.component';
import { contactformComponent } from './components/contactform/contactform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Pag404Component } from './components/pag404/pag404.component';

import { Meta } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SocialmediaComponent,
    MainComponent,
    ProjectsComponent,
    ContactComponent,
    TechsComponent,
    AboutComponent,
    HomeComponent,
    contactformComponent,
    Pag404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
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
