import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  model!: NgbDateStruct;
  model2!: NgbDateStruct;
  activeTab: string = "today";

  ngOnInit(): void {
   
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
