import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private memberService: MembersService) { }

  members: Member[] = [];

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((payload) => {
      this.members = payload;
      console.log(payload)
    })
  }

}
