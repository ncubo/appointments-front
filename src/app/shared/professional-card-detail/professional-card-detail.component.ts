import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProfessional } from 'src/app/models/professional.interfase';

@Component({
  selector: 'app-professional-card-detail',
  templateUrl: './professional-card-detail.component.html',
  styleUrls: ['./professional-card-detail.component.css']
})
export class ProfessionalCardDetailComponent {

  @Input() professional!: IProfessional;

  constructor( private location: Location) { }

  back(){
    this.location.back();
  }

}
