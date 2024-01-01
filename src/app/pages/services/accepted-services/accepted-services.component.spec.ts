import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedServicesComponent } from './accepted-services.component';

describe('AcceptedServicesComponent', () => {
  let component: AcceptedServicesComponent;
  let fixture: ComponentFixture<AcceptedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptedServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
