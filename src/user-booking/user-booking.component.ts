import {Component, OnInit} from '@angular/core';
import {Reservation} from '../models/reservation';
import {UserBookingService} from "./user-booking.service";
import {ActivatedRoute} from "@angular/router";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-user-booking',
  styleUrls: ['user-booking.component.css'],
  templateUrl: 'user-booking.component.html',
  providers: [UserBookingService]
})
export class UserBookingComponent implements OnInit {
  reservation: Reservation[] = [];

  isLogin: boolean = true;
  roles: string[] = [];
  email: string = '';
  isLoggedIn = false;

  constructor(private httpService: UserBookingService,
              private activatedRoute: ActivatedRoute,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      const user = this.tokenStorage.getUser();
      this.email = user.email;
    }
    
    console.log("this.email: "+ this.email)

    this.httpService.getAllReservationUser(this.email).subscribe((data: Reservation[]) => {console.log("data"+JSON.stringify(data)); this.reservation = data});
  }

  displayedColumns: string[] = ['id', 'hotel_id', 'apartment_id', 'status', 'start_date', 'end_date','email'];
}
