import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmOrderComponent } from './user-confirm-order.component';

describe('UserConfirmOrderComponent', () => {
  let component: UserConfirmOrderComponent;
  let fixture: ComponentFixture<UserConfirmOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserConfirmOrderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfirmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
