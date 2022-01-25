import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService} from './auth/services/auth-guard.service';
import { AuthService} from './auth/services/auth.service';
import { IndexComponent } from './index/index.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavIndexComponent } from './nav-index/nav-index.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FourOhFourComponent,
    NavIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
