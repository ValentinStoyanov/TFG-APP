import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHistorico1Component } from './report-historico1.component';

describe('ReportHistorico1Component', () => {
  let component: ReportHistorico1Component;
  let fixture: ComponentFixture<ReportHistorico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportHistorico1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHistorico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});