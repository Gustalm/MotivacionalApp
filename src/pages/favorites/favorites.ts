import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { FavoriteQuotesService } from "../../services/quote.service";
import { Quote } from "../../models/quote.interface";
import { Subscription } from "rxjs/Subscription";
import { QuotePage } from "../quote/quote";
import { SettingsService } from "../../services/settings.service";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit, OnDestroy {
  private quoteSubscription: Subscription;
  public favoriteQuotes: Quote[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favoriteQuoteService: FavoriteQuotesService,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,
    private settingsService: SettingsService) {
  }
  // private changeBackground =  this.settingsService.getBackgroundCanChange();

  ngOnInit(): void {
    this.favoriteQuotes = this.favoriteQuoteService.getFavoriteQuotes();

    this.quoteSubscription = this.favoriteQuoteService.favoriteQuotesEmitter.subscribe((quotes: Quote[]) => {
      this.favoriteQuotes = quotes;
    })
  }

  onViewQuote(quote: Quote) {
    let quoteModal = this.modalCtrl.create(QuotePage, quote);
    quoteModal.onDidDismiss((unfavorite: boolean) => {
      if (unfavorite)
        this.favoriteQuoteService.removeQuote(quote.id);
    })
    quoteModal.present();
  }

  unfavoriteQuote(id: string) {
    this.favoriteQuoteService.removeQuote(id);
  }
// not necessary with directive menutoggle
  // onOpenMenu(){
  //   this.menuCtrl.open();
  // }

  // ionViewWillEnter() {//executed before is loaded
  //   console.log("ionViewWillEnter");
  // }



  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FavoriteQuotes');
  // }

  ngOnDestroy(): void {
    this.quoteSubscription.unsubscribe();
  }

  setBackground(){
    return this.settingsService.getBackgroundCanChange() ? 'quoteBackground' : 'altQuoteBackground';
  }
}
