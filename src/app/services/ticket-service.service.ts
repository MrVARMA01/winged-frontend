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
  
  newBooking(ticket:any):Observable<any>{
    return this.http.post(this.url+"new-booking",ticket);
  }

  userBookings(userId:number){
    return this.http.get(this.url+"user-bookings/"+userId);
  }
  userPaintingAndRenovationsTickets(userId:number){
    return this.http.get(this.url+"all-user-painting-and-renovation-tickets/"+userId);
  }
  userElectronicsTickets(userId:number){
    return this.http.get(this.url+"all-user-electronics-tickets/"+userId);
  }
  allServiceFields(){
    return this.http.get(this.url+"all-service-fields");
  }
  filteredSubFields(id:number){
    return this.http.get(this.url+"sub-fields-by-service-field/"+id);
  }
  filteredActualServices(id:number){
    return this.http.get(this.url+"actual-services-by-sub-field/"+id);
  }
  ActualService(id:number){
    return this.http.get(this.url+"actual-service/"+id);
  }
  ActualServiceDetails(id:number){
    return this.http.get(this.url+"actual-service-details/"+id);
  }
}
