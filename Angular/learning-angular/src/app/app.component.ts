import { Component } from '@angular/core';
import { Setting } from './setting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Learning Angular';
  public showVideogames: boolean = true;
  public description: string;
  public config;

  constructor() {
    this.title = Setting.title;
    this.description = Setting.description;
    this.config = Setting;
  }

  hideVideogames(value: boolean) {
    this.showVideogames = value;
  }
}
