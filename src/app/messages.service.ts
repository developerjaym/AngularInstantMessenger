import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, switchMap, tap, timer } from 'rxjs';
import { CreateMessage } from './messaging/model/create-message';
import { Message } from './message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  // First hard coded values
  messages: Message[] = [
    {
      id: 1,
      createdAt: '2022-08-23T15:22:44.985173Z',
      content: 'Goodbye World',
      user: {
        id: 1,
        username: 'jay',
      },
    },
  ];
  constructor(private httpClient: HttpClient) {}

  getMessages(id: string | null): Observable<Message[]> {
    return timer(1, 500).pipe(
      switchMap((x) =>
        this.httpClient.get<Message[]>(
          environment.conversationLink + `${id}/messages`
        )
      ),
      retry()
      // can I retry this if it fails?
      // can I share this so that new Subscribers don't kick off new Http calls?
      // is there a way I can make this stop
      //    like take updates while some condition is true?
    );
  }

  sendMessage(newMessage: CreateMessage, conversationID: number) {
    this.httpClient
      .post(
        `http://localhost:8080/api/conversations/${conversationID}/messages`,
        newMessage
      )
      .subscribe();
  }
}
