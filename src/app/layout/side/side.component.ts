import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    console.log("start side");
  }
}
