import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlentdenousComponent } from './parlentdenous.component';

describe('ParlentdenousComponent', () => {
  let component: ParlentdenousComponent;
  let fixture: ComponentFixture<ParlentdenousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParlentdenousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlentdenousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
