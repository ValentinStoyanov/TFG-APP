import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMedida2Component } from './report-medida2.component';

describe('ReportMedida2Component', () => {
  let component: ReportMedida2Component;
  let fixture: ComponentFixture<ReportMedida2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMedida2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMedida2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
