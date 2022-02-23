import { Component, OnInit } from '@angular/core';

import { CdsService } from '../cds.service';
import { Cd } from './cd.model';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.css']
})
export class CdsComponent implements OnInit {

  constructor(private cdService: CdsService ) {}


  index = '';
  cds: Cd[] = [];

  ngOnInit(): void {
    this.cdService.getCds().subscribe((payload) => {
      this.cds = payload;
      console.log(payload)
    })
   
  }

 

}
