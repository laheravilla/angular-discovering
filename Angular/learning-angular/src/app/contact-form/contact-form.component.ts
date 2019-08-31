import { Component, OnInit } from '@angular/core';
import { ContactUser } from '../models/contact-user';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contactUser: ContactUser;

  constructor() {
    this.contactUser = new ContactUser('', '', '', '');
  }

  ngOnInit() {}

  onSubmit() {
    console.log('Submit event loaded');
    console.log(this.contactUser);
  }
}
