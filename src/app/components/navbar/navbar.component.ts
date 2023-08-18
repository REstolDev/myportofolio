import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  home:string;
  projects:string;
  about:string;
  contact:string;
  techs:string;
  

  constructor(){

    this.home='HOME';
    this.projects="PROJECTS";
    this.about="ABOUT";
    this.contact="CONTACT";
    this.techs="TECHS";
    
  }
  
  public changeTo(_text: string){
    (_text=='HOM3')? this.home=_text : this.home="HOME";
    (_text=='PROJ3C7S')? this.projects=_text : this.projects="PROJECTS";
    (_text=='73CHS')? this.techs=_text : this.techs="TECHS";
    (_text=='CON74C7')? this.contact=_text : this.contact="CONTACT";
    (_text=='4BOU7')? this.about=_text : this.about="ABOUT";   
  }
  
}
