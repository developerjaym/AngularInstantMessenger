import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/authenticate.service';
import { ConversationsService } from 'src/app/conversations.service';
import { CreateConversationDTO } from '../../model/create-conversation-dto';
import { UserDTO } from '../../model/user-dto';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-conversation',
  templateUrl: './add-conversation.component.html',
  styleUrls: ['./add-conversation.component.css'],
})
export class AddConversationComponent implements OnInit {
  conversationName: string = '';
  friendsList: UserDTO[] = [];
  checkedFriends: boolean[] = [];

  constructor(
    private authService: AuthenticateService,
    private conversationService: ConversationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe((users) => {
      this.friendsList = users;
      this.friendsList.forEach((friend) => {
        this.checkedFriends.push(false);
      });
    });
  }

  createConversation() {
    const addedFriendsList = [];

    for (let i = 0; i < this.checkedFriends.length; i++) {
      if (this.checkedFriends[i] === true) {
        addedFriendsList.push(this.friendsList[i].id);
      }
    }

    let newConversation: CreateConversationDTO = {
      userIds: addedFriendsList,
      name: this.conversationName,
    };

    this.conversationService.addConversation(newConversation).subscribe({
      next: (data) => {
        this.router.navigate(['/conversations']);
      },

      error: (e: HttpErrorResponse) => alert(e.message),
    });
  }
}
