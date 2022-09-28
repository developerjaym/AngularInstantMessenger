import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddConversationComponent } from './messaging/component/add-conversation/add-conversation.component';
import { ConversationListComponent } from './messaging/component/conversation-list/conversation-list.component';
import { MessageWindowComponent } from './messaging/component/message-window/message-window.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'conversations/:id/messages',
    component: MessageWindowComponent,
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'conversations', component: ConversationListComponent },
  { path: 'create', component: AddConversationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
