import { Component, ViewChild } from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
import { graphTab } from "src/app/enums/graphTab";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sales",
          data: [160, 67, 113, 138, 67]
        }
      ],
      chart: {
        height: 290,
        type: "bar",
        toolbar: {
          show: false
        },
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#FF7F5C",
        "#FF7F5C",
        "#FF7F5C",
        "#FF7F5C",
        "#FF7F5C",
      ],
      plotOptions: {
        bar: {
          columnWidth: "11px",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: true
      },
      xaxis: {
        categories: [
          ["Station Name", "Dummy1"],
          ["Station Name", "Dummy1"],
          ["Station Name", "Dummy1"],
          ["Station Name", "Dummy1"],
          ["Station Name", "Dummy1"]
        ],
        labels: {
          style: {
            colors: [
              "#3D5161",
              "#3D5161",
              "#3D5161",
              "#3D5161",
              "#3D5161"
            ],
            fontSize: "10px"
          }
        }
      }
    };
  }

  activeTab: string = graphTab.sales;
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
