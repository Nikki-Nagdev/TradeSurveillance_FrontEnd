import { Component, OnInit } from '@angular/core';
import { TradeService } from '../service/trade.service';
import { Trade } from '../domain/Trade';
import { NGXLogger } from 'ngx-logger'

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  trades: Trade[];
  cols : any[];
  constructor(private tradeService: TradeService, private logger : NGXLogger) { }

  ngOnInit(): void {
    this.tradeService.getTrades().subscribe((res: Trade[]) => {
      
      res.map( (trade :Trade)=>{
        switch(trade.customerId){
          case 1:
            trade.customerId = 'Customer 1';
            break;
          case 2:
            trade.customerId = 'Customer 2';
            break;
          case 3:
            trade.customerId = 'Customer 3';
            break;
          case 200 :
            trade.customerId ='Citi';
        }
    
        switch(trade.security){
          case 1:
            trade.security = 'Equity Shares';
            break;
          case 2:
            trade.security = 'Call Option';
            break;
          case 3:
            trade.security = 'Put Option';
            break;
          case  4:
            trade.security = 'Futures';
        }
    
        switch(trade.securityId){
          case 2:
            trade.securityId = 'Walmart';
            break;
          case 1:
            trade.securityId = 'Apple';
            break;
          case 3:
            trade.securityId = 'Facebook';
            break;
    
        }

        if(trade.tradeType){
          trade.tradeType = 'Buy';
        }
        else{
          trade.tradeType = 'Sell';
        }

        console.log("Object :");
        console.log(trade);

      })
      console.log(res);
      this.trades = res;
      
      
    },err=>{
      console.log("An error occurred in getting trades");
      console.log(err);
    });
    console.log("Trades in Trade list component");
    console.log(this.trades);

    this.cols=[
      {field : 'tradeId' ,header : 'TradeId'},
      {field : 'tradeExecutionTime' ,header : 'ExecutionTime'},
      {field : 'quantity' ,header : 'Quantity'},
      {field : 'price' ,header : 'Price'},
      {field : 'customerId' ,header : 'Customer'},
      {field : 'security' ,header : 'Security'},
      {field : 'securityId', header : 'Instrument'},
      {field : 'tradeType' ,header : 'Type'},
      {field : 'brokerName' ,header : 'BrokerName'},

    ];

  }

}
