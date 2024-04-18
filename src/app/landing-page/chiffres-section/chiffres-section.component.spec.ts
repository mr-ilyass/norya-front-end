import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffresSectionComponent } from './chiffres-section.component';

describe('ChiffresSectionComponent', () => {
  let component: ChiffresSectionComponent;
  let fixture: ComponentFixture<ChiffresSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiffresSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChiffresSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
