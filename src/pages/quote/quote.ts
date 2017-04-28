import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Quote } from "../../models/quote.interface";


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  quote: Quote;

  ngOnInit(): void {
    this.quote = this.viewCtrl.data;
    // this.quote = this.navParams.data;//both work, bgut firstone doenst require navparams injection (better?)
  }

  onClose(unfavorite: boolean = false) {
    this.viewCtrl.dismiss(unfavorite);
  }

  // ionViewWillEnter() {
  //   this.quote = this.viewCtrl.data;
  // }

}
