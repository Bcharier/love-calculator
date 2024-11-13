import { Component, OnInit } from '@angular/core';
import { LoveService } from '../love.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(readonly service: LoveService) { }

  get history() {
    return this.service.history;
  }

  ngOnInit() {
  }

  clearHistory() {
    this.service.clear();
  }

}