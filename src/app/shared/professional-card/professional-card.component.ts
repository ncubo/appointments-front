import { Component, OnInit, Input } from '@angular/core';
import { IProfessional } from '../../models/professional.interfase';

@Component({
  selector: 'professional-card',
  templateUrl: './professional-card.component.html',
  styleUrls: ['./professional-card.component.css']
})
export class ProfessionalCardComponent implements OnInit {

  @Input() professional!: IProfessional;
  // {
  //   id: 0,
  //   avatar: '',
  //   city: '',
  //   first_name: '',
  //   last_name: ''
  // };

  constructor() { }

  ngOnInit(): void {
    console.log('');
  }

}
