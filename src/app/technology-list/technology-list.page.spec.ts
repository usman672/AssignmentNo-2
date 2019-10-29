import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyListPage } from './technology-list.page';

describe('TechnologyListPage', () => {
  let component: TechnologyListPage;
  let fixture: ComponentFixture<TechnologyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
