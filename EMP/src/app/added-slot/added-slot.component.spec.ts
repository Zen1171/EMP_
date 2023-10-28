import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedSlotComponent } from './added-slot.component';

describe('AddedSlotComponent', () => {
  let component: AddedSlotComponent;
  let fixture: ComponentFixture<AddedSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedSlotComponent]
    });
    fixture = TestBed.createComponent(AddedSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
