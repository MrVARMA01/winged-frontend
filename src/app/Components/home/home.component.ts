import { Component } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { TicketServiceService } from '../../services/ticket-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  serviceFields:any;
  selecedServiceFieldId:any;
  subFields:any;
  selecedSubFieldId:any;
  actualservices:any;

  ticketForm = new FormGroup({
    userId: new FormControl(0, [Validators.required]),
    customerName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl(91, [Validators.required, Validators.minLength(12)]),
    address: new FormControl("", [Validators.required, Validators.minLength(8)]),
    serviceField: new FormControl(0, [Validators.required,]),
    subField: new FormControl(0, [Validators.required,]),
    actualService: new FormControl(0, [Validators.required,]),
    areaInMeters: new FormControl(0, [Validators.required,]),
    issueDescription: new FormControl("", [Validators.required, Validators.minLength(8)]),
  })

  constructor(private ticketService: TicketServiceService, private loginService:LoginService) { }


  ngOnInit(){
    this.allServiceFields();
  }

  public newTempTicket() {
    if (this.ticketForm && this.ticketForm.get('userId')) {
      // Set the userId value
      const user = this.loginService.getUserData();
      this.ticketForm.get('userId')?.setValue(user.userId);
    }
    console.log(this.ticketForm.value);    
    this.ticketService.newBooking(this.ticketForm.value).subscribe(
      (response:any) => {
        console.log(response.status);
        this.ticketForm.reset();
        Swal.fire({
          title: "Service Booked!",
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

  allServiceFields(){
    this.ticketService.allServiceFields().subscribe(
      response=>{
        this.serviceFields = response;
      },
      error=>{console.error(error);}
    )
  }

  filteredSubFields(){
    this.selecedServiceFieldId = this.ticketForm.get('serviceField')?.value;    
    this.ticketService.filteredSubFields(this.selecedServiceFieldId).subscribe(
      response=>{
        this.subFields = response;
      },
      error=>{console.error(error);}
    )
  }

  filteredActualServices(){
    this.selecedSubFieldId = this.ticketForm.get('subField')?.value;
    // console.log("subField ID :"+ this.selecedSubFieldId);
    this.ticketService.filteredActualServices(this.selecedSubFieldId).subscribe(
      response=>{
        this.actualservices = response;
      },
      error=>{console.error(error);}
    )
  }

}
