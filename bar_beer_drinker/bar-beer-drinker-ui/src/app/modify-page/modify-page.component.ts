import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/selectitem';
import { MenuItem } from 'primeng/api';
import { ModifyService } from '../modify.service'
import { PARAMETERS } from '@angular/core/src/util/decorators';


@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.css']
})
export class ModifyPageComponent implements OnInit {

  //items
  nameItems: string = '';
  manufacture: string = '';
  type: string = '';

  //bars
  barName: string = '';
  barAddress: string = '';
  barState: string = '';

  //drinkers
  drinkerName: string = '';
  drinkerEmail: string = '';
  drinkerAddress: string = '';
  drinkerState: string = '';

  //frequents
  frequentsDrinker: string = '';
  frequentsEmail: string = '';
  frequentsBarname: string = '';

  //isOpen
  isOpenName: string = '';
  isOpenAddress: string = '';
  isOpenDay: string = '';
  isOpenOpen: string = '';
  isOpenClose: string = '';

  //likes
  likesName: string = '';
  likesEmail: string = '';
  likesBeer: string = '';

  //Sells
  sellsBarname: string = '';
  sellsItem: string = '';
  sellsPrice: number = 0;
  sellsAddress: string = '';

  //Transactions
  transTransactionID: number = 0;
  transTotal: number = 0;
  transTip: number = 0;
  transTime: Date;
  transDay: string = '';
  transDrinker: string = '';
  transEmail: string = '';

  //Bills
  billTransactionID: number = 0;
  billItem: string = '';
  billBarname: string = '';
  billUniqueID: string = '';


  constructor(
    private modifyService: ModifyService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  //Items Insert
  itemInsert(event: any) {
    this.nameItems = event.target.value;
  }
  manufactureInsert(event: any) {
    this.manufacture = event.target.value;
  }
  typeInsert(event: any) {
    this.type = event.target.value;
  }


  //Bars Insert
  barNameInsert(event: any) {
    this.barName = event.target.value;
  }
  barAddressInsert(event: any) {
    this.barAddress = event.target.value;
  }
  barStateInsert(event: any) {
    this.barState = event.target.value;
  }


  //Drinkers Insert
  drinkerNameInsert(event: any) {
    this.drinkerName = event.target.value;
  }
  drinkerEmailInsert(event: any) {
    this.drinkerEmail = event.target.value;
  }
  drinkerAddressInsert(event: any) {
    this.drinkerAddress = event.target.value;
  }
  drinkerStateInsert(event: any) {
    this.drinkerState = event.target.value;
  }


  //Frequents Insert
  frequentsDrinkerInsert(event: any) {
    this.frequentsDrinker = event.target.value;
  }
  frequentsEmailInsert(event: any) {
    this.frequentsEmail = event.target.value;
  }
  frequentsBarnameInsert(event: any) {
    this.frequentsBarname = event.target.value;
  }


  //isOpen Insert
  isOpenNameInsert(event: any) {
    this.isOpenName = event.target.value;
  }
  isOpenAddressInsert(event: any) {
    this.isOpenAddress = event.target.value;
  }
  isOpenDayInsert(event: any) {
    this.isOpenDay = event.target.value;
  }
  isOpenOpenInsert(event: any) {
    this.isOpenOpen = event.target.value;
  }
  isOpenCloseInsert(event: any) {
    this.isOpenClose = event.target.value;
  }


  //likes Insert
  likesNameInsert(event: any) {
    this.likesName = event.target.value;
  }
  likesEmailInsert(event: any) {
    this.likesEmail = event.target.value;
  }
  likesBeerInsert(event: any) {
    this.likesBeer = event.target.value;
  }


  //Sells Insert
  sellsBarnameInsert(event: any) {
    this.sellsBarname = event.target.value;
  }
  sellsItemInsert(event: any) {
    this.sellsItem = event.target.value;
  }
  sellsPriceInsert(event: any) {
    this.sellsPrice = event.target.value;
  }
  sellsAddressInsert(event: any) {
    this.sellsAddress = event.target.value;
  }


  //Transaction Insert
  transTransactionIDInsert(event: any) {
    this.transTransactionID = event.target.value;
  }
  transTotalInsert(event: any) {
    this.transTotal = event.target.value;
  }
  transTipInsert(event: any) {
    this.transTip = event.target.value;
  }
  transTimeInsert(event: any) {
    this.transTime = event.target.value;
  }
  transDayInsert(event: any) {
    this.transDay = event.target.value;
  }
  transDrinkerInsert(event: any) {
    this.transDrinker = event.target.value;
  }
  transEmailInsert(event: any) {
    this.transEmail = event.target.value;
  }


  //Bills Insert
  billTransactionIDInsert(event: any) {
    this.billTransactionID = event.target.value;
  }
  billItemlInsert(event: any) {
    this.billItem = event.target.value;
  }
  billBarnameInsert(event: any) {
    this.billBarname = event.target.value;
  }
  billUniqueIDInsert(event: any) {
    this.billUniqueID = event.target.value;
  }



  postItems() {
    this.modifyService.postInputItems(this.nameItems, this.manufacture, this.type).subscribe()
  }

  postBars() {
    this.modifyService.postInputBars(this.barName, this.barAddress, this.barState).subscribe()
  }

  postDrinkers() {
    this.modifyService.postInputDrinkers(this.drinkerName, this.drinkerEmail, this.drinkerAddress, this.drinkerState).subscribe()
  }

  postFrequents() {
    this.modifyService.postInputFrequents(this.frequentsDrinker, this.frequentsEmail, this.frequentsBarname).subscribe()
  }

  postisOpen() {
    this.modifyService.postInputisOpen(this.isOpenName, this.isOpenAddress, this.isOpenDay, this.isOpenOpen, this.isOpenClose).subscribe()
  }

  postLikes() {
    this.modifyService.postInputLikes(this.likesName, this.likesEmail, this.likesBeer).subscribe()
  }

  postSells() {
    this.modifyService.postInputSells(this.sellsBarname, this.sellsItem, this.sellsPrice, this.sellsAddress).subscribe()
  }

  postTransactions() {
    this.modifyService.postInputTransactions(this.transTransactionID, this.transTotal, this.transTip, this.transTime, this.transDay, this.transDrinker, this.transEmail).subscribe()
  }

  postBills() {
    this.modifyService.postInputBills(this.billTransactionID, this.billItem, this.billBarname, this.billUniqueID).subscribe()
  }


  deleteItems() {
    this.modifyService.deleteInputItems(this.nameItems).subscribe()
  }

  deleteBars() {
    this.modifyService.deleteInputBars(this.barName, this.barAddress).subscribe()
  }

  deleteDrinkers() {
    this.modifyService.deleteInputDrinkers(this.drinkerEmail).subscribe()
  }

  deleteFrequents() {
    this.modifyService.deleteFrequents(this.frequentsEmail, this.frequentsBarname).subscribe()
  }

  deleteisOpen() {
    this.modifyService.deleteInputisOpen(this.isOpenName, this.isOpenAddress, this.isOpenDay).subscribe()
  }

  deleteLikes() {
    this.modifyService.deleteInputLikes(this.likesEmail, this.likesBeer).subscribe()
  }

  deleteSells() {
    this.modifyService.deleteInputSells(this.sellsItem, this.sellsAddress).subscribe()
  }

  deleteTransactions() {
    this.modifyService.deleteInputTransactions(this.transTransactionID).subscribe()
  }

  deleteBills() {
    this.modifyService.deleteInputBills(this.billUniqueID).subscribe()
  }
}
