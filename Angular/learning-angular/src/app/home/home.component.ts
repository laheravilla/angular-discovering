import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public identificated: boolean;

  constructor(
  ) {
    this.identificated = false;
  }

  ngOnInit() {
  }

  getIdenticated() {
    this.identificated = true;
  }

  logout() {
    this.identificated = false;
  }

}
