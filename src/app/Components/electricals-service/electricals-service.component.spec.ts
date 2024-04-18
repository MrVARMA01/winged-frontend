import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalsServiceComponent } from './electricals-service.component';

describe('ElectricalsServiceComponent', () => {
  let component: ElectricalsServiceComponent;
  let fixture: ComponentFixture<ElectricalsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricalsServiceComponent]
    });
    fixture = TestBed.createComponent(ElectricalsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
