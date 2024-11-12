import { Component, OnInit } from '@angular/core';
import { LoveResult, LoveService } from '../love.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  title = 'Love Calculator';

  placeholder1 = 'Batman';
  placeholder2 = 'Robin';

  loveResult!: LoveResult;

  lovePercentage: string = '0';
  loveMessage: string = '';

  constructor(readonly service: LoveService) { }

  ngOnInit() {
  }

  onFormSubmit([name1, name2]: [string, string]) {
    const res = this.service.calculate(name1, name2).subscribe({
      next: res => this.loveResult = res,
    });
  }

}
