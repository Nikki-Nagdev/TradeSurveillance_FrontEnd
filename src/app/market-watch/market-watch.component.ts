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

    this.trades = this.tradeService.getTrades();
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
    if (this.esCustomerBuy) {
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

    }
  }
}


