import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoinsComponent } from './statoins.component';

describe('StatoinsComponent', () => {
  let component: StatoinsComponent;
  let fixture: ComponentFixture<StatoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatoinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
