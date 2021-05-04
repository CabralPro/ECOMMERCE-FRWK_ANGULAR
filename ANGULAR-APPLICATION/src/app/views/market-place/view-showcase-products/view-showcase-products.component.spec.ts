import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShowcaseProductsComponent } from './view-showcase-products.component';

describe('ViewShowcaseProductsComponent', () => {
  let component: ViewShowcaseProductsComponent;
  let fixture: ComponentFixture<ViewShowcaseProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShowcaseProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShowcaseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
