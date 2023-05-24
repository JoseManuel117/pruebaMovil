import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rtx4090tiPage } from './rtx4090ti.page';

describe('Rtx4090tiPage', () => {
  let component: Rtx4090tiPage;
  let fixture: ComponentFixture<Rtx4090tiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rtx4090tiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
