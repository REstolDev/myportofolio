import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './components/main/contact/contact.component';
import { AboutComponent } from './components/main/about/about.component';
import { TechsComponent } from './components/main/techs/techs.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { HomeComponent } from './components/main/home/home.component';
import { Pag404Component } from './components/pag404/pag404.component';

const routes: Routes = [
        {path:'',component:HomeComponent},
        {path:'home',component:HomeComponent},
        {path:'contact',component:ContactComponent},
        {path:'about',component:AboutComponent},
        {path:'techs',component:TechsComponent},
        {path:'projects',component:ProjectsComponent},
        {path:'**',pathMatch: 'full',component:Pag404Component}//Cualquier otra ruta se dirige a home
               
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
