import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-item',
  templateUrl: './toolbar-item.component.html',
  styleUrls: ['./toolbar-item.component.css']
})
export class ToolbarItemComponent implements OnInit {

  @Input()
  label: string = '';

  @Input()
  active?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
