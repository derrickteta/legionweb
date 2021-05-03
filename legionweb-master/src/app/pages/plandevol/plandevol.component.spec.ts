import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandevolComponent } from './plandevol.component';

describe('PlandevolComponent', () => {
  let component: PlandevolComponent;
  let fixture: ComponentFixture<PlandevolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlandevolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlandevolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
