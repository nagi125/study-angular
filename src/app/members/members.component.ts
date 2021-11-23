import { Component, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {

  member: Member = {
    id: 1,
    name: '田中 太郎'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
