import { Component, OnInit, PipeTransform } from '@angular/core';
import * as echarts from 'echarts';
import { StockData } from '../../components/stock-card/stock-card.component';
import { ApiService } from '../../core/services/business/api.service';

interface ChartInfo {
  header: String
  amount: String | Number
}
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
// class Truncate implements PipeTransform {
  
//   }
export class ChartComponent implements OnInit {


  stockValues: Array<StockData> = [
    {
      stock: 'SPDR S&P SOO ETF Trust',
      amount: 489.97,
      initial: 'SPY',
      currentValue: 2.23
    },
    {
      stock: 'ProShares UltraPro QQQ',
      amount: 160.84,
      initial: 'TQQQ',
      currentValue: 5.52,
    },
    {
      stock: 'Vanguard 500 index Futruoto',
      amount: 160.84,
      initial: 'VOD',
      currentValue: 5.52,
    },
    {
      stock: 'Apple Inc',
      amount: 160.84,
      initial: 'AAPL',
      currentValue: 5.52,
    }
  ]
  options: any;
  chartDetails: Array<ChartInfo> = [{
    header: 'previous close',
    amount: '$398.76'
  }, {
    header: 'Day Range',
    amount: '$389.77 - $397.54'
    },
    {
      header: 'year range',
      amount: '$294.78 - $408.71'
    }, {
      header: 'market cap',
      amount: '152.78B USD'
    }, {
      header: 'Volume',
      amount: '39.48m'
    }, {
      header: 'P/E Ratio',
      amount: '-'
    }, {
      header: 'Dividend yield',
      amount: '-'
    }]
  date: Array<any> =[]
  data: Array<any> =[]
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getStockData()
  }

  getStockData() {
    this.apiService.getStockData().subscribe(res => {
      if (res) {
        const { data } = res;
        const test =[]
        for (const key in data) {
          let obj = data[key]
          for (let prop in obj) {
            test.push({...obj[prop]})
          }
          
        }
        test.forEach(x => (this.data.push(Object.values(x)[0]), this.date.push(Object.values(x)[3])))

        this.chart(this.data, this.date, 'Invesco QQQ Trust Series 1')
      }
    })
  }

  chart(data: Array<any>, date: Array<any>, name: string) {
    this.options = {
    tooltip: {
      trigger: 'axis',
      position: function (pt: any) {
        return [pt[0], '10%'];
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    series: [
      {
        name: name,
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: data
      }
    ]
  };
  }
}
