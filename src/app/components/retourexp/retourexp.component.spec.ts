import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourexpComponent } from './retourexp.component';

describe('RetourexpComponent', () => {
  let component: RetourexpComponent;
  let fixture: ComponentFixture<RetourexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
