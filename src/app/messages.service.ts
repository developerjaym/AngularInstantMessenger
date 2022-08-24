import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, switchMap, tap, timer } from 'rxjs';
import { Message } from './message';

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
    // 2 (what is happening here!??!!)
    return timer(1, 3000)
    .pipe(
      tap(x => console.log("hi", x)),
      switchMap(x => this.httpClient.get<Message[]>
        ('http://localhost:8080/api/conversations/1/messages')),
        // can I retry this if it fails?
        // can I share this so that new Subscribers don't kick off new Http calls?
        // is there a way I can make this stop
        //    like take updates while some condition is true?
    );
  }
}
