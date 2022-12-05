import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  // loggedIn = true;
  isCollapsed: boolean = true;

  constructor() {}

  // myEvent(event: any) {
  //   console.log(event);
  // }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {}
}
