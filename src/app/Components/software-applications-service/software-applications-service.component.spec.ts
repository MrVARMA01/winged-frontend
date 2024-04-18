import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareApplicationsServiceComponent } from './software-applications-service.component';

describe('SoftwareApplicationsServiceComponent', () => {
  let component: SoftwareApplicationsServiceComponent;
  let fixture: ComponentFixture<SoftwareApplicationsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareApplicationsServiceComponent]
    });
    fixture = TestBed.createComponent(SoftwareApplicationsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
