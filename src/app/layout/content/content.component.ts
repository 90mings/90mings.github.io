import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    console.log("start content");
  }
}
