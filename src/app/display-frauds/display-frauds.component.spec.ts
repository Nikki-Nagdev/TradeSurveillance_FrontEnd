import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFraudsComponent } from './display-frauds.component';

describe('DisplayFraudsComponent', () => {
  let component: DisplayFraudsComponent;
  let fixture: ComponentFixture<DisplayFraudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFraudsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFraudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
