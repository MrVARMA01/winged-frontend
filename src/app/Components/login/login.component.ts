import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token:any;
  vismeEmbedCode: SafeHtml | undefined;
  loginform= new FormGroup({
    username: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef, private service:LoginService) { }

  ngOnInit(): void {
    // Your Visme embed code
    const vismeCode = `
    <div class="visme_d" data-title="Untitled Project" data-url="kkj7jjkk-untitled-project?fullPage=true"
        data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="31162"></div>
    <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
    `;

    // Sanitize the Visme embed code
    this.vismeEmbedCode = this.sanitizer.bypassSecurityTrustHtml(vismeCode);

    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';

    // Append the script to the component's native element
    this.elementRef.nativeElement.appendChild(script);
  }

  login(){
    this.service.Login(this.loginform.value).subscribe(
      response=>{
        this.token=response;
        console.log("Login Succesful !");
        localStorage.setItem('token',this.token.jwtToken);
        localStorage.setItem('user',JSON.stringify(this.token.user));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Succesful !",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href="";
      },
      error=>{console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }
  
}