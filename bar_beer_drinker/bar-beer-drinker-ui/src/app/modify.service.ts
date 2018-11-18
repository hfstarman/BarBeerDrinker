import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ItemsData {
  name: string;
  manufacture: string;
  type: string;
}

export interface testString {
  query: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModifyService {

  constructor(
    public http: HttpClient
  ) { }


postInputItems(data: string[]){
  return this.http.post('/modify/insertItems/', data)
}
  
}
