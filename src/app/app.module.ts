import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AdminComponent} from './admin/admin.component';
import {FormsModule} from "@angular/forms";
//service
import {AuthService} from './auth.service';
import { BookinglistComponent } from './bookings/bookinglist/bookinglist.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingComponent } from './bookings/booking/booking.component';
import {BookingService} from "./bookings/shared/booking.service";
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



export const firebaseConfig = {
  apiKey: "AIzaSyAd9PX2Elk1EU92stKTyWdm1u70e4qwbYI",
  authDomain: "booking-fcd6d.firebaseapp.com",
  databaseURL: "https://booking-fcd6d.firebaseio.com",
  projectId: "booking-fcd6d",
  storageBucket: "booking-fcd6d.appspot.com",
  messagingSenderId: "920850493481"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    BookinglistComponent,
    BookingsComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
