import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from '../professionals.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor( private professionalServive: ProfessionalsService) { }

  ngOnInit(): void {
  }

}
