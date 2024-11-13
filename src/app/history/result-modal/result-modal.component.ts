import { Component, OnInit, Input } from '@angular/core';
import { LoveResult } from 'src/app/love.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss'],
})
export class ResultModalComponent  implements OnInit {

  @Input({ required: true}) loveResultInput!: LoveResult;

  constructor(
    readonly modalController: ModalController
  ) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

}
