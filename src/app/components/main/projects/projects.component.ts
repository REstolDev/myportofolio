import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

isHover = {
  GitHub: false,
  Portofolio: false, 
  Netflix:false,
  Bolocas:false,
  Ananda:false,
  GoPaddle:false,
  ReyPatricio:false,
  TimeTrack: false,
  TimeTrackNg: false,
  IpAddressTracker: false,
  AdviceGenerator: false,
  RestCountriesApi: false,
  multiStepForm: false
};


constructor(){}
}
