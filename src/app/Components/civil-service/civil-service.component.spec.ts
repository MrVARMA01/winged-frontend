import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilServiceComponent } from './civil-service.component';

describe('CivilServiceComponent', () => {
  let component: CivilServiceComponent;
  let fixture: ComponentFixture<CivilServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivilServiceComponent]
    });
    fixture = TestBed.createComponent(CivilServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
