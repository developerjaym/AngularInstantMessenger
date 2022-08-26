import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticateService } from 'src/app/authenticate.service';
import { Message } from '../../../message';
import { MessagesService } from '../../../messages.service';

//Let's import Activated Route!
import { ActivatedRoute } from '@angular/router';
import { CreateMessage } from 'src/app/create-message';

@Component({
  selector: 'app-message-window',
  templateUrl: './message-window.component.html',
  styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit, OnDestroy {

  data?:Message[];
  conversationID!:number;
  messageString:string="";

  loggedInUser = {
    name: 'jman'
  }

  fontSize: number = 14;
  isBold = false;

  loggedIn = false;
  subscription?: Subscription;
  // Let's try and use dependency injection!
//   constructor() { }

  constructor(private messagesService:MessagesService, 
    private authService: AuthenticateService,
    private route:ActivatedRoute) { 
      this.route.paramMap.subscribe((paramMap) => {
        this.conversationID = Number(paramMap.get('id'));
      });

  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // Okay we have our  dependency but what about or data?
  // 1. move data from here to our service!

  // Angular Life Cycle Method: On init:
  ngOnInit(): void {
    let id:string|null = this.route.snapshot.paramMap.get("id");

    this.getMessages(id);
  }

  // Let's create this method to avoid cluttering ng on init
  getMessages(id:string|null): void {
    // 2 (should I unsubscribe? Why or why not?)
      this.subscription = this.messagesService.getMessages(id).subscribe
          (messages => this.data = messages);
  }

  sendMessage(){
    let newMessage=new CreateMessage
    newMessage.content=this.messageString
    this.messagesService.sendMessage(newMessage,this.conversationID)
  }

  doTextareaValueChange(ev:any) {
    try {
      this.messageString = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }

  identify(index: number, message: Message) {
    return message.content;
  }
}
