import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ConfcitaPage } from './confcita.page';

describe('ConfcitaPage', () => {
  let component: ConfcitaPage;
  let fixture: ComponentFixture<ConfcitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfcitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
