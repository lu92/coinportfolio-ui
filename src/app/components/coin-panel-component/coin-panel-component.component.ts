import {Component, Input} from '@angular/core';
import {Cryptocurrency} from '../../model/cryptocurrency';

@Component({
  selector: 'app-coin-panel-component',
  templateUrl: './coin-panel-component.component.html',
  styleUrls: ['./coin-panel-component.component.css']
})
export class CoinPanelComponentComponent {

  @Input()
  coin: Cryptocurrency;

}
