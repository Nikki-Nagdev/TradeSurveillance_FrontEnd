import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trade } from '../domain/Trade';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  data : any;
  constructor(private http: HttpClient) { }

  getTrades() {
    return this.http.get('http://localhost:8083/trades'/*'assets/table-data.json'*/);/*.subscribe((res) => {
      this.data = res;
      console.log(this.data);
    })*/
  }

  getFrauds() {
    return this.http.get('assets/fraud-data.json');/*.subscribe((res) => {
      this.data = res;
      console.log(this.data);
    })*/
  }

  addTrade(trade:Trade){
    this.http.post('http://localhost:8083/trades/add',trade)
    .subscribe(data =>{
      console.log(data);
    },err => {
      console.log(err);
    } )
  }

    /*return [
      { "vin": 1, "year": 1997, "brand": "Toyota", "color": "black" },
      { "vin": 2, "year": 1997, "brand": "Toyota", "color": "blue" }
    ]*/

}
