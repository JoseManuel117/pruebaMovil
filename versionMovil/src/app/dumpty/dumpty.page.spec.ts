import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DumptyPage } from './dumpty.page';

describe('DumptyPage', () => {
  let component: DumptyPage;
  let fixture: ComponentFixture<DumptyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DumptyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
