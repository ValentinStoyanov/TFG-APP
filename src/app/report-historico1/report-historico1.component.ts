import {HistoricoService} from '../services/historico.service'
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Location} from '@angular/common';
import { R1 } from '../home/customifaces';
 

@Component({
  selector: 'app-report-historico1',
  templateUrl: './report-historico1.component.html',
  styleUrls: ['./report-historico1.component.css'],
  providers:[HistoricoService]
})
export class ReportHistorico1Component implements AfterViewInit {
  
  displayedColumns: string[] = ['ecu', 'percentage'];
  data: R1[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  querydony = false;
  dataSource!: MatTableDataSource<R1>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private historicoService: HistoricoService,private _location: Location) {}

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

        localStorage.setItem("Report 1 -HistoricoPosiciones- Percentage of incorrect positions in the last trimester"+", Date of execution "+new Date().toLocaleString('en-EN')+" R1",JSON.stringify(resp))
    

      },
      error:  (err: any) => {
        console.error(err);
      },
      complete: () => (this.querydony=true),
    });
  }

  goBack():void{

    this._location.back();

  }
  

}







