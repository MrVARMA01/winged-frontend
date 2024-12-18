import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import Swal from 'sweetalert2';
import { HomeComponent } from '../home/home.component';
import { Booking } from '../user-account/booking';

@Component({
  selector: 'app-painting-renovations-service',
  templateUrl: './painting-renovations-service.component.html',
  styleUrls: ['./painting-renovations-service.component.css']
})
export class PaintingRenovationsServiceComponent{

  booking:Booking= new Booking();
  userData:any;
  paintingsList:any;
  polishingsList:any;
  renovationsList:any;

  constructor(private loginService:LoginService, private ticketService:TicketServiceService){ }
  ngOnInit(){
    this.userData = this.loginService.getUserData();
    this.paintingServices();
    this.polishingServices();
    this.renovstionServices();
  }

  newBooking(subField:number,actualService:number){
    this.booking.userId = this.userData.userId;
    this.booking.customerName = this.userData.name;
    this.booking.email = this.userData.email;
    this.booking.phone = this.userData.phoneNumber;
    this.booking.address = this.userData.addressId;
    this.booking.serviceField= 1;
    this.booking.subField = subField;
    this.booking.actualService =actualService;
    console.log(this.booking);
    this.ticketService.newBooking(this.booking).subscribe(
      (resp:any)=>{
        console.log(resp.response);
        Swal.fire({
          title: "Service Booked!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error:any)=>{
        console.error(error);
        Swal.fire({
          title: "Booking Failed!",
          icon: "error",
          showConfirmButton: true,
          timer: 1500
        });
      }
    )
  }

  paintingServices(){
    this.ticketService.filteredActualServices(2).subscribe(
      (resp:any)=>{        
        this.paintingsList = resp.response;     
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

  polishingServices(){
    this.ticketService.filteredActualServices(3).subscribe(
      (resp:any)=>{
        this.polishingsList = resp.response;     
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

  renovstionServices(){
    this.ticketService.filteredActualServices(4).subscribe(
      (resp:any)=>{
        this.renovationsList = resp.response;     
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

}
