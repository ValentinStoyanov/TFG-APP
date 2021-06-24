import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { R1 } from '../home/customifaces';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
  export class HistoricoService {
    constructor(private http: HttpClient) {
    }
    postId: any;
    errorMessage: any;  

    report1(): any {
      return this.http.get<any>(`http://localhost:8080/HistoricoPosiciones/report1`)
      }

    report2(): any {
      return this.http.get<any>(`http://localhost:8080/HistoricoPosiciones/report2`)
    }


}




