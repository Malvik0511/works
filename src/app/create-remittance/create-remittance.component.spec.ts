import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateRemittanceComponent } from './crate-remittance.component';

describe('CrateRemittanceComponent', () => {
  let component: CrateRemittanceComponent;
  let fixture: ComponentFixture<CrateRemittanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrateRemittanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
