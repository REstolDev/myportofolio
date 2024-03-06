import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/main/contact/contact.component';
import { AboutComponent } from './components/main/about/about.component';
import { TechsComponent } from './components/main/techs/techs.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { HomeComponent } from './components/main/home/home.component';
import { Pag404Component } from './components/pag404/pag404.component';
import { ClientsresourcesComponent } from './components/clientsresources/clientsresources.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'contact',
    loadChildren: () =>
      import('../app/components/main/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },

  {
    path: 'about',
    loadChildren: () =>
      import('../app/components/main/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: 'techs',
    loadChildren: () =>
      import('../app/components/main/techs/techs.module').then(
        (m) => m.TechsModule
      ),
  },

  {
    path: 'projects',
    loadChildren: () =>
      import('../app/components/main/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'resources',component: ClientsresourcesComponent
  },

  { path: '**', component: Pag404Component }, //Cualquier otra ruta se dirige a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
