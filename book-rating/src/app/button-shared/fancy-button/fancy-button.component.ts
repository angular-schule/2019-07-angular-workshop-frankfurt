import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.scss']
})
export class FancyButtonComponent implements OnInit {

  @Input() label = 'Button';

  constructor() { }

  ngOnInit() {
  }

}
