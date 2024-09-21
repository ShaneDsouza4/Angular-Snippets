import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = []

  constructor(
    private _reservationService: ReservationService
  ) {

  }

  ngOnInit(): void {
    this.reservations = this._reservationService.getReservations();
    console.log(this.reservations)
  }

  deleteReservation(id: string) {
    this._reservationService.deleteReservation(id);
  }

}