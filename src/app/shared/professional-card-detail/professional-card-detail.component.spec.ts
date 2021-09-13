import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCardDetailComponent } from './professional-card-detail.component';

xdescribe('ProfessionalCardDetailComponent', () => {
  let component: ProfessionalCardDetailComponent;
  let fixture: ComponentFixture<ProfessionalCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
