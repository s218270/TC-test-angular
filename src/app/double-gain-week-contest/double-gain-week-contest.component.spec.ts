import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleGainWeekContestComponent } from './double-gain-week-contest.component';

describe('DoubleGainWeekContestComponent', () => {
  let component: DoubleGainWeekContestComponent;
  let fixture: ComponentFixture<DoubleGainWeekContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleGainWeekContestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoubleGainWeekContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
