import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS} from "../mock-members";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {

  members = MEMBERS;
  member: Member = {
    id: 0,
    name: ''
  };

  selectedMember: Member = this.member;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @param member
   */
  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
