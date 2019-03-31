import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattingPage } from './chatting.page';

describe('ChattingPage', () => {
  let component: ChattingPage;
  let fixture: ComponentFixture<ChattingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
