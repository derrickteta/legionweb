import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundmarketingComponent } from './inboundmarketing.component';

describe('InboundmarketingComponent', () => {
  let component: InboundmarketingComponent;
  let fixture: ComponentFixture<InboundmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundmarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
