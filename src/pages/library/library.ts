import { Component, OnInit } from '@angular/core';
import { Quote } from "../../models/quote.interface";
import quotes from "../../data/quotes";
import { QuotesPage } from "../quotes/quotes";


@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: { category: string, quotes: Quote[], icon: string }[];
  quotePage = QuotesPage;

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }

}
