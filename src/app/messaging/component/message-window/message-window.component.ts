import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticateService } from 'src/app/authenticate.service';
import { Message } from '../../../message';
import { MessagesService } from '../../../messages.service'

@Component({
  selector: 'app-message-window',
  templateUrl: './message-window.component.html',
  styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit, OnDestroy {

  data?:Message[];

  loggedInUser = {
    name: 'jman'
  }

  fontSize: number = 14;
  isBold = false;

  loggedIn = false;
  subscription?: Subscription;
  // Let's try and use dependency injection!
//   constructor() { }

  constructor(private messagesService:MessagesService, private authService: AuthenticateService) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // Okay we have our  dependency but what about or data?
  // 1. move data from here to our service!

  // Angular Life Cycle Method: On init:
  ngOnInit(): void {

    this.route.snapshot.paramMap.get("id");
    this.getMessages();
  }

  // Let's create this method to avoid cluttering ng on init
  getMessages(): void {
    // 2 (should I unsubscribe? Why or why not?)
      this.subscription = this.messagesService.getMessages().subscribe
          (messages => this.data = messages);
  }

  identify(index: number, message: Message) {
    return message.content;
  }
}
