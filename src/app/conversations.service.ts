import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, switchMap, tap, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConversationDTO } from './messaging/model/conversation-dto';

@Injectable({
  providedIn: 'root',
})
export class ConversationsService {
  messages?: ConversationDTO[];

  constructor(private httpClient: HttpClient) {}

  getConversations(): Observable<ConversationDTO[]> {
    return timer(1, 10000).pipe(
      tap((x) => console.log('hi', x)),
      switchMap((x) =>
        this.httpClient.get<ConversationDTO[]>(environment.conversationLink)
      ),
      retry()
      // can I retry this if it fails?
      // can I share this so that new Subscribers don't kick off new Http calls?
      // is there a way I can make this stop
      //    like take updates while some condition is true?
    );
  }
}
