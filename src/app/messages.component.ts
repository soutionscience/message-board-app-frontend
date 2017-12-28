import {Component , OnInit} from '@angular/core';
import {WebService} from './web.service';



@Component({
  selector: 'messages',
  // templateUrl: './app/component.htlm',
  // styleUrls: ['./app/component.css']
  templateUrl: './messages.html'
})
export class MessagesComponent implements OnInit{
  constructor(private webService: WebService) {}
  Messages = [];
  async ngOnInit() {
   var response = await this.webService.getMessages();
   console.log("the response is ", response);
  }

}

