import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TStateAction } from 'src/app/models/stateAction.type';
import { AppState } from 'src/app/store/app.reducer';
import { IProfessional } from '../../models/professional.interfase';
import { newProfessional } from '../../store/actions/professional.actions';
import { IError } from '../../models/error.interface';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  professionalForm!: FormGroup;
  professional!: IProfessional;// = { avatar:'', city:'', first_name: '', last_name:'', services:[] };
  loading: boolean = false;
  loaded: boolean = false;
  status: TStateAction = 'waiting';
  error!: IError;

  constructor( private fb: FormBuilder, private store: Store<AppState>) { 
    this.createForm();
  }

  ngOnInit(): void {

    this.subscription = this.store.select('professional').subscribe( ({ professional, loading, loaded, error, state }) => {
      this.professional = professional;
      this.loading = loading;
      this.loaded = loaded;
      this.status = state;
      this.error = error;

      if(this.status === 'ok' && this.professionalForm.valid){
        this.resetForm();
      }

    });

    this.setVariables();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createForm() {
    this.professionalForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)] ],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(70)]],
      services: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      timeTable: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(70)]],
      aboutMe: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(70)]],
    });
  }

  get fm() {
    return this.professionalForm.controls;
  }

  resetForm() {
    this.professionalForm.reset();
    setTimeout( () => { 
      this.setVariables();
    }, 3000);
  }

  setVariables() {
    this.loading = false;
    this.loaded = false;
    this.status = 'waiting';
  }

  newProfessional(){

    if(this.professionalForm.valid){

      const avatarRdm = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY-0JQANQENmNn3a_Z0ztbnRUOBcpxytNCQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvoxReSWCNakgElKDljNImakGQyQ6vzRkcQ&usqp=CAU'];
  
      let oneOrZero = (Math.random()>=0.5)? 1 : 0;
  
      this.professional = {
        first_name: this.professionalForm.value.firstName,
        last_name: this.professionalForm.value.lastName,
        city: this.professionalForm.value.city,
        avatar: avatarRdm[oneOrZero],
        services: [
          {
            aboutme: this.professionalForm.value.aboutMe,
            service: this.professionalForm.value.services,
            timetable: this.professionalForm.value.timeTable
          }
        ]
      };
  
      this.store.dispatch( newProfessional({ professional: this.professional }) );

    }
    
  }

}
