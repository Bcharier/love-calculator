import { Component, OnInit } from '@angular/core';
import { LoveService, LoveResult } from '../love.service';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(
    readonly service: LoveService, 
    readonly alertController: AlertController, 
    readonly toastController: ToastController,
    readonly actionsheetController: ActionSheetController
  ) { }

  get history() {
    return this.service.history;
  }

  ngOnInit() {}

async clearHistory() {
    const alert = await this.alertController.create({
      header: 'Clear history',
      message: 'Are you sure you want to clear the history?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => this.alertController.dismiss(),
        },
        {
          text: 'Confirm',
          role: 'confirm',
          handler: async () => {
            this.service.clear();
            const toast = await this.toastController.create({
              message: 'History cleared',
              duration: 2000,
            });
            await toast.present();
          }
        }
      ]
    });
    await alert.present();
  }

  async onActions(loveResult: LoveResult) {
    const actionSheet = await this.actionsheetController.create({
      buttons: [
        {
          text: 'Delete Item',
          handler: () => this.service.remove(loveResult),
        },
      ]
    });
    await actionSheet.present();
  }

  onClick(loveResult: LoveResult) {
    console.log('click', loveResult);
  }
}
