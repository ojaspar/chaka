import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { ApiWebService } from '../data/api.web.service';

@Injectable({
  providedIn: 'root'
})
  
export class ApiService {

  constructor(private apiWebService: ApiWebService) { }

  getStockData(): Observable<any>{
    return this.apiWebService.getStockData().pipe(map(res => {
      const date: Array<any> = [];
      let otherInformation: any = {};
        const data = [];
      if (res) {
        
        const values = Object.values(res)
        const formattedValue: any =[]
        values.forEach(x => {
          date.push([...Object.getOwnPropertyNames(x)])
        formattedValue.push(Object.getOwnPropertyDescriptors(x))
        })
        data.push(values[1])
        otherInformation = values[0]
      }
      return {
        date: date[1],
        data: data,
        others: otherInformation
      }
    }))
  }

}
