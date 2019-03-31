import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentProfilePage } from './parent-profile.page';

describe('ParentProfilePage', () => {
  let component: ParentProfilePage;
  let fixture: ComponentFixture<ParentProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
