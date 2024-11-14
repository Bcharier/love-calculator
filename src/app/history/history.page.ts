import { Component } from '@angular/core';
import { LoveService, LoveResult } from '../love.service';
import { AlertController, ToastController, ActionSheetController, ModalController, ViewWillEnter } from '@ionic/angular';
import { ResultModalComponent } from './result-modal/result-modal.component';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements ViewWillEnter {

  constructor(
    readonly service: LoveService, 
    readonly alertController: AlertController, 
    readonly toastController: ToastController,
    readonly actionsheetController: ActionSheetController,
    readonly modalController: ModalController,
    readonly router: Router
  ) { }

  get history() {
    return this.service.history;
  }

  ionViewWillEnter() {
    this.service.getAll().subscribe({
      next: res => this.service.history = res
    });
  }

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
            this.service.clear()
            .pipe(
              mergeMap(() => this.service.getAll())
            )
            .subscribe({
              next: async res => {
                this.service.history = res;
                const toast = await this.toastController.create({
                  message: 'History cleared',
                  duration: 1000,
                });
                await toast.present();
              }
            });
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
          handler: () => {
            this.service.remove(loveResult).pipe(
              mergeMap(() => this.service.getAll())
            ).subscribe({
              next: res => this.service.history = res
            });
            return true;
          }
        },
        {
          text: 'Run again',
          handler: () => this.router.navigate(['/calculator', loveResult.id]),
        }
      ]
    });
    await actionSheet.present();
  }

  async onClick(loveResult: LoveResult) {
    const modal = await this.modalController.create({
      component: ResultModalComponent,
      componentProps: {
        loveResultInput: loveResult,
      }
    })
    await modal.present();
  }
}
