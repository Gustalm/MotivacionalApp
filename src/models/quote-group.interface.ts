import { Quote } from "./quote.interface";

export interface QuoteGroup {
    category: string,
    quotes: Quote[],
    icon: string
}