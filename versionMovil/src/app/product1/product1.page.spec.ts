import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product1Page } from './product1.page';

describe('Product1Page', () => {
  let component: Product1Page;
  let fixture: ComponentFixture<Product1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Product1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
