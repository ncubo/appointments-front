import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from 'src/app/services/professionals.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor( private professionalServive: ProfessionalsService) { }

  ngOnInit(): void {
    console.log('NewComponent');
  }

}
