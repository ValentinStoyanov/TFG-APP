import { Component } from '@angular/core';
import { HistoricoService } from './services/historico.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HistoricoService]
})
export class AppComponent {
  title = 'TFG-APP';
  
  constructor(private historicoService: HistoricoService){}
  
  ngOnInit(){

  }

}
