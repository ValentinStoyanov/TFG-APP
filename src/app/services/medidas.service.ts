import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
  export class MedidasService {
    constructor(private http: HttpClient) {
    }
    postId: any;
    errorMessage: any;  

    

    report1(): any {
      return this.http.get<any>(`http://localhost:8080/MedidaEscalar/report1`)
      }

    report2(): any {
      return this.http.get<any>(`http://localhost:8080/MedidaEscalar/report2`)
    }

}