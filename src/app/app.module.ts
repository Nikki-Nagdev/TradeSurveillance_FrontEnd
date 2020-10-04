import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import {CheckboxModule} from 'primeng/checkbox'; 
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PanelModule} from 'primeng/panel';
import {GalleriaModule} from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeListComponent } from './trade-list/trade-list.component';
import { DisplayFraudsComponent } from './display-frauds/display-frauds.component';
import { MarketWatchComponent } from './market-watch/market-watch.component';
import { TradeService } from './service/trade.service';
import { DisplayWashTradesComponent } from './display-wash-trades/display-wash-trades.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    DashboardComponent,
    TradeListComponent,
    DisplayFraudsComponent,
    MarketWatchComponent,
    DisplayWashTradesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    SidebarModule,
    InputNumberModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: '/users/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    CheckboxModule,
    ChartModule,
    CardModule,
    ProgressSpinnerModule,
    PanelModule,
    GalleriaModule,
    DialogModule




  ],
  providers: [
    TradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
