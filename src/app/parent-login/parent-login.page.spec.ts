import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLoginPage } from './parent-login.page';

describe('ParentLoginPage', () => {
  let component: ParentLoginPage;
  let fixture: ComponentFixture<ParentLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
