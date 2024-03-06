import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsresourcesComponent } from './clientsresources.component';

describe('ClientsresourcesComponent', () => {
  let component: ClientsresourcesComponent;
  let fixture: ComponentFixture<ClientsresourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsresourcesComponent]
    });
    fixture = TestBed.createComponent(ClientsresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
