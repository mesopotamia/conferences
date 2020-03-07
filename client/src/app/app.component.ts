import {Component} from '@angular/core';
import {Conference, ConferencesQuery} from "./conferences/conferences-query";
import {Observable} from "apollo-link";
import {map} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conferences: Conference[];
  constructor(private conferencesQuery: ConferencesQuery) {
    this.conferencesQuery.fetch().subscribe(({data}) => {
      console.log(data.conferences);
      this.conferences = data.conferences;
    });
  }
}
