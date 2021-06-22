import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportMedida2Component } from './report-medida2.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


describe('ReportMedida2Component', () => {
  let component: ReportMedida2Component;
  let fixture: ComponentFixture<ReportMedida2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMedida2Component ],
      imports: [ HttpClientTestingModule ]
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
