import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-window',
  templateUrl: './message-window.component.html',
  styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit {

  data = [
    {
      sender: 'jman',
      message: 'hey'
    },
    {
      sender: 'banannas',
      message: 'lorem ipsum'
    }
  ]
  loggedInUser = {
    name: 'jman'
  }
  fontSize: number = 14;
  isBold = false;

  constructor() { }

  ngOnInit(): void {
  }

}
