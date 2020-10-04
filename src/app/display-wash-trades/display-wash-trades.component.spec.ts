import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWashTradesComponent } from './display-wash-trades.component';

describe('DisplayWashTradesComponent', () => {
  let component: DisplayWashTradesComponent;
  let fixture: ComponentFixture<DisplayWashTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWashTradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWashTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
