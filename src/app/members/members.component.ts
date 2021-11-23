import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {

  member = '田中 太郎';

  constructor() { }

  ngOnInit(): void {
  }

}
