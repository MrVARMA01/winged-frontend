import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalsServiceComponent } from './mechanicals-service.component';

describe('MechanicalsServiceComponent', () => {
  let component: MechanicalsServiceComponent;
  let fixture: ComponentFixture<MechanicalsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicalsServiceComponent]
    });
    fixture = TestBed.createComponent(MechanicalsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
