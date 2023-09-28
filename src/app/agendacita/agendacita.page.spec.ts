import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendacitaPage } from './agendacita.page';

describe('AgendacitaPage', () => {
  let component: AgendacitaPage;
  let fixture: ComponentFixture<AgendacitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgendacitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
