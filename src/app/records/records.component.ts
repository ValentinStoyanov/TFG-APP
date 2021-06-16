import { Component, AfterViewInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements AfterViewInit {
  displayedColumns: string[] = ['ecu', 'percentage'];
  showMe:boolean = false;
  showMeNow:boolean = true;
  typesOfReports: string[] = Object.keys(localStorage)
  dataSource = new MatTableDataSource() 

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  

  ngAfterViewInit(): void {



  }

  execute_report(rep: string): void {
     
    if (rep == null){
      alert("There is no record selected")
    }else{

      
    this.showMe = true
    this.showMeNow = false

    let str = localStorage.getItem(rep)
    
    let str1:string = ""

    if (str != null){
      str1 = str
    }
  
    
    this.dataSource = new MatTableDataSource( JSON.parse(str1)) 

    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);

    }


 

  }



  close(): void {

    this.showMe = false
    this.showMeNow = true
  }



  delete(rep: string): void {

    if (rep == null){

      alert("There is not record selected")

    }else{
      localStorage.removeItem(rep)

      window.location.reload();
    }
    
      

    }



}





