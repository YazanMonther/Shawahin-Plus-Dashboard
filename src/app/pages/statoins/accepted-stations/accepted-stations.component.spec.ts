import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedStationsComponent } from './accepted-stations.component';

describe('AcceptedStationsComponent', () => {
  let component: AcceptedStationsComponent;
  let fixture: ComponentFixture<AcceptedStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptedStationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptedStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
