import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { Trade } from '../domain/Trade';
import { TradeService } from '../service/trade.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  trades: Trade[];
  constructor(private tradeService: TradeService) { }

  ngOnInit(): void {
    
  }

  generateTrades(){
    console.log("Generating");
    this.tradeService.generateTrades().subscribe((res: Trade[]) => {

      res.map((trade: Trade) => {
        if(!trade.brokerName){
          trade.brokerName = 'Irene Adler';
        }
        switch (trade.customerId) {
          case 1:
            trade.customerId = 'Greg Lestrade';
            break;
          case 2:
            trade.customerId = 'John Watson';
            break;
          case 3:
            trade.customerId = 'Martha Hudson';
            break;
          case 221:
            trade.customerId = 'Citi Corp';
        }

        switch (trade.security) {
          case 1:
            trade.security = 'Equity Shares';
            break;
          case 2:
            trade.security = 'Put Option';
            break;
          case 3:
            trade.security = 'Call Option';
            break;
          case 4:
            trade.security = 'Futures';
        }

        switch (trade.securityId) {
          case 1:
            trade.securityId = 'Baker Co.';
            break;
          case 2:
            trade.securityId = 'Conan & Doyle Trades';
            break;
          case 3:
            trade.securityId = 'The Reichenbach Company';
            break;

        }

        if (trade.tradeType) {
          trade.tradeType = 'Buy';
        }
        else {
          trade.tradeType = 'Sell';
        }



      })
      console.log(res);
      this.trades = res;
      return this.trades;

    }, err => {
      console.log("An error occurred in getting trades");
      console.log(err);
    });;;
  }

}


