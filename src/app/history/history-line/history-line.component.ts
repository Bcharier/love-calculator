import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LoveResult } from 'src/app/love.service';
import { LoveService } from 'src/app/love.service';

@Component({
  selector: 'app-history-line',
  templateUrl: './history-line.component.html',
  styleUrls: ['./history-line.component.scss'],
})
export class HistoryLineComponent  implements OnInit {

  @Input() result!: LoveResult;
  @Output() clickLine = new EventEmitter<LoveResult>();

  @Output() actions = new EventEmitter<LoveResult>();

  constructor(readonly service: LoveService) { }

  ngOnInit() {}

}
