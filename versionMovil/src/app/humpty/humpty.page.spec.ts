import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HumptyPage } from './humpty.page';

describe('HumptyPage', () => {
  let component: HumptyPage;
  let fixture: ComponentFixture<HumptyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HumptyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
