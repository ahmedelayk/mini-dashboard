import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "light Blue",
          data: [350, 370, 420, 240, 190, 210, 310, 190, 150, 200, 400, 290],
          color: "#00CBC0",
        },
        {
          name: "dark Blue",
          data: [200, 180, 240, 320, 200, 400, 250, 180, 380, 250, 300, 190],
          color: "#009ACF"
        }
      ],
      chart: {
        height: 300,
        // width: 400,
        type: "radar",
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: false,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        // text: "Radar Chart - Multi Series"
      },
      stroke: {
        width: 1,
        show: true
      },
      fill: {
        // opacity: [0.2, 0.4]
      },
      markers: {
        size: 0,
        // showNullDataPoints: true
      },
      xaxis: {
        categories: ["24:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
        labels: {
          show: true,
          hideOverlappingLabels: true,
          style: {
            fontSize: "10px",
            fontWeight: "500",
            fontFamily: 'Montserrat',
          }
        }
      }
    }
  }
}
