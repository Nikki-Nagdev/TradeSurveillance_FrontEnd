import { Component, OnInit } from '@angular/core';
import { TradeService } from '../service/trade.service';
import { Trade } from '../domain/Trade';
import { NGXLogger } from 'ngx-logger'
import { Table } from 'primeng/table';
import { ViewChild } from '@angular/core';
import {timer} from 'rxjs';


@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})




export class TradeListComponent implements OnInit {

  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

private alive: boolean; 

  static firstTime : boolean;
  static loading : boolean =true;
  trades: Trade[];
  cols : any[];
  @ViewChild('dt') table: Table;
  constructor(private tradeService: TradeService, private logger : NGXLogger) { 
    TradeListComponent.firstTime=true;
    TradeListComponent.loading=true;

  }
  ngOnInit(): void {
    
    this.trades = this.tradeService.getTrades();

    let myTimer = timer(1000,2000);
    const subscription = myTimer.subscribe(
      ()=>{
        this.trades = this.tradeService.getTrades();
      }
    )
      

    this.cols=[
      {field : 'tradeId' ,header : 'TradeId'},
      {field : 'tradeExecutionTime' ,header : 'ExecutionTime'},
      {field : 'quantity' ,header : 'Quantity'},
      {field : 'price' ,header : 'Price'},
      {field : 'customerId' ,header : 'Customer'},
      {field : 'security' ,header : 'Instrument'},
      {field : 'securityId', header : 'Security'},
      {field : 'tradeType' ,header : 'Type'},
      {field : 'brokerName' ,header : 'BrokerName'},

    ];

  }

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
        const activity = parseInt(value);

        if (!isNaN(activity)) {
            this.table.filter(activity, 'activity', 'gte');
        }
    }
}

}
