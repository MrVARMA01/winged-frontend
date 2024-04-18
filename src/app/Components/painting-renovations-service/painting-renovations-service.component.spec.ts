import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingRenovationsServiceComponent } from './painting-renovations-service.component';

describe('PaintingRenovationsServiceComponent', () => {
  let component: PaintingRenovationsServiceComponent;
  let fixture: ComponentFixture<PaintingRenovationsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintingRenovationsServiceComponent]
    });
    fixture = TestBed.createComponent(PaintingRenovationsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
