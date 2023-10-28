import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedSlotComponent } from './confirmed-slot.component';

describe('ConfirmedSlotComponent', () => {
  let component: ConfirmedSlotComponent;
  let fixture: ComponentFixture<ConfirmedSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedSlotComponent]
    });
    fixture = TestBed.createComponent(ConfirmedSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
