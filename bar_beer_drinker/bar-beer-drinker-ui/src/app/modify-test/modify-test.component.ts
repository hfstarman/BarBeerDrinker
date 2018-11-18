import { Component, OnInit } from '@angular/core';

import { ModifyTestService, queryFromSite } from '../modify-test.service';

@Component({
  selector: 'app-modify-test',
  templateUrl: './modify-test.component.html',
  styleUrls: ['./modify-test.component.css']
})
export class ModifyTestComponent implements OnInit {

  returnedQuery:queryFromSite[];
  keyValues:string[];
  queryStr:string = '';


  constructor(
    public ModifyTestService: ModifyTestService
  ) {

  }

  ngOnInit() {

  }

  queryInput(event:any){
    this.queryStr = event.target.value;
  }

  postsqlQuery() {
    this.ModifyTestService.postQuery(this.queryStr).subscribe(
      data => {
        this.returnedQuery = data
        this.keyValues = Object.keys(this.returnedQuery['0'])
        console.log(this.keyValues)
      },
      error => {
        alert('No Table Returned, Check Syntax!')
      }
    )
  }

}