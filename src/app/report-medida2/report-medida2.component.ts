import {MedidasService} from '../services/medidas.service'
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Location} from '@angular/common';
import { R2 } from '../home/customifaces';

@Component({
  selector: 'app-report-medida2',
  templateUrl: './report-medida2.component.html',
  styleUrls: ['./report-medida2.component.css']
})
export class ReportMedida2Component implements AfterViewInit {

  displayedColumns: string[] = ['ecu', 'average', 'fechaconv'];
  data: R2[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  dataSource!: MatTableDataSource<R2>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private medidasService: MedidasService,private _location: Location) { }

  respuesta: R2[] = [];

  ngAfterViewInit() {


    this.medidasService.report2().subscribe({
     next: (resp: R2[]) => {
       this.respuesta = resp;
       this.data = resp;
       this.isLoadingResults = false;
       this.dataSource = new MatTableDataSource(resp);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;

       localStorage.setItem("Report 2 -MedidasEscalares- Average monthly consumption at 100KM"+", Date of execution "+new Date().toLocaleString('en-EN')+" R2",JSON.stringify(resp))
   

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
