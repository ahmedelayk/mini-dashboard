import { Component } from '@angular/core';
import { listTab } from 'src/app/enums/listTab';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  activeTab: string = listTab.graph;

  cardList: {
    number: string,
    measure: string,
    title: string,
    percentage: string,
    power?: number
  }[] = [
    { number: "71,028", measure: "EGP", title: "total value", percentage: "2%" },
    { number: "20,000", measure: "m", title: "total sales", percentage: "50 m", power: 3 },
    { number: "20,000", measure: "m", title: "avg sales", percentage: "50 m", power: 3 },
    { number: "1567", measure: "", title: "total transaction count", percentage: "20" },
  ]
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
