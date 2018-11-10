import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CoinPanelComponentComponent} from './components/coin-panel-component/coin-panel-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinPanelComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
