import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  propertiesForm!: FormGroup;
  
  stationData: {
    totalSales: string
    power?: number, 
    compressionState: string,
    maxTransactionPerHour: number,
    totalValue: string,
    totalTransactionCount: number,
    maxTransactionDateTime: string
  }[] = [
    {
      totalSales: "62,721",
      power: 3,
      compressionState: "Compression",
      maxTransactionPerHour: 20,
      totalValue: "550 EGP",
      totalTransactionCount: 5161,
      maxTransactionDateTime: "8-1-2021 | 10:16 PM"
    },
    {
      totalSales: "62,721",
      power: 3,
      compressionState: "Compression",
      maxTransactionPerHour: 20,
      totalValue: "550 EGP",
      totalTransactionCount: 5161,
      maxTransactionDateTime: "8-1-2021 | 10:16 PM"
    },
    {
      totalSales: "62,721",
      power: 3,
      compressionState: "Compression",
      maxTransactionPerHour: 20,
      totalValue: "550 EGP",
      totalTransactionCount: 5161,
      maxTransactionDateTime: "8-1-2021 | 10:16 PM"
    },
    {
      totalSales: "62,721",
      power: 3,
      compressionState: "Compression",
      maxTransactionPerHour: 20,
      totalValue: "550 EGP",
      totalTransactionCount: 5161,
      maxTransactionDateTime: "8-1-2021 | 10:16 PM"
    },
  ]



}
