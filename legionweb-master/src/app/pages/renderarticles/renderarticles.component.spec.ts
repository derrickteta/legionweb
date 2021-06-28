import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderarticlesComponent } from './renderarticles.component';

describe('RenderarticlesComponent', () => {
  let component: RenderarticlesComponent;
  let fixture: ComponentFixture<RenderarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderarticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
