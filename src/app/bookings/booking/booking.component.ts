import { Component, OnInit } from '@angular/core';
import {BookingService } from '../shared/booking.service';
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private bookingService: BookingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(bookingForm: NgForm) {
    // Check if key exists otherwise update! Wow
    if (bookingForm.value.$key == null) {
      // Use Service to insert
      this.bookingService.insertBooking(bookingForm.value);
    } else {
      //Update
      this.bookingService.updateBooking(bookingForm.value);
    }
    // Reset Form and send success message
    this.resetForm(bookingForm);
    this.toastr.success('Submitted Successfully!', 'Booking Made')
  }
  resetForm(bookingForm?: NgForm) {
    if(bookingForm != null) {
      bookingForm.reset();
      this.bookingService.selectedBooking = {
        $key: null,
        name: '',
        event: '',
        date: '',
        hours: 0,
        location: '',
        extraInfo: '',
        price: 0

      }
    }
  }
}
