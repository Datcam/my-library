import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-lib',
  template: `
    <p>
      My library was changed
    </p>
  `,
  styles: []
})
export class OurLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
