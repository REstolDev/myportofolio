import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactformComponent } from './contactform.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('contactformComponent', () => {
  let component: contactformComponent;
  let fixture: ComponentFixture<contactformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,ReactiveFormsModule],
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
