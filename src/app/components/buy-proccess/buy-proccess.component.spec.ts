import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProccessComponent } from './buy-proccess.component';

describe('BuyProccessComponent', () => {
  let component: BuyProccessComponent;
  let fixture: ComponentFixture<BuyProccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyProccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
