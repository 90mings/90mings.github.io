import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    console.log("start footer");
  }
}
