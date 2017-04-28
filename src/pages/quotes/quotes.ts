import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteGroup } from "../../models/quote-group.interface";


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): void {
    console.log(this.navParams.data);
    this.quoteGroup = this.navParams.data;
  }

  ionViewDidLoad(){//template is created BEFORE reaching here
    // this.quoteGroup = this.navParams.data;
    //add elvis operator (?) on template
  }
}
