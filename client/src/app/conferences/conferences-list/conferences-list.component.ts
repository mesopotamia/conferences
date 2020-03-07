import {Component, Input, OnInit} from '@angular/core';
import {Conference} from "../conferences-query";

@Component({
  selector: 'app-conferences-list',
  templateUrl: './conferences-list.component.html',
  styleUrls: ['./conferences-list.component.scss']
})
export class ConferencesListComponent implements OnInit {

  @Input() conferences: Conference[];
  constructor() { }

  ngOnInit() {
  }

}
