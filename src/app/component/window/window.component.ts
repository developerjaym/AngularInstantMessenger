import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  @Input()
  label = 'Window'

  @Input()
  icon = ''

  constructor() { }

  ngOnInit(): void {
  }

}
