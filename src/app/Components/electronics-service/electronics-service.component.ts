import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import Swal from 'sweetalert2';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-electronics-service',
  templateUrl: './electronics-service.component.html',
  styleUrls: ['./electronics-service.component.css']
})
export class ElectronicsServiceComponent extends HomeComponent {
}
