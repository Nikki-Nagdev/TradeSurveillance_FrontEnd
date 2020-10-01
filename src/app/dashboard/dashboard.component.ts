import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Trade } from '../domain/Trade';
import { TradeService } from '../service/trade.service';

//display active menu item
/*interface SecurityType {
  name: string;
  code: string;
}

interface Company {
  name: string;
}*/


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  FormData:any ={};
  display = false;

  instrument: SelectItem[];
  securities: SelectItem[];
  customers: SelectItem[];
  items: MenuItem[];

  


  constructor(router : Router, private tradeService: TradeService) {
    this.instrument = [
      { label: 'Select Security Type', value: null },
      { label: 'Equity Shares', value:1 },
      { label: 'Futures', value: 2},
      { label: 'Call Option', value: 3 },
      { label: 'Put Option', value: 4 }
    ];

    this.securities = [
      {label:'Select Company', value:null},
      {label:'Facebook', value:'Facebook'},
      {label:'Walmart', value:'Walmart'},
      {label:'Apple', value:'Apple'}
    ];

    this.customers =[
      {label:'Select Trader' , value:null},
      {label:'Customer 1',value:'Customer 1'},
      {label: 'Customer 2' ,value : 'Customer 2'},
      {label : 'Customer 3',value : 'Customer 3'},
      {label : 'Citi' , value : 'Citi'}
    ]
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Walmart', icon: 'pi pi-fw pi-chart-line' },
      { label: 'Facebook', icon: 'pi pi-fw pi-chart-line' },
      { label: 'Apple', icon: 'pi pi-fw pi-chart-line' },
      { label: 'Master Graph', icon: 'pi pi-fw pi-chart-line' },
    ];


  }

  formatDate(date) {

    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return year + "-" + month + "-" + day+ ' ' +hours + ":" + minutes + ":" + seconds;
}

  onSubmit() {
    console.log("Submit Called");
    this.display = false;
    this.FormData.tradeExecutionTime = this.formatDate(this.FormData.tradeExecutionTime);

    console.log("FormData :"+this.FormData);
    this.tradeService.addTrade(this.FormData);

    this.FormData={};

  
  }

  displaySidebar() {
    this.display = true;
  }




}
