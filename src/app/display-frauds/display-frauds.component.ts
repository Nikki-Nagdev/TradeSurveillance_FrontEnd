import { Component, OnInit } from '@angular/core';
import { TradeService } from '../service/trade.service';
import { Trade } from '../domain/Trade';
import { NGXLogger } from 'ngx-logger'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-display-frauds',
  templateUrl: './display-frauds.component.html',
  styleUrls: ['./display-frauds.component.css']
})
export class DisplayFraudsComponent implements OnInit {

  fileName= 'Identified Frauds.xlsx'
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

  exportexcel(): void 
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

}

