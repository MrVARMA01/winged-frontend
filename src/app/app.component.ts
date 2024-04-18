import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  isLoggedIn=false;

  constructor(private loginService:LoginService){}

  ngOnInit(){
    const token = this.loginService.isLoggedIn();
    if(token!=null){
      this.isLoggedIn=true;
      console.log("1:"+token);
    }
    else{
      console.log("2:"+token);
      this.isLoggedIn=false;
    }
  }
}
