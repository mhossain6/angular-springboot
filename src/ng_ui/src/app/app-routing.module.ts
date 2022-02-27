import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogonComponent } from './compnents/logon/logon.component';
import { FooComponent } from './compnents/foo/foo.component';
import { CatbreedComponent } from './compnents/catbreed/catbreed.component';
import { CatworldComponent } from './compnents/catworld/catworld.component';
import { UnauthorisedComponent } from './compnents/unauthorised/unauthorised.component';

export const routes: Routes = [
  { path: 'login', component: LogonComponent },
  { path: 'logout', component: UnauthorisedComponent },
  { path: 'catworld', component: CatworldComponent },
  { path: '**', redirectTo: '' }
];



