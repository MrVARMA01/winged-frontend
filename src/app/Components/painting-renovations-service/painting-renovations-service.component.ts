import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-painting-renovations-service',
  templateUrl: './painting-renovations-service.component.html',
  styleUrls: ['./painting-renovations-service.component.css']
})
export class PaintingRenovationsServiceComponent {
  serviceFields:any;
  selecedServiceFieldId:any;
  subServices:any;
  selecedSubServiceId:any;
  actualservices:any;

  ticketForm = new FormGroup({
    userId: new FormControl(0, [Validators.required]),
    customerName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl(91, [Validators.required, Validators.minLength(12)]),
    address: new FormControl("", [Validators.required, Validators.minLength(8)]),
    serviceField: new FormControl(0, [Validators.required,]),
    subService: new FormControl(0, [Validators.required,]),
    actualService: new FormControl(0, [Validators.required,]),
    areaInMeters: new FormControl(0, [Validators.required,]),
    issueDescription: new FormControl("", [Validators.required, Validators.minLength(8)]),
  })

  constructor(private service: TicketServiceService, private loginService:LoginService) { }


  ngOnInit(){
    this.allServiceFields();
  }

  public newTempTicket() {
    if (this.ticketForm && this.ticketForm.get('userId')) {
      // Set the userId value
      const user = this.loginService.getUserData();
      this.ticketForm.get('userId')?.setValue(user.userId);
    }
    this.service.newTempTicket(this.ticketForm.value).subscribe(
      (response) => {
        console.log(response.message);
        this.ticketForm.reset();
        Swal.fire({
          title: "Ticket Created!",
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

  allServiceFields(){
    this.service.allServiceFields().subscribe(
      response=>{
        console.log(response);
        this.serviceFields = response;
      },
      error=>{console.error(error);}
    )
  }

  filteredSubServices(){
    this.selecedServiceFieldId = this.ticketForm.get('serviceField')?.value;
    this.service.filteredSubFields(this.selecedServiceFieldId).subscribe(
      response=>{
        console.log(response);
        this.subServices = response;
      },
      error=>{console.error(error);}
    )
  }

  filteredActualServices(){
    this.selecedSubServiceId = this.ticketForm.get('subService')?.value;
    this.service.filteredActualServices(this.selecedSubServiceId).subscribe(
      response=>{
        console.log(response);
        this.actualservices = response;
      },
      error=>{console.error(error);}
    )
  }

}
