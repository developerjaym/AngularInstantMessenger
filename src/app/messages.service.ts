import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
// First hard coded values
  messages:Message[] =
        [
            {
                "id": 1,
                "createdAt": "2022-08-23T15:22:44.985173Z",
                "content": "Goodbye World",
                "user": {
                    "id": 1,
                    "username": "jay"
                }
            }
        ];
  constructor(private httpClient: HttpClient) { }

  getMessages():Observable<Message[]> {
  // we can change this now to do an http request
  return this.httpClient.get<Message[]>
  ('http://localhost:8080/api/conversations/1/messages');
  //


//     const obsvMessages = of(this.messages);
//     return obsvMessages;
  }
}
