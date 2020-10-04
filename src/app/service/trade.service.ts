import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseObject } from './TradeInterface'
import { Trade } from '../domain/Trade';


@Injectable({
  providedIn: 'root'
})
export class TradeService {

  data: any;
  trades: Trade[];
  constructor(private http: HttpClient) { }
  getTrades() {

    if (this.trades == undefined) {
      //setTimeout(() =>       {
        this.http.get('http://localhost:8082/trades').subscribe((res: Trade[]) => {

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
        });
      //}, 10000);
    }

    return this.trades;
  }

  generateTrades() {
    this.trades=undefined;
    return this.http.get('http://localhost:8082/generate');
    
  }

  getFrauds() {
    console.log("Called Function");
    return this.http.get('http://localhost:8082/detectionfront');
  }
  
  getWashTrades(broker : string){
    return this.http.get(`http://localhost:8082/detectwash/${broker}`);
  }




  addTrade(trade: Trade) {
    console.log("Trade to be added");
    console.log(trade);
    switch (trade.customerId) {
      case 'Greg Lestrade':
        trade.customerId = 1;
        break;
      case 'John Watson':
        trade.customerId = 2;
        break;
      case 'Martha Hudson':
        trade.customerId = 3;
        break;
      case 'Citi Corp':
        trade.customerId = 221;
    }

    switch (trade.security) {
      case 'Equity Shares':
        trade.security = 1;
        break;
      case 'Put Option':
        trade.security = 2;
        break;
      case 'Call Option':
        trade.security = 3;
        break;
      case 'Futures':
        trade.security = 4;


    }

    switch (trade.securityId) {
      case 'Baker Co.':
        trade.securityId = 1;
        break;
      case 'Conan & Doyle Trades':
        trade.securityId = 2;
        break;
      case 'The Reichenbach Company':
        trade.securityId = 3;
        break;

    }

    if (trade.tradeType == 'Buy') {
      trade.tradeType = true;
    }
    else {
      trade.tradeType = false;
    }
    trade.marketPrice = 0;
    console.log("Trade :" + trade);

    this.http.post('http://localhost:8082/trades/add', trade)
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      })
      this.trades = undefined;
    
      this.getTrades();
  }

}
