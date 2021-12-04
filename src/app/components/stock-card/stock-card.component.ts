import { Component, Input, OnInit } from '@angular/core';

export interface StockData {
  stock: string
  amount: Number
  initial: string
  currentValue: Number

}

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() stockData!: StockData
  constructor() { }

  ngOnInit(): void {
  }

}
