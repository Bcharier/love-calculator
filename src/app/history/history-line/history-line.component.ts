import { Component, Input, OnInit } from '@angular/core';
import { LoveResult } from 'src/app/love.service';

@Component({
  selector: 'app-history-line',
  templateUrl: './history-line.component.html',
  styleUrls: ['./history-line.component.scss'],
})
export class HistoryLineComponent  implements OnInit {

  @Input() result!: LoveResult;

  constructor() { }

  ngOnInit() {}

}
