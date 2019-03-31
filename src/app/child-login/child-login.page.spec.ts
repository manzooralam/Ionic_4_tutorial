import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLoginPage } from './child-login.page';

describe('ChildLoginPage', () => {
  let component: ChildLoginPage;
  let fixture: ComponentFixture<ChildLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
