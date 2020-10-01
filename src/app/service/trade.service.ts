import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ResponseObject} from './TradeInterface'
import { Trade } from '../domain/Trade';


@Injectable({
  providedIn: 'root'
})
export class TradeService {

  data : any;
  trades:Trade[];
  constructor(private http: HttpClient) { }
  getTrades() {
    
    return this.http.get('http://localhost:8082/trades'/*'assets/table-data.json'*/)
  }

  getFrauds() {
    return this.http.get('assets/fraud-data.json');
  }
/* */
      


      
  addTrade(trade:Trade){
    switch(trade.customerId){
      case 'Customer 1':
        trade.customerId = 1;
        break;
      case 'Customer 2':
        trade.customerId = 2;
        break;
      case 'Customer 3':
        trade.customerId = 3;
        break;
      case 'Citi' :
        trade.customerId =200;
    }

    switch(trade.security){
      case 'Equity Shares':
        trade.security = 1;
        break;
      case 'Call Option':
        trade.security = 2;
        break;
      case 'Put Option':
        trade.security = 3;
        break;
      case 'Futures' :
        trade.security = 4;
    }

    switch(trade.securityId){
      case 'Walmart':
        trade.securityId = 2;
        break;
      case 'Apple':
        trade.securityId = 1;
        break;
      case 'Facebook':
        trade.securityId = 3;
        break;

    }

    if(trade.tradeType == 'Buy'){
      trade.tradeType = true;
    }
    else{
      trade.tradeType = false;
    }

    console.log("Trade :"+trade);

    this.http.post('http://localhost:8082/trades/add',trade)
    .subscribe(data =>{
      console.log(data);
    },err => {
      console.log(err);
    } )
  }

}
