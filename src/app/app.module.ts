import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CoinPanelComponentComponent} from './components/coin-panel-component/coin-panel-component.component';
import {LandingPageComponentComponent} from './components/landing-page-component/landing-page-component.component';
import { ChartModule } from 'angular2-highcharts';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    CoinPanelComponentComponent,
    LandingPageComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule.forRoot(require('highcharts')),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);

