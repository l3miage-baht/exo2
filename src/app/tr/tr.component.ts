import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-tr]',
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.scss']
})
export class TrComponent implements OnInit {
  @Input() id: string
  @Input() username: string
  @Input() email: string

  constructor() {

   }

  ngOnInit(): void {
  }

}
