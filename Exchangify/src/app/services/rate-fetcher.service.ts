import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
// APIs => HTTP Responses => Flux des données -> Use Observable
// Observable is used for handling asynchronous data streams 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RateFetcherService {
  constructor(private http: HttpClient) {}

  // Fetches exchange rates from the API
  getExchangeRates() {
    // Set the access key parameter for the API request
    let myParams  = new HttpParams().set(
      'access_key',
      '66fc7cbb64423523f366451a0940c9c3'
    );
    // HTTP GET request -> fetch live exchange rates
    return this.http.get('http://apilayer.net/api/live', { params: myParams });
  }
}
