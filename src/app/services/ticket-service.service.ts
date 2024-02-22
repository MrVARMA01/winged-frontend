import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  url="http://localhost:8080/"
  constructor(private http:HttpClient) { }

  
  newTicket(ticket:any):Observable<any>{
    console.log("step2: "+JSON.stringify(ticket));
    return this.http.post(this.url+"new-ticket",ticket);
  }
}
