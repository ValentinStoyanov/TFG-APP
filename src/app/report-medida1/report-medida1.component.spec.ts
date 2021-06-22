import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ReportMedida1Component } from './report-medida1.component';

describe('ReportMedida1Component', () => {
  let component: ReportMedida1Component;
  let fixture: ComponentFixture<ReportMedida1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMedida1Component ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMedida1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
