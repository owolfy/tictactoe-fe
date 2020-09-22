import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() value: 'X' | 'O';
  @Output() userClick = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
