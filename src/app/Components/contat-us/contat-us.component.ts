import { Component } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { TicketServiceService } from '../../services/ticket-service.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contat-us',
  templateUrl: './contat-us.component.html',
  styleUrls: ['./contat-us.component.css']
})
export class ContatUsComponent {

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



  public newTempTicket() {
    console.log("step1: " + JSON.stringify(this.ticketForm.value));

    this.service.newBooking(this.ticketForm.value).subscribe(
      (response:any) => {
        console.log(response);
        this.ticketForm.reset();
        Swal.fire({
          title: "Ticket Activated!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any) => {
        console.error(error);
        Swal.fire({
          title: "Invalid Details!",
          icon: "error"
        });
      });
  }

}
