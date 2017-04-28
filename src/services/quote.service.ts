import { Quote } from "../models/quote.interface";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subject } from "rxjs/Subject";

export class FavoriteQuotesService {
    private favoriteQuotes: Quote[] = [];

    public favoriteQuotesEmitter = new Subject<Quote[]>();

    addQuoteToFavorite(quote: Quote) {
        let observable = new Observable((observer: Observer<Quote>) => {
            setTimeout(() => {
                this.favoriteQuotes.push(quote);
                this.emitFavoriteQuotes();
                observer.next(quote);
                observer.complete();
            }
            ,1000);
        })

        return observable;
        // this.favoriteQuotes.push(quote);
    }

    removeQuote(id: string) {
        let index = this.favoriteQuotes.findIndex((quote: Quote) => {
            return quote.id == id;
        })

        this.favoriteQuotes.splice(index, 1);
        this.emitFavoriteQuotes();
    }

    getFavoriteQuotes() {
        return  this.favoriteQuotes.length > 0 ? this.favoriteQuotes.slice() : [];
    }

    private emitFavoriteQuotes(){
        let localFavoriteQuotes = this.getFavoriteQuotes();

        this.favoriteQuotesEmitter.next(localFavoriteQuotes);
    }

    isFavorite(quote: Quote){
        return this.favoriteQuotes.indexOf(quote) > -1;
    }
}