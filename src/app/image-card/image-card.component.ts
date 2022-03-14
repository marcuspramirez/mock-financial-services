import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  loginStatus: string = 'Not Logged In';


  constructor() {
    this.loginStatus = Math.random() > 0.5 ? "logged in" : "Not Logged In"
    
   }

  ngOnInit(): void {
  }

  getColor() {
    return this.loginStatus === 'logged in' ? 'green' : 'red';
  }

}
