import { Component, OnInit } from '@angular/core';
import { TradeService } from '../service/trade.service';
import { Trade } from '../domain/Trade';
import { NGXLogger } from 'ngx-logger'

@Component({
  selector: 'app-display-frauds',
  templateUrl: './display-frauds.component.html',
  styleUrls: ['./display-frauds.component.css']
})
export class DisplayFraudsComponent implements OnInit {

  trades: Trade[];
  cols : any[];
  constructor(private tradeService: TradeService, private logger : NGXLogger) { }

  ngOnInit(): void {
    this.tradeService.getFrauds().subscribe((res: Trade[]) => {

      this.trades = res;
      this.logger.debug(res);
      
      this.cols=[
        {field : 'TradeId' ,header : 'TradeId'},
        {field : 'ExecutionTime' ,header : 'ExecutionTime'},
        {field : 'Quantity' ,header : 'Quantity'},
        {field : 'Price' ,header : 'Price'},
        {field : 'CustomerId' ,header : 'CustomerId'},
        {field : 'SecurityType' ,header : 'SecurityType'},
        {field : 'Type' ,header : 'Type'},
      //  {field : 'Flag' ,header : 'Flag'},
        {field : 'BrokerName' ,header : 'BrokerName'},
      //  {filed : 'MrktPrice' ,header : 'MrktPrice'}

      ];

    });
  }

}
