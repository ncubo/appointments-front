import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { IProfessional } from '../../models/professional.interfase';
import { newProfessional } from '../../store/actions/professional.actions';
import { ProfessionalsService } from 'src/app/services/professionals.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  professionalForm!: FormGroup;
  professional!: IProfessional;

  constructor( private fb: FormBuilder, private store: Store<AppState>, private professionalService: ProfessionalsService) { 
    this.createForm();
  }

  createForm() {
    this.professionalForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)] ],
      lastName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]]
    });
  }

  get fm() {
    return this.professionalForm.controls;
  }

  newProfessional(){

    if(this.professionalForm.valid){

      const avatarRdm = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY-0JQANQENmNn3a_Z0ztbnRUOBcpxytNCQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvoxReSWCNakgElKDljNImakGQyQ6vzRkcQ&usqp=CAU'];
  
      let oneOrZero = (Math.random()>=0.5)? 1 : 0;
  
      this.professional = {
        first_name: this.professionalForm.value.firstName,
        last_name: this.professionalForm.value.lastName,
        city: this.professionalForm.value.city,
        avatar: avatarRdm[oneOrZero],
        services: [
          {
            aboutme: 'Im a doctor from XX university and ....',
            service: 'Nutritionist',
            timetable: 'Monday to Wednesday - 15 to 19'
          }
        ]
      };

      // this.professionalService.insertNewProfessional(this.professional)
              // .subscribe(resp => console.log('resppp',resp));
  
     this.store.dispatch( newProfessional({professional: this.professional}) );

    }
    
  }

}
