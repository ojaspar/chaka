import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

  
abstract class AbstractApiService {
  abstract getStockData(): Observable<any>
}

@Injectable({
  providedIn: 'root'
})

export class ApiWebService implements AbstractApiService {

  constructor(private http: HttpClient) { }

  getStockData(): Observable<any> {
    return this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`)
  }
}
