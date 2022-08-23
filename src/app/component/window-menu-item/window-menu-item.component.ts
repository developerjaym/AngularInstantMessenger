import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-menu-item',
  templateUrl: './window-menu-item.component.html',
  styleUrls: ['./window-menu-item.component.css']
})
export class WindowMenuItemComponent implements OnInit {

  @Input()
  label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
