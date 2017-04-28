import { Quote } from "../models/quote.interface";

export class QuoteService {
    private favoriteQuotes: Quote[];

    addQuoteToFavorite(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuote(id: string) {
        let index = this.favoriteQuotes.findIndex((quote: Quote) => {
            return quote.id == id;
        })

        this.favoriteQuotes.splice(index, 1);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }
}