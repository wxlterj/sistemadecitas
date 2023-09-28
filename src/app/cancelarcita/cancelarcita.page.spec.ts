import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelarcitaPage } from './cancelarcita.page';

describe('CancelarcitaPage', () => {
  let component: CancelarcitaPage;
  let fixture: ComponentFixture<CancelarcitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CancelarcitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
