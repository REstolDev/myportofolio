import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { contactformComponent } from '../../contactform/contactform.component';
import { SocialmediaModule } from '../../socialmedia/socialmedia.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
  {
    path: '',
    component: ContactComponent
  }
]


@NgModule({
  declarations: [
    ContactComponent,
    contactformComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SocialmediaModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContactModule { }
