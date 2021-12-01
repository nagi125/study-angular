import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService} from "../member.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {

  members: Member[] = [];

  member: Member = {
    id: 0,
    name: ''
  };


  selectedMember: Member = this.member;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  /**
   * @param member
   */
  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.memberService.getMembers() // Observable
        .subscribe(members => this.members = members)
  }

}
