import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsServiceComponent } from './electronics-service.component';

describe('ElectronicsServiceComponent', () => {
  let component: ElectronicsServiceComponent;
  let fixture: ComponentFixture<ElectronicsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicsServiceComponent]
    });
    fixture = TestBed.createComponent(ElectronicsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
