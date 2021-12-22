import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SingUpFormComponent } from './components/sing-up-form/sing-up-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginFormComponent
  },
  {
    path:'register',
    component:SingUpFormComponent
  },
  {
    path:'chatroom',
    component:ChatRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
