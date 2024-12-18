import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import Swal from 'sweetalert2';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-electricals-service',
  templateUrl: './electricals-service.component.html',
  styleUrls: ['./electricals-service.component.css']
})
export class ElectricalsServiceComponent extends HomeComponent {
}
