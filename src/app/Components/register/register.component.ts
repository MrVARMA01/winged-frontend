import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    profilePic: new FormControl("assets/User/p01.png", [Validators.required]),
    name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    phoneNumber: new FormControl(91, [Validators.required, Validators.minLength(12)]),
    address: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  constructor(private service: LoginService) { }

  register() {
    console.log(JSON.stringify(this.registerForm.value));
    this.service.register(this.registerForm.value).subscribe(
      (response: any) => {
        console.log(response.response);
        Swal.fire({
          icon: "success",
          title: response.response,
          text: "Kindly Login Now!",
          showConfirmButton: true,
        });
        const timer = setTimeout(() => {
          window.location.href = "login";
        }, 3000);
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed !",
          text: error.response,
          showConfirmButton: true,
        });
      }
    )
  }
}


