import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SingUpComponent } from './auth/singup/singup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddConversationComponent } from './messaging/component/add-conversation/add-conversation.component';
import { ConversationListComponent } from './messaging/component/conversation-list/conversation-list.component';
import { MessageWindowComponent } from './messaging/component/message-window/message-window.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat/:id', component: MessageWindowComponent },
  { path: 'signup', component: SingUpComponent },
  { path: 'conversations', component: ConversationListComponent },
  { path: 'conversations/create', component: AddConversationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
