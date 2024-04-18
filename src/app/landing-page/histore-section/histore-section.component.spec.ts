import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoreSectionComponent } from './histore-section.component';

describe('HistoreSectionComponent', () => {
  let component: HistoreSectionComponent;
  let fixture: ComponentFixture<HistoreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoreSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
