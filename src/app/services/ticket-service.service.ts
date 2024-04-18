import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../Components/ticket/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  url="http://localhost:8080/auth/"
  constructor(private http:HttpClient) { }


  //************************************************* TEMP-TICKET **************************************************//
  
  newTempTicket(ticket:any):Observable<any>{
    return this.http.post(this.url+"new-temp-ticket",ticket);
  }

  userTickets(userId:number){
    return this.http.get(this.url+"user-temp-tickets/"+userId);
  }
  
  allServiceFields(){
    return this.http.get(this.url+"all-service-fields");
  }
  filteredSubFields(id:number){
    return this.http.get(this.url+"sub-fields-by-field/"+id);
  }
  filteredActualServices(id:number){
    return this.http.get(this.url+"actual-services-by-sub-field/"+id);
  }
}
