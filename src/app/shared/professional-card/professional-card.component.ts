import { Component, OnInit, Input } from '@angular/core';
import { IProfessional } from '../../models/professional.interfase';

@Component({
  selector: 'professional-card',
  templateUrl: './professional-card.component.html',
  styleUrls: ['./professional-card.component.css']
})
export class ProfessionalCardComponent {

  @Input() professional!: IProfessional;

  constructor() { }

}
