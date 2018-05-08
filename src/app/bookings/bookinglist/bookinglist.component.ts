import { Component, OnInit } from '@angular/core';
import {BookingService} from "../shared/booking.service";
import { Booking } from "../shared/booking.model";
import {element} from "protractor";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.scss']
})
export class BookinglistComponent implements OnInit {

  //An array of bookings
  bookingList: Booking[];

  constructor(private bookingService: BookingService, private toastr: ToastrService) { }

  ngOnInit() {
    var observeList = this.bookingService.getData();
    observeList.snapshotChanges().subscribe(item => {
      this.bookingList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        //Put bookings into list
        this.bookingList.push(y as Booking);
      });
    });
  }

  onEdit(booking: Booking) {
    this.bookingService.selectedBooking = booking;
  }

  onDelete(key: string) {
    if(confirm('Are you sure you want to delete this?') == true) {
      this.bookingService.deleteBooking(key);
      this.toastr.success('Removed Successfully!', 'Booking')
    }
  }

}
