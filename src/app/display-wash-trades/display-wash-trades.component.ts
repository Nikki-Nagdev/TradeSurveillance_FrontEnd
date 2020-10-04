import { Component, OnInit } from '@angular/core';
import { TradeService } from '../service/trade.service';
import { Trade } from '../domain/Trade';
import { NGXLogger } from 'ngx-logger'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-display-wash-trades',
  templateUrl: './display-wash-trades.component.html',
  styleUrls: ['./display-wash-trades.component.css']
})
export class DisplayWashTradesComponent implements OnInit {

  display: boolean = false;
  brokerChosen :boolean = false;
  fileName= 'WashTrades.xlsx'
  trades: Trade[];
  defaultTrade : Trade;
  cols : any[];
  broker : string;
  constructor(private tradeService: TradeService, private logger : NGXLogger) { }
  ngOnInit(): void {

    this.display = true;
    this.trades=[];
    this.defaultTrade={
      tradeId:'',
      price:'',
      quantity: '',
      tradeType: '',
      security: '',
      securityId: '',
      tradeExecutionTime: '',
      brokerName: '',
      customerId: '',
      marketPrice: ''
    }

    

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

  exportExcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('frauds'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

    chooseBroker1(){
      this.broker="Irene Adler";
      this.display=false;
      this.brokerChosen = true;
      this.getFrauds();
    }

    chooseBroker2(){
      this.broker="Jack Stapleton";
      this.display=false;
      this.brokerChosen = true;
      this.getFrauds();
    }

    chooseBroker3(){
      this.broker="Jim Moriarity";
      this.display=false;
      this.brokerChosen = true;
      this.getFrauds();
    }

    getFrauds(){
      this.tradeService.getWashTrades(this.broker).subscribe((res: any) => {

        res.map( (trades : Trade[]) => {
          trades.map((trade :Trade)=>{
  
            if(!trade.brokerName)
              trade.brokerName="Irene Adler"
            switch(trade.customerId){
              case 1:
                trade.customerId = 'Greg Lestrade';
                break;
              case 2:
                trade.customerId = 'John Watson';
                break;
              case 3:
                trade.customerId = 'Martha Hudson';
                break;
              case 221 :
                trade.customerId ='Citi Corp';
            }
        
            switch(trade.security){
              case 1:
                trade.security = 'Equity Shares';
                break;
              case 2:
                trade.security = 'Put Option';
                break;
              case 3:
                trade.security = 'Call Option';
                break;
              case  4:
                trade.security = 'Futures';
            }
        
            switch(trade.securityId){
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
    
            if(trade.tradeType){
              trade.tradeType = 'Buy';
            }
            else{
              trade.tradeType = 'Sell';
            }
            console.log("Pushing following trade");
            console.log(trade);
            this.trades.push(trade);
          })
          console.log("Pushing default");
          this.trades.push(this.defaultTrade);
        })
        
        
      },err=>{
        console.log("An error occurred in getting trades");
        console.log(err);
      });
      console.log("Trades in Trade list component");
      console.log(this.trades);
    }
}
