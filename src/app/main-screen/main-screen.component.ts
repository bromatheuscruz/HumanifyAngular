import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  user: User = { 
    name: 'Matheus Cruz',
    position: 'Fullstack Developer'
  };

  ngOnInit() {
  }

}
