import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundrecruitingComponent } from './inboundrecruiting.component';

describe('InboundrecruitingComponent', () => {
  let component: InboundrecruitingComponent;
  let fixture: ComponentFixture<InboundrecruitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundrecruitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundrecruitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
