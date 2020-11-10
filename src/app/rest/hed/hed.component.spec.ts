import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedComponent } from './hed.component';

describe('HedComponent', () => {
  let component: HedComponent;
  let fixture: ComponentFixture<HedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
