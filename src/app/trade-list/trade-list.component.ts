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
    this.trades = this.tradeService.getTrades();

    this.cols=[
      {field : 'tradeId' ,header : 'TradeId'},
      {field : 'tradeExecutionTime' ,header : 'ExecutionTime'},
      {field : 'quantity' ,header : 'Quantity'},
      {field : 'price' ,header : 'Price'},
      {field : 'customer' ,header : 'Customer'},
      {field : 'security' ,header : 'Security'},
      {field : 'instrument', header : 'Instrument'},
      {field : 'tradeType' ,header : 'Type'},
      {field : 'BrokerName' ,header : 'BrokerName'},

    ];

  }

}
