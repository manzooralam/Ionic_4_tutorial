import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'chatting', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'parent-login', loadChildren: './parent-login/parent-login.module#ParentLoginPageModule' },
  { path: 'parent-register', loadChildren: './parent-register/parent-register.module#ParentRegisterPageModule' },
  { path: 'parent-profile', loadChildren: './parent-profile/parent-profile.module#ParentProfilePageModule' },
  { path: 'addchild', loadChildren: './addchild/addchild.module#AddchildPageModule' },
  { path: 'child-profile', loadChildren: './child-profile/child-profile.module#ChildProfilePageModule' },
  { path: 'child-login', loadChildren: './child-login/child-login.module#ChildLoginPageModule' },
  { path: 'chatting', loadChildren: './chatting/chatting.module#ChattingPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
