import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportHistorico1Component } from './report-historico1/report-historico1.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { RecordsComponent } from './records/records.component';
import {MatListModule} from '@angular/material/list';
import { ReportHistorico2Component } from './report-historico2/report-historico2.component';
import { ReportMedida1Component } from './report-medida1/report-medida1.component';
import { ReportMedida2Component } from './report-medida2/report-medida2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "reports", component: ReportsComponent },
  { path: "reportH1", component: ReportHistorico1Component },
  { path: "reportH2", component: ReportHistorico2Component },
  { path: "reportM1", component: ReportMedida1Component },
  { path: "reportM2", component: ReportMedida2Component },
  { path: "records", component: RecordsComponent},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ReportsComponent, ReportHistorico1Component, RecordsComponent, ReportHistorico2Component, ReportMedida1Component, ReportMedida2Component, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
