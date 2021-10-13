import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationdesiteComponent } from './creationdesite.component';

describe('CreationdesiteComponent', () => {
  let component: CreationdesiteComponent;
  let fixture: ComponentFixture<CreationdesiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationdesiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationdesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
