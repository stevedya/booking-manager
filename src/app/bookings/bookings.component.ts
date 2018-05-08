import { Component, OnInit } from '@angular/core';
import { BookingService } from "./shared/booking.service";

// Components are like meta data
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})

export class BookingsComponent implements OnInit {

  constructor(private bookingService: BookingService ) { }

  ngOnInit() {
  }

}
