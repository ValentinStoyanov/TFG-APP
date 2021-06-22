import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { HistoricoService } from './services/historico.service';
import { MedidasService } from './services/medidas.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HistoricoService,MedidasService,HttpClient]
})
export class AppComponent {
  title = 'TFG-APP';
  
  constructor(){}
  
  ngOnInit(){

  }

}
