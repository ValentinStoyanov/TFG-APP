import {HistoricoService} from '../services/historico.service'
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { R1 } from '../home/customifaces';
import {Location} from '@angular/common';

@Component({
  selector: 'app-report-historico2',
  templateUrl: './report-historico2.component.html',
  styleUrls: ['./report-historico2.component.css']
})
export class ReportHistorico2Component implements AfterViewInit {

  displayedColumns: string[] = ['ecu', 'percentage'];
  data: R1[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  dataSource!: MatTableDataSource<R1>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private historicoService: HistoricoService,private _location: Location) {}

  respuesta: R1[] = [];
  ngAfterViewInit() {


    this.historicoService.report2().subscribe({
     next: (resp: R1[]) => {
       this.respuesta = resp;
       this.data = resp;
       this.isLoadingResults = false;
       this.dataSource = new MatTableDataSource(resp);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;

       localStorage.setItem("Report 2 -HistoricoPosiciones- Mean fuel level percentage of every vehicle "+", Date of execution "+new Date().toLocaleString('en-EN')+ " R1",JSON.stringify(resp))
   

     },
     error:  (err: any) => {
       console.error(err);
     },
     complete: () => (this),
   });
 }

 goBack():void{

  this._location.back();

}

}
