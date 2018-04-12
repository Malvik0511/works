import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceHistoryComponent } from './remittance-history.component';

describe('RemittanceHistoryComponent', () => {
  let component: RemittanceHistoryComponent;
  let fixture: ComponentFixture<RemittanceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemittanceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemittanceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
