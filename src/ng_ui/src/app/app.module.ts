import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooComponent } from '../app/compnents/foo/foo.component';
import { UnauthorisedComponent } from '../app/compnents/unauthorised/unauthorised.component';
import { LogonComponent } from '../app/compnents/logon/logon.component';
import { routes } from './app-routing.module';
import { CatbreedComponent } from './compnents/catbreed/catbreed.component';
import { BreedmenuComponent } from './compnents/breedmenu/breedmenu.component';
import { MatMenuModule} from '@angular/material/menu';
import { CatworldComponent } from './compnents/catworld/catworld.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    UnauthorisedComponent,
    LogonComponent,
    CatbreedComponent,
    BreedmenuComponent,
    CatworldComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
