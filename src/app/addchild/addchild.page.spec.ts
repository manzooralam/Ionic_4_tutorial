import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchildPage } from './addchild.page';

describe('AddchildPage', () => {
  let component: AddchildPage;
  let fixture: ComponentFixture<AddchildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchildPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
