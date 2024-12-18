import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { User } from './User';
import { Booking } from './booking';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {

  loggedInUserData: any;
  userData = new User();
  userAddresses: any;
  userBookingsList: Booking[] = [];
  userPRTicketsList: any[] = [];
  userElectronicsTicketsList: any;
  bookedActualServices: string[] = [];
  actualserviceDetsilsData: any;
  address: any = {
    streetAddress: '',
    city: '',
    state: '',
    country: 'India',
    pinCode: 0
  };
  newAddress:any = {
    streetAddress: '',
    city: '',
    state: '',
    country: 'India',
    pinCode: 0
  };
  selectedImage: any;
  showImageSelector = false;
  CPform = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  });

  constructor(private loginService: LoginService, private userService: UserService, private ticketService: TicketServiceService) {
  }


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
    this.userBookings();
    this.userPRTickets();
    this.userElectronicsTickets();
  }





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
    window.location.href = "/login";
  }


  user() {
    this.loggedInUserData = this.loginService.getUserData();
    this.userData = this.loggedInUserData;
    this.userService.addressById(this.userData.addressId).subscribe(
      (response: any) => {
        this.address = response.response;
        this.userAddresses = this.userData.addresses;
      },
      (error: any) => { console.log(error); }
    )
  }



  userBookings() {
    this.ticketService.userBookings(this.userData.userId).subscribe(
      (resp: any) => {
        this.userBookingsList = resp.response;
        // Iterate through each ticket and push its actualService value to bookedActualServices
        this.userBookingsList.forEach(ticket => {
          this.ticketService.ActualService(ticket.actualService).subscribe(
            (resp: any) => {
              this.bookedActualServices.push(resp.response.service);
            },
            (error: any) => {
              console.log(error);
            }
          )
        });
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  userPRTickets() {
    this.ticketService.userPaintingAndRenovationsTickets(this.userData.userId).subscribe(
      (resp: any) => {
        this.userPRTicketsList = resp.response;
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  userElectronicsTickets() {
    this.ticketService.userElectronicsTickets(this.userData.userId).subscribe(
      (resp: any) => {
        this.userElectronicsTicketsList = resp.response;
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  updateUser() {
    localStorage.setItem('user', JSON.stringify(this.userData));
    this.userService.updateUser(this.userData).subscribe(
      (response: any) => {
        Swal.fire({
          title: "Record Updated !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
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

  newUserAddress() {
    this.userService.newUserAddress(this.userData.userId, this.newAddress).subscribe(
      (response: any) => {
        localStorage.setItem('user',JSON.stringify(response.response));
        console.log(this.userData.userId, this.newAddress);
        Swal.fire({
          title: "Address Added!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          this.user();
          window.location.reload();
        }, 1500);
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Record Failed!",
          icon: "error",
          showConfirmButton: true,
        });
      })

  }


  @ViewChild('popupFormContainer') popupFormContainer!: ElementRef;
  isPopupVisible = false;

  togglePopup() {
    // this.StatusUpdateId = id
    this.isPopupVisible = !this.isPopupVisible;
  }

  closePopupForm() {
    this.isPopupVisible = false;
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
        Swal.fire({
          title: "Error in changing password !",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }
}
