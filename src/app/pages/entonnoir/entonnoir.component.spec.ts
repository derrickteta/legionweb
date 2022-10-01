import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntonnoirComponent } from './entonnoir.component';

describe('EntonnoirComponent', () => {
  let component: EntonnoirComponent;
  let fixture: ComponentFixture<EntonnoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntonnoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntonnoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
