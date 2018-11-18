import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CoinPanelComponentComponent} from './components/coin-panel-component/coin-panel-component.component';
import {LandingPageComponentComponent} from './components/landing-page-component/landing-page-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinPanelComponentComponent,
    LandingPageComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
