import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlPage } from './url.page';

describe('UrlPage', () => {
  let component: UrlPage;
  let fixture: ComponentFixture<UrlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
