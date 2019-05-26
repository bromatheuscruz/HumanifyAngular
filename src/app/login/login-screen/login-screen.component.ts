import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Alert {
  message: string;
  visible: boolean;
}

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router) { }

  alert: Alert = 
  {
    visible: false,
    message: 'Invalid credentials'
  };

  showAlert(): void 
  {
    this.router.navigate(['main']);
  }


  ngOnInit() {
  }

}
