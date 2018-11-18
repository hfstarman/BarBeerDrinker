import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface queryFromSite {

}

@Injectable({
  providedIn: 'root'
})
export class ModifyTestService {

  constructor(
    public http: HttpClient
  ) { }

  postQuery(query) {
    return this.http.post<queryFromSite[]>('/api/modifyTest', {sqlQuery: query});
  }

}
