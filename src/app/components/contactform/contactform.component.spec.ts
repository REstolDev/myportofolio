import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactformComponent } from './contactform.component';

describe('contactformComponent', () => {
  let component: contactformComponent;
  let fixture: ComponentFixture<contactformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [contactformComponent]
    });
    fixture = TestBed.createComponent(contactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
