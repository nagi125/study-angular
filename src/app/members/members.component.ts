import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from "../member.service";
import { MessageService } from "../message.service";

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

  /**
   * @param memberService
   * @param messageService
   */
  constructor(
      private memberService: MemberService,
      private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  /**
   * @param member
   */
  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(`MembersComponent: 社員データ(id=${member.id})が選択されました`);
  }

  getMembers(): void {
    this.memberService.getMembers() // Observable
        .subscribe(members => this.members = members)
  }

}
