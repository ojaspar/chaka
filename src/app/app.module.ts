import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { ChartComponent } from './pages/chart/chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { StockCardComponent } from './components/stock-card/stock-card.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    CurrencyCardComponent,
    ChartComponent,
    StockCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CurrencyCardComponent,
    StockCardComponent
  ]
})
export class AppModule { }
