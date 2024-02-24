import { Component } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { TicketServiceService } from '../services/ticket-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ticket: Ticket = new Ticket();
  ticketForm = new FormGroup({
    customerName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("91", [Validators.required, Validators.minLength(12)]),
    address: new FormControl("", [Validators.required, Validators.minLength(8)]),
    serviceField: new FormControl("", [Validators.required,]),
    service: new FormControl("", [Validators.required,]),
    issueDescription: new FormControl("", [Validators.required, Validators.minLength(8)]),

  })

  constructor(private service: TicketServiceService) { }



  public newTicket() {
    console.log("step1: " + JSON.stringify(this.ticketForm.value));

    this.service.newTicket(this.ticketForm.value).subscribe(
      (response) => {
        console.log(response);
        this.ticketForm.reset();
        Swal.fire({
          title: "Ticket Activated!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        console.error(error);
        Swal.fire({
          title: "Invalid Details!",
          icon: "error"
        });
      });
  }


}
