import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ReportHistorico2Component } from './report-historico2.component';

describe('ReportHistorico2Component', () => {
  let component: ReportHistorico2Component;
  let fixture: ComponentFixture<ReportHistorico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportHistorico2Component ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHistorico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
