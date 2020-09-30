import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Trade } from '../domain/Trade';
import { TradeService } from '../service/trade.service';
import { NGXLogger } from 'ngx-logger'

@Component({
  selector: 'app-market-watch',
  templateUrl: './market-watch.component.html',
  styleUrls: ['./market-watch.component.css']
})
export class MarketWatchComponent implements OnInit {

  isCheckedOne: boolean;
  isCheckedTwo: boolean;
  isCheckedThree:boolean;
  company: string;
  selectedValues: string[] = [];
  data;
  data1;
  trades:any[];
  constructor(private route: ActivatedRoute,private tradeService : TradeService, private logger : NGXLogger) { }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.company = params.get('company')
    });
    this.isCheckedOne = true;
    this.isCheckedThree =false;
    
    this.tradeService.getTrades().subscribe((res: Trade[]) => {

      this.trades = res;
      this.logger.debug(res);
      
      
    });
  }

  checkValue(event: any) {
    console.log(event);
  }

  trial(event: any) {
    console.log(event);
  }

  update(event: Event) {


    this.data = {
      
      labels: this.trades.map(trades => trades.ExecutionTime),
      datasets: [
        {
          label: 'Quantity',
          data: this.trades.map(trades => {
            console.log(trades.Type);
            if (trades.Type == 0) {return trades.Quantity}
            else {return 0}
          })
        }
      ]
    }
  }

  updateTwo(event: Event){

   // this.data.datasets[1].data = this.trades.map(trades => 0);
   this.data1 = {
      
    labels: this.trades.map(trades => trades.ExecutionTime),
    datasets: [
      {
        label: 'Price',
        data: this.trades.map(trades => {
          console.log(trades.Type);
          if (trades.Type == 0) {return trades.Price}
          else {return 0}

        })
      }

    ]
  }

    console.log("Changed");
   // console.log(this.data.datasets[1].data);
  }
}


