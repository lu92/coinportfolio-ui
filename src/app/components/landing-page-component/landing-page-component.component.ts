import { Component } from '@angular/core';
import {Cryptocurrency} from '../../model/cryptocurrency';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss'],
})
export class LandingPageComponentComponent {

  btc = new Cryptocurrency('BTC', 0.5, 4000.0, 2200.0, 2000.0, 200.0, 10.0);
  ltc = new Cryptocurrency('LTC', 3.4, 35.0, 1000.0, 750.0, 255.0, 25.0);
  eth = new Cryptocurrency('ETH', 2.0, 100, 230.0, 200, 30.0, 15.0);
  xrp = new Cryptocurrency('XRP', 222.0, 0.4, 111.0, 94, 30.0, 17.7);
  xrm = new Cryptocurrency('XRM', 1.3, 90, 111.0, 100, 10.0, 7.7);
  xlm = new Cryptocurrency('XLM', 500, 0.34, 155.9, 122, 35.4, 8.7);
  iota = new Cryptocurrency('IOTA', 300, 0.24, 135.9, 151,  -15.4, -8.7);
  bnb = new Cryptocurrency('BNB', 45, 4.2, 145.9, 150,  -5.4, -2.7);
  vet = new Cryptocurrency('VET', 4000, 0.002, 133.9, 153,  -165.4, -102.7);
  ada = new Cryptocurrency('ADA', 500, 0.02, 73.9,  136, -55.4, -20.79);

  balance = [this.btc, this.ltc, this.eth, this.xrp, this.xrm, this.xlm, this.iota, this.bnb, this.vet, this.ada];

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
        categories: this.balance.map((crypto) => crypto.name)
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
        data: this.balance.map((crypto) => crypto.profit >= 0 ? crypto.profit : 0)
      }, {
        name: 'Investment',
        color: '#88898A',
        data: this.balance.map((crypto) => crypto.investment)
      }, {
        name: 'Lost',
        color: '#F4796B',
        data: this.balance.map((crypto) => crypto.profit < 0 ? crypto.profit : 0)
      }]
    };
  }

  options: Object;

}
