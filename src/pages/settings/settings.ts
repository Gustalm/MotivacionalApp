import { Component } from '@angular/core';
import { NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public canChangeBackground: boolean; 
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private settingsService: SettingsService) {
  this.canChangeBackground = this.settingsService.getBackgroundCanChange();
  console.log("settings " + this.canChangeBackground);
  }
   

  onToggle(toggle: Toggle){
    this.settingsService.setCanChangeBackGround(toggle.checked);
  }

}
