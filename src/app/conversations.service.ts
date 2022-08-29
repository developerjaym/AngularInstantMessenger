import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, switchMap, tap, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConversationDTO } from './messaging/model/conversation-dto';
import { CreateConversationDTO } from './messaging/model/create-conversation-dto';

@Injectable({
  providedIn: 'root',
})
export class ConversationsService {
  conversations?: ConversationDTO[];

  constructor(private httpClient: HttpClient) {}

  getConversations(): Observable<ConversationDTO[]> {
    return this.httpClient.get<ConversationDTO[]>(environment.conversationLink);
  }

  addConversation(conversation: CreateConversationDTO) {
    console.log(conversation);
    return this.httpClient.post<ConversationDTO[]>(
      environment.conversationLink,
      conversation
    );
  }
}
