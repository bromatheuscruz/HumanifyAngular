import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User 
{
  name: string;
  position: string;
}

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.less']
})
export class MainScreenComponent implements OnInit {

  constructor(private router: Router) { }

  user: User = { 
    name: 'Matheus Cruz',
    position: 'Fullstack Developer'
  };

  goToRoute(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {
  }

}
