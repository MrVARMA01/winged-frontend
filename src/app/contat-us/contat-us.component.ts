import { Component } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { TicketServiceService } from '../services/ticket-service.service';

@Component({
  selector: 'app-contat-us',
  templateUrl: './contat-us.component.html',
  styleUrls: ['./contat-us.component.css']
})
export class ContatUsComponent {

  ticket: Ticket = new Ticket();

  constructor(private service: TicketServiceService) { }



  public newTicket() {
    console.log("step1: "+JSON.stringify(this.ticket));
    
    this.service.newTicket(this.ticket).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      })
  }

  reset(){
    this.ticket.address='';
    this.ticket.customerName='';
    this.ticket.email='';
    this.ticket.issueDescription='';
    this.ticket.phone=91 ;
    this.ticket.service='';
    this.ticket.serviceField='';
  }
}
