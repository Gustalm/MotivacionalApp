import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  libraryPage = LibraryPage;
  favoritesPage = FavoritesPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
