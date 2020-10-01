import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Trade } from '../domain/Trade';
import { TradeService } from '../service/trade.service';
import { NGXLogger } from 'ngx-logger'
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.css']
})
export class MarketWatchComponent implements OnInit {


  esCustomerBuy: boolean;
  esCustomerSell: boolean;
  esFirmBuy: boolean;
  esFirmSell: boolean;
  futuresCustomerBuy: boolean;
  futuresCustomerSell: boolean;
  futuresFirmBuy: boolean;
  futuresFirmSell: boolean;
  coCustomerBuy: boolean;
  coCustomerSell: boolean;
  coFirmBuy: boolean;
  coFirmSell: boolean;
  poCustomerBuy: boolean;
  poCustomerSell: boolean;
  poFirmBuy: boolean;
  poFirmSell: boolean;
  company: string;
  obj;
  data;
  data1;
  trades: any[];
  constructor(private route: ActivatedRoute, private tradeService: TradeService, private logger: NGXLogger) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.company = params.get('company')
    });

  //  this.trades = this.tradeService.getTrades();
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
    this.trades = this.trades.filter(obj=>obj.securityId==this.company);
  }

  updateTwo(event: Event) {

    // this.data.datasets[1].data = this.trades.map(trades => 0);
    this.data1 = {

      labels: this.trades.map(trades => trades.ExecutionTime),
      datasets: [
        {
          label: 'Price',
          data: this.trades.map(trades => {
            console.log(trades.Type);
            if (trades.Type == 0) { return trades.Price }
            else { return 0 }

          })
        }

      ]
    }

    console.log("Changed");
  }

  updateGraph() {
    this.data={
      labels: this.trades.map(trades => trades.ExecutionTime),
      datasets : []
    };
    /*if (this.esCustomerBuy) {
      this.obj = {
        label: 'ES Customer Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.Type == 0) { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#12ABAB"
      }
      this.data.datasets.push(this.obj);
    }
    if(this.esCustomerSell){
      this.obj = {
        label: 'ES Customer Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.Type == 1) { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#085303"
      }
      this.data.datasets.push(this.obj);

    }
    if(this.esFirmBuy){
      this.obj = {
        label: 'ES Firm Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.Type == 1) { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#085353"
      }
      this.data.datasets.push(this.obj);

    }*/
    if (this.esCustomerBuy) {
      this.obj = {
        label: 'ES Customer Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.tradeType == 0 && trades.security == 'Equity Shares') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#12ABAB"
      }
      this.data.datasets.push(this.obj);
    }

if (this.esCustomerSell) {
      this.obj = {
        label: 'ES Customer Sell',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.tradeType == 1 && trades.security == 'Equity Shares') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#8E44AD"
      }
      this.data.datasets.push(this.obj);
    }

if (this.esFirmBuy) {
      this.obj = {
        label: 'ES Firm Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId==200 && trades.tradeType == 0 && trades.security == 'Equity Shares') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#E74C3C"
      }
      this.data.datasets.push(this.obj);
    }

if (this.esFirmSell) {
      this.obj = {
        label: 'ES Firm Sell',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId==200 && trades.tradeType == 1 && trades.security == 'Equity Shares') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#2E86C1"
      }
      this.data.datasets.push(this.obj);
    }

if (this.futuresCustomerBuy) {
      this.obj = {
        label: 'Futures Customer Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.tradeType == 0 && trades.security == 'Futures') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#1E8449"
      }
      this.data.datasets.push(this.obj);
    }

if (this.futuresCustomerSell) {
      this.obj = {
        label: 'Futures Customer Sell',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.tradeType == 1 && trades.security == 'Futures') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#D35400"
      }
      this.data.datasets.push(this.obj);
    }

if (this.futuresFirmBuy) {
      this.obj = {
        label: 'Futures Firm Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId==200 && trades.tradeType == 0 && trades.security == 'Futures') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#979A9A"
      }
      this.data.datasets.push(this.obj);
    }

if (this.futuresFirmSell) {
      this.obj = {
        label: 'Futures Firm Sell',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId==200 && trades.tradeType == 1 && trades.security == 'Futures') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#FFA07A"
      }
      this.data.datasets.push(this.obj);
    }

if (this.coCustomerBuy) {
      this.obj = {
        label: 'Call Option Customer Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.tradeType == 0 && trades.security == 'Call Option') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#00FF00"
      }
      this.data.datasets.push(this.obj);
    }

if (this.coCustomerSell) {
      this.obj = {
        label: 'Call Option Customer Sell',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.tradeType == 1 && trades.security == 'Call Option') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#560AAD"
      }
      this.data.datasets.push(this.obj);
    }

if (this.coFirmBuy) {
      this.obj = {
        label: 'Call Option Firm Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId==200 && trades.tradeType == 0 && trades.security == 'Call Option') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#A8A80C"
      }
      this.data.datasets.push(this.obj);
    }

if (this.coFirmSell) {
      this.obj = {
        label: 'Call Option Firm Sell',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId==200 && trades.tradeType == 1 && trades.security == 'Call Option') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#40CC08"
      }
      this.data.datasets.push(this.obj);
    }

if (this.poCustomerBuy) {
      this.obj = {
        label: 'Put Option Customer Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.tradeType == 0 && trades.security == 'Put Option') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#FFA07A"
      }
      this.data.datasets.push(this.obj);
    }

if (this.poCustomerSell) {
      this.obj = {
        label: 'Put Option Customer Sell',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId!=200 && trades.tradeType == 1 && trades.security == 'Put Option') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#0BB97A"
      }
      this.data.datasets.push(this.obj);
    }

if (this.poFirmBuy) {
      this.obj = {
        label: 'Put Option Firm Buy',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId==200 && trades.tradeType == 0 && trades.security == 'Put Option') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#B90B33"
      }
      this.data.datasets.push(this.obj);
    }

if (this.poFirmSell) {
      this.obj = {
        label: 'Put Option Firm Sell',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.customerId==200 && trades.tradeType == 1 && trades.security == 'Put Option') { return trades.Quantity }
          else { return 0 }
        }),
        borderColor : "#F444B1"
      }
      this.data.datasets.push(this.obj);
    }

  }
}


