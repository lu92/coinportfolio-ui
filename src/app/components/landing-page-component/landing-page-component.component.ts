import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss'],
})
export class LandingPageComponentComponent implements OnInit {

  constructor() {

    this.options = {
      chart: {
        type: 'column',
        backgroundColor: '#44494D'
      },
      title: {
        text: 'Summary of investment',
        style: { 'color': '#88898A', 'fontSize': '24px' }
      },
      xAxis: {
        categories: ['BTC', 'LTC', 'ETH', 'XRP', 'XRM', 'XLM', 'BNB']
      },
      yAxis: {
        min: -200,
        title: {
          text: ''
        },
        gridLineColor: '#88898A',
        lineColor: '#44494D',
        stackLabels: {
          enabled: false,
          style: {
            fontWeight: 'bold',
            color: 'red'
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color:  'white'
          }
        }
      },
      series: [{
        name: 'Profit',
        color: '#44BBA4',
        data: [400, 0, 40, 700, 20, 0, 0]
      }, {
        name: 'Investment',
        color: '#88898A',
        data: [200, 200, 30, 200, 800, 100, 700]
      }, {
        name: 'Lost',
        color: '#F4796B',
        data: [0, -100, 0, 0, 0, -80, 0]
      }]
    };
  }

  options: Object;

  ngOnInit() {
  }

}
