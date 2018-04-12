import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceFormComponent } from './remittance-form.component';

describe('RemittanceFormComponent', () => {
  let component: RemittanceFormComponent;
  let fixture: ComponentFixture<RemittanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemittanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemittanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
