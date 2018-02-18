import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewCarComponent } from './addnew-car.component';

describe('AddnewCarComponent', () => {
  let component: AddnewCarComponent;
  let fixture: ComponentFixture<AddnewCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
