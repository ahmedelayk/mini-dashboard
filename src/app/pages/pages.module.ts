import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColumnChartComponent } from './dashboard/chartsComponents/column-chart/column-chart.component';
import { ListComponent } from './dashboard/chartsComponents/list/list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ColumnChartComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgApexchartsModule,
    NgbDropdownModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
