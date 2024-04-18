import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { User } from './User';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {

  loggedInUserData: any;
  userData = new User();
  userTicketsList: any;
  // updaterUser={profilePic:'', name:'', phoneNumber:91, email:'', address:''};

  CPform = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  });
  constructor(private loginService: LoginService, private userService: UserService, private ticketService: TicketServiceService) {
  }
  // image-selector.component.ts

  images = [
    { src: 'assets/User/p01.png', alt: 'Image' },
    { src: 'assets/User/p02.png', alt: 'Image' },
    { src: 'assets/User/p03.png', alt: 'Image' },
    { src: 'assets/User/p04.png', alt: 'Image' },
    { src: 'assets/User/p05.png', alt: 'Image' },
    { src: 'assets/User/p06.png', alt: 'Image' },
    { src: 'assets/User/p07.png', alt: 'Image' },
    { src: 'assets/User/p08.png', alt: 'Image' },
    { src: 'assets/User/p09.png', alt: 'Image' },
    { src: 'assets/User/p10.png', alt: 'Image' },
    { src: 'assets/User/p11.png', alt: 'Image' },
    { src: 'assets/User/p12.png', alt: 'Image' },
    { src: 'assets/User/p13.png', alt: 'Image' },
    { src: 'assets/User/p14.png', alt: 'Image' },
    { src: 'assets/User/p15.png', alt: 'Image' },
    { src: 'assets/User/p16.png', alt: 'Image' },
    { src: 'assets/User/p17.png', alt: 'Image' },
    { src: 'assets/User/p18.png', alt: 'Image' },
    { src: 'assets/User/p19.png', alt: 'Image' },
    { src: 'assets/User/p20.png', alt: 'Image' },
    { src: 'assets/User/p21.png', alt: 'Image' },
    { src: 'assets/User/p22.png', alt: 'Image' },
    { src: 'assets/User/p23.png', alt: 'Image' },
    { src: 'assets/User/p24.png', alt: 'Image' },
    { src: 'assets/User/p25.png', alt: 'Image' },
    { src: 'assets/User/p26.png', alt: 'Image' },
    { src: 'assets/User/p27.png', alt: 'Image' },
    { src: 'assets/User/p28.png', alt: 'Image' },
    { src: 'assets/User/p29.png', alt: 'Image' },
  ];


  ngOnInit() {
    this.user();
    this.userTickets();
  }



  selectedImage: any;
  showImageSelector = false;

  selectImage(image: any) {
    this.userData.profilePic = image.src;
    this.selectedImage = image;
    console.log("IMAGE ::: " + this.selectedImage.src);

    this.toggleImageSelector();
  }

  toggleImageSelector() {
    this.showImageSelector = !this.showImageSelector;
  }


  logout() {
    this.loginService.Logout();
    window.location.reload();
  }


  user() {
    this.loggedInUserData = this.loginService.getUserData();
    this.userData = this.loggedInUserData;
    // // Call userByUsername method and subscribe to the Observable
    // this.userService.userByUsername(this.email).subscribe(
    //   (response: any) => {
    //     this.userData = response;
    //     // this.userData.profilePic = "assets/User/" + this.userData.profilePic + ".png";
    //   },
    //   (error: any) => {
    //     // Handle error
    //     console.error(error);
    //   }
    // );
  }


  userTickets() {
    this.ticketService.userTickets(this.userData.userId).subscribe(
      (resp:any) => {
        console.log(resp);
        this.userTicketsList = resp.response;
      },
      (error:any) => {
        console.error(error);
      }
    )
  }


  updateUser() {
    localStorage.setItem('user',JSON.stringify(this.userData));
    this.userService.updateUser(this.userData).subscribe(
      (response: any) => {
        console.log();
        Swal.fire({
          title: "Record Updated !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Record Updated !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
      }
    )
  }


  changePassword() {
    this.loginService.forgotPassword(this.CPform.value).subscribe(
      response => {
        console.log(response);
        this.CPform.reset();
        Swal.fire({
          title: "Password Changed !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        console.error(error);
        this.CPform.reset();
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
