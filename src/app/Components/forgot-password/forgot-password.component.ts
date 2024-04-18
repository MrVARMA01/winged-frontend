import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  FPform = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  });

  constructor(private loginService:LoginService){}

  forgotPassword(){
    this.loginService.forgotPassword(this.FPform.value).subscribe(
      response=>{
        console.log(response);
        this.FPform.reset();
        Swal.fire({
          title: "Password Changed !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      },
      error=>{
        console.error(error);
        this.FPform.reset();
        // Swal.fire({
        //   title: "Error in changing password !",
        //   icon: "error",
        //   showConfirmButton: false,
        //   timer: 1500
        // });
      }
    )
  }

}
