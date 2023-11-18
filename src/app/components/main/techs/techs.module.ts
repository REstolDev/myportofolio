import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechsComponent } from './techs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path: '',
    component: TechsComponent
  }
]

@NgModule({
  declarations: [
    TechsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TechsModule { }
