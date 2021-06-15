import {HistoricoService} from '../services/historico.service'
import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit,ChangeDetectionStrategy, OnInit, ChangeDetectorRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
 
@Component({
  selector: 'app-report-historico1',
  templateUrl: './report-historico1.component.html',
  styleUrls: ['./report-historico1.component.css']
})
export class ReportHistorico1Component implements AfterViewInit {
  
  displayedColumns: string[] = ['ecu', 'percentage'];
  data: R1[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  dataSource!: MatTableDataSource<R1>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private historicoService: HistoricoService,) {}

  respuesta: R1[] = [];
  
  ngAfterViewInit() {
  
    

     this.historicoService.report1().subscribe({
      next: (resp: R1[]) => {
        this.respuesta = resp;
        this.data = resp;
        this.isLoadingResults = false;
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    

      },
      error:  (err: any) => {
        console.error(err);
      },
      complete: () => (this),
    });

    

  }
}

export interface R1 {
  ecu: string;
  percentage: string;

}





