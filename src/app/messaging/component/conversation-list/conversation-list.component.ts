import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConversationsService } from 'src/app/conversations.service';
import { MessagesService } from 'src/app/messages.service';
import { environment } from 'src/environments/environment';
import { ConversationDTO } from '../../model/conversation-dto';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css'],
})
export class ConversationListComponent implements OnInit {
  conversationsURL: string = environment.conversationLink;
  conversations?: ConversationDTO[];

  visible = false;

  constructor(private conversationService: ConversationsService) {}

  ngOnInit(): void {
    this.getConversations();
  }

  getConversations(): void {
    this.conversationService.getConversations().subscribe({
      next: (data: ConversationDTO[]) => (this.conversations = data),
      error: (e: HttpErrorResponse) => alert(e.message),
    });
  }

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
}
