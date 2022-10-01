import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencementnaturelComponent } from './referencementnaturel.component';

describe('ReferencementnaturelComponent', () => {
  let component: ReferencementnaturelComponent;
  let fixture: ComponentFixture<ReferencementnaturelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencementnaturelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencementnaturelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
