import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit{
  message: string | undefined;
  constructor() {
    setInterval(() => {
      this.message = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }
}
