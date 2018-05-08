import {Injectable} from '@angular/core';
import {Booking} from "./booking.model";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Injectable()
export class BookingService {

  bookingList: AngularFireList<any>;
  selectedBooking: Booking = new Booking();

  // inject the angular firebase database functionality
  constructor(private firebase: AngularFireDatabase) {
  }

  getData() {
    this.bookingList = this.firebase.list('bookings');
    return this.bookingList;
  }

  insertBooking(booking: Booking) {
    // Push booking object on to the list
    this.bookingList.push({
      name: booking.name,
      event: booking.event,
      date: booking.date,
      hours: booking.hours,
      location: booking.location,
      extraInfo: booking.extraInfo,
      price: booking.price
    });
  }

  updateBooking(booking: Booking) {
    this.bookingList.update(booking.$key, {
      name: booking.name,
      event: booking.event,
      date: booking.date,
      hours: booking.hours,
      location: booking.location,
      extraInfo: booking.extraInfo,
      price: booking.price
    });
  }

  deleteBooking($key: string) {
    this.bookingList.remove($key);
  }


}
