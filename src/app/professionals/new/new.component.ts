import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { IProfessional } from '../../models/professional.interfase';
import { newProfessional } from '../../store/actions/professional.actions';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  professionalForm!: FormGroup;
  professional: IProfessional = {
    first_name: '',
    last_name: '',
    city: '',
    avatar: ''
  };

  constructor( private fb: FormBuilder, private store: Store<AppState>) { 
    this.createForm();
  }

  createForm() {
    this.professionalForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)] ],
      lastName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]]
    });
  }


  ngOnInit(): void {
    console.log('NewComponent proff');

    // this.professionalServive.insertNewProfessional()
    //               .subscribe( res => console.log('resss newProfe',res));
  }

  get fm() {
    return this.professionalForm.controls;
  }

  newProfessional(){

    if(this.professionalForm.valid){
      console.log('new Professional', this.professionalForm);

      const avatarRdm = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY-0JQANQENmNn3a_Z0ztbnRUOBcpxytNCQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvoxReSWCNakgElKDljNImakGQyQ6vzRkcQ&usqp=CAU'];
  
      let oneOrZero = (Math.random()>=0.5)? 1 : 0;
  
      this.professional = {
        first_name: this.professionalForm.value.firstName,
        last_name: this.professionalForm.value.lastName,
        city: this.professionalForm.value.city,
        avatar: avatarRdm[oneOrZero]
      }
  
  
      console.log(this.professional);
      this.store.dispatch( newProfessional({professional: this.professional}) );
      
      // this.professionalServive.insertNewProfessional().subscribe( res => console.log('resss newProfe',res));
    }
    
  }

}
