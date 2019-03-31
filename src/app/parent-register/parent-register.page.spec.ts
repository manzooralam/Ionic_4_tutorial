import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRegisterPage } from './parent-register.page';

describe('ParentRegisterPage', () => {
  let component: ParentRegisterPage;
  let fixture: ComponentFixture<ParentRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
