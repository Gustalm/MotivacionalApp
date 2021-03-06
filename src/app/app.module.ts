import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPage } from "../pages/favorites/favorites";
import { LibraryPage } from "../pages/library/library";
import { SettingsPage } from "../pages/settings/settings";
import { QuotePage } from "../pages/quote/quote";
import { QuotesPage } from "../pages/quotes/quotes";
import { TabsPage } from "../pages/tabs/tabs";
import { MaxLengthPipe } from "../pipes/maxlength.pipe";
import { FavoriteQuotesService } from "../services/quote.service";
import { SettingsService } from "../services/settings.service";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    SettingsPage,
    QuotePage,
    QuotesPage,
    TabsPage,
    MaxLengthPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar',
      backButtonIcon: 'arrow-round-back'
      // tabsPlacement: 'top'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    SettingsPage,
    QuotePage,
    QuotesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FavoriteQuotesService,
    SettingsService
  ]
})
export class AppModule { }
