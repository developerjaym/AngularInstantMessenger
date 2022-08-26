import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageWindowComponent } from './messaging/component/message-window/message-window.component';
import { ToolbarItemComponent } from './component/toolbar-item/toolbar-item.component';

// To make http requests we need to import the module:
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { WindowComponent } from './component/window/window.component';
import { WindowMenuComponent } from './component/window-menu/window-menu.component';
import { WindowMenuItemComponent } from './component/window-menu-item/window-menu-item.component';
import { ReactiveFormsModule } from '@angular/forms';

// To add routing to our application we need this module
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './auth/singup/singup.component';
import { ConversationListComponent } from './messaging/component/conversation-list/conversation-list.component';
import { AddConversationComponent } from './messaging/component/add-conversation/add-conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageWindowComponent,
    HomePageComponent,
    ToolbarItemComponent,
    LoginComponent,
    WindowComponent,
    WindowMenuComponent,
    WindowMenuItemComponent,
    SingUpComponent,
    ConversationListComponent,
    AddConversationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  // I want Angular to know that I am using a TokenInterceptorService!!!
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
