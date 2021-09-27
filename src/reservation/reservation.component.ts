import {Component, OnInit} from '@angular/core';
import {Reservation} from '../models/reservation';
import {ReservationService} from './reservation.service';

@Component({
  selector: 'app-reservation',
  styleUrls: ['reservation.component.css'],
  templateUrl: 'reservation.component.html',
  providers: [ReservationService]
})
export class ReservationComponent implements OnInit {
  reservation: Reservation[] = [];

  constructor(private httpService: ReservationService) {
  }

  ngOnInit() {
    this.httpService.getAllReservationPage().subscribe((data: Reservation[]) => {console.log("data"+JSON.stringify(data)); this.reservation = data});
  }

  displayedColumns: string[] = ['id', 'hotel_id', 'apartment_id', 'status', 'start_date', 'end_date','user_id'];
}
