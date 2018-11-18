import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/selectitem';
import { MenuItem } from 'primeng/api';
import { ModifyService, ItemsData } from '../modify.service'
import { PARAMETERS } from '@angular/core/src/util/decorators';



@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.css']
})
export class ModifyPageComponent implements OnInit {


  itemsInsert: ItemsData;

  item:string = '';
  manufacture:string = '';
  type:string = '';

  test: string[];


  constructor(
    private modifyService: ModifyService,
    private route: ActivatedRoute
  ) {
   }

  ngOnInit() {
  }
  
  itemInsert(event:any){
    this.item = event.target.value;
  }

  manufactureInsert(event:any){
    this.manufacture = event.target.value;
  }
  typeInsert(event:any){
    this.type = event.target.value;
  }

  postItems() {
    console.log(this.item);
    console.log(this.manufacture);
    console.log(this.type);
    console.log(this.test)
    this.modifyService.postInputItems(this.test).subscribe()

    //this.itemsInsert.name = this.item;
  }


}
