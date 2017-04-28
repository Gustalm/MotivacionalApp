import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { QuoteGroup } from "../../models/quote-group.interface";
import { Quote } from "../../models/quote.interface";
import { FavoriteQuotesService } from "../../services/quote.service";


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private favoriteQuotesService: FavoriteQuotesService,
    private loadingCtrl: LoadingController) {
  }

  ngOnInit(): void {
    console.log(this.navParams.data);
    this.quoteGroup = this.navParams.data;
  }

  onUnfavorite(id: string){
    this.favoriteQuotesService.removeQuote(id);
  }

  ionViewDidLoad() {//template is created BEFORE reaching here
    // this.quoteGroup = this.navParams.data;
    //add elvis operator (?) on template
  }

  onAddToFavorite(selectedQuote: Quote) {
    let confirm = this.alertCtrl.create({
      title: 'Favoritar Frase?',
      // subTitle: 'Confirmar',
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
            let loader = this.loadingCtrl.create({
              content: "Salvando...",
            });
            loader.present();

            this.favoriteQuotesService.addQuoteToFavorite(selectedQuote).subscribe(
              (quote: Quote) => { },
              () => {
                loader.dismiss().then(() => {
                  console.log("erro!");
                })
              },
              () => {
                loader.dismiss().then(() => {
                  console.log("Salvou!");
                  this.navCtrl.parent.select(0);
                })
              }
            );
            return;
          }
        }
      ]
    });

    confirm.present();
  }

  isQuoteFavorite(quote: Quote){
    return this.favoriteQuotesService.isFavorite(quote);
  }
}
