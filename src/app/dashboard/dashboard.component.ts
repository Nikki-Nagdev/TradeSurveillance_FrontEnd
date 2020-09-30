import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Trade } from '../domain/Trade';
import { TradeService } from '../service/trade.service';


interface SecurityType {
  name: string;
  code: string;
}

interface Company {
  name: string;
}




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  FormData:any ={};
  display = false;

  securityType: SelectItem[];
  companies: SelectItem[];

  securities: SecurityType[];

  selectedCompany: Company;

  selectedSecurity: SecurityType;

  items: MenuItem[];
  activeItem: MenuItem;

  


  constructor(router : Router, private tradeService: TradeService) {
    this.securityType = [
      { label: 'Select Security Type', value: null },
      { label: 'Equity Shares', value:1 },
      { label: 'Futures', value: 2},
      { label: 'Call Option', value: 3 },
      { label: 'Put Option', value: 4 }
    ];

    this.companies = [
      {label:'Select Company', value:null},
      {label:'Amazon', value:1},
      {label:'Walmart', value:2},
      {label:'Apple', value:3}
    ];
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Walmart', icon: 'pi pi-fw pi-chart-line' },
      { label: 'Facebook', icon: 'pi pi-fw pi-chart-line' },
      { label: 'Apple', icon: 'pi pi-fw pi-chart-line' },
      { label: 'Master Graph', icon: 'pi pi-fw pi-chart-line' },
    ];

    this.activeItem = this.items[0];

  }

  onSubmit() {
    console.log("Submit Called");
    this.display = false;
    this.FormData.customerId=1;
    this.FormData.marketPrice=20;
    //console.log(this.FormData.tradeExecutionTime.toISOString());
    this.FormData.tradeExecutionTime = this.FormData.tradeExecutionTime.toISOString(); 
    console.log(this.FormData);
    this.tradeService.addTrade(this.FormData);



  
  }

  displaySidebar() {
    this.display = true;
  }

  dropdownChosen($event){
  
    console.log("Dropdown chosen");

  }



}
