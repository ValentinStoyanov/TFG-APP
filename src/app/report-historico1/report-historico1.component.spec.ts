import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ReportHistorico1Component } from './report-historico1.component';


describe('ReportHistorico1Component', () => {
  let component: ReportHistorico1Component;
  let fixture: ComponentFixture<ReportHistorico1Component>;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportHistorico1Component ],
      imports:[HttpClientTestingModule]
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
