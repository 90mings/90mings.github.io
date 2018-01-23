import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'mings-Blog';

  ngOnInit() {
    console.log("site start");
  }
}

