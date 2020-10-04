import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Trade } from '../domain/Trade';
import { TradeService } from '../service/trade.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  FormData:any ={};
  display = false;
  spinnerVisible:boolean;

  instrument: SelectItem[];
  securities: SelectItem[];
  customers: SelectItem[];
  items: MenuItem[];
  brokers: SelectItem[];


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
      {label:'Baker Co.', value:'Baker Co.'},
      {label:'Conan & Doyle Trades', value:'Conan & Doyle Trades'},
      {label:'The Reichenbach Company', value:'The Reichenbach Company'},
      {label:'Holmes Brothers', value:'Holmes Brothers'}

    ];

    this.customers =[
      {label:'Select Trader' , value:null},
      {label:'Greg Lestrade',value:'Greg Lestrade'},
      {label: 'John Watson' ,value : 'John Watson'},
      {label : 'Martha Hudson',value : 'Martha Hudson'},
      {label : 'Citi Corp' , value : 'Citi Corp'}
    ]

    this.brokers=[
      {label:'Select Broker' , value:null},
      {label:'Irene Adler',value:'Irene Adler'},
      {label: 'Jack Stapleton' ,value : 'Jack Stapleton'},
      {label : 'Jim Moriarity',value : 'Jim Moriarity'},
    ]
  }

  ngOnInit(): void {




  }

  formatDate(date) {

    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    var hours = date.getHours()+5;
    var minutes = date.getMinutes()+30;
    var seconds = date.getSeconds();
    return year + "-" + month + "-" + day+ ' ' +hours + ":" + minutes + ":" + seconds;
}

  onSubmit(addForm : NgForm) {
    this.FormData.tradeExecutionTime = this.formatDate(this.FormData.tradeExecutionTime);
    this.tradeService.addTrade(this.FormData);
    addForm.reset();
  }

  displaySidebar() {
    this.display = true;
  }




}
