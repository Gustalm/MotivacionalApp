import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuoteGroup } from "../../models/quote-group.interface";
import { Quote } from "../../models/quote.interface";


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ngOnInit(): void {
    console.log(this.navParams.data);
    this.quoteGroup = this.navParams.data;
  }

  ionViewDidLoad() {//template is created BEFORE reaching here
    // this.quoteGroup = this.navParams.data;
    //add elvis operator (?) on template
  }

  onAddToFavorite(selectedQuote: Quote) {
    let confirm = this.alertCtrl.create({
      title: 'Favoritar Frase?',
      subTitle: 'Confirmar',
      message: 'Deseja adicionar essa frase aos seus favoritos?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log("Não")
            return;
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Sim');
            return;
          }
        }
      ]
    });

    confirm.present();
  }
}
