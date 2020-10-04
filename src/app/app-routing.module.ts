import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TradeListComponent } from './trade-list/trade-list.component';
import { DisplayFraudsComponent } from './display-frauds/display-frauds.component'
import { MarketWatchComponent } from './market-watch/market-watch.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayWashTradesComponent } from './display-wash-trades/display-wash-trades.component';

const routes: Routes = [
  {path: '', component : HomeScreenComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path : 'tradelist' , component : TradeListComponent},
  {path : 'frauds' , component : DisplayFraudsComponent},
  {path : 'wash trades' , component :DisplayWashTradesComponent},
  {path : 'marketwatch/:company' ,component : MarketWatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
