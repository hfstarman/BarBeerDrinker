import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModifyService {

  constructor(
    public http: HttpClient
  ) { }


postInputItems(name, manufacture, type){
  return this.http.post('/api/modify', {name: name, manufacture: manufacture, type: type})
}

postInputBars(name, address, state){
  return this.http.post('/api/modify/insertBars', {name: name, address: address, state: state})
}

postInputDrinkers(name, email, address, state){
  return this.http.post('/api/modify/insertDrinkers', {name: name, email: email, address: address, state: state})
}

postInputFrequents(drinker, email, barname){
  return this.http.post('/api/modify/insertFrequents', {drinker: drinker, email: email, barname: barname})
}

postInputisOpen(name, address, day, open, close){
  return this.http.post('/api/modify/insertisOpen', {name: name, address: address, day: day, open: open, close: close})
}

postInputLikes(name, email, beer){
  return this.http.post('/api/modify/insertLikes', {name: name, email: email, beer: beer})
}

postInputSells(barname, item, price, address){
  return this.http.post('/api/modify/insertSells', {barname: barname, item: item, price: price, address: address})
}

postInputTransactions(transactionID, total, tip, time, day, drinker, email){
  return this.http.post('/api/modify/insertTransactions', {transactionID: transactionID, total: total, tip: tip, time: time, day: day, drinker: drinker, email: email})
}

postInputBills(transactionID, item, barname, uniqueID){
  return this.http.post('/api/modify/insertBills', {transactionID: transactionID, item: item, barname: barname, uniqueID: uniqueID})
}

}
