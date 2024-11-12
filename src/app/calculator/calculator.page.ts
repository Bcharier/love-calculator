import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  title = 'Love Calculator';
  placeholder1 = 'Batman';
  placeholder2 = 'Robin';

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit([name1, name2]: [string, string]) {
    console.log(name1, name2);
  }

}
