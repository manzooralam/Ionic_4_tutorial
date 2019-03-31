import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfilePage } from './child-profile.page';

describe('ChildProfilePage', () => {
  let component: ChildProfilePage;
  let fixture: ComponentFixture<ChildProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
