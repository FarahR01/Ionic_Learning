import { Component, OnInit } from '@angular/core';
import { RateFetcherService } from '../services/rate-fetcher.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit  {
  allCurrencies : string[] = [] ;
  result = '';

  constructor(private rateFetcher: RateFetcherService) {}

  ngOnInit() {
    this.rateFetcher.getExchangeRates().subscribe({
      next: (data) => {
        console.log(data['quotes']); //data.quotes
        for (const currency in data['quotes']) {
          this.allCurrencies.push(currency.slice(-3));  // e.g., "EUR" from "USDEUR"
        }
        console.log(this.allCurrencies);
      },
      error: (err) => {
        console.error('Error fetching exchange rates', err);
      }
    });
  }
 
  // This function updates the message with the exchange rate for the selected currency
  onChange(c2Value) {
    this.rateFetcher.getExchangeRates().subscribe({
      next: (data) => {
        let req = `USD${c2Value}`;
        this.result = `Today, 1 USD is equivalent to ${data['quotes'][req]} ${c2Value}`;
      },
    });
  }
}