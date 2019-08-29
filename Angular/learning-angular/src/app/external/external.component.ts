import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [RequestsService] // AJAX
})
export class ExternalComponent implements OnInit {

  public user: any;

  public userId: number;

  constructor(
    private _requestsService: RequestsService,
  ) {
    this.userId = 1;
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this._requestsService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
