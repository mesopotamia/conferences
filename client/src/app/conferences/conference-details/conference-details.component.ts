import {Component, Input, OnInit} from '@angular/core';
import {Conference} from "../conferences-query";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {ActivateRoutes} from "@angular/router/src/operators/activate_routes";

@Component({
  selector: 'app-conference-details',
  templateUrl: './conference-details.component.html',
  styleUrls: ['./conference-details.component.scss']
})
export class ConferenceDetailsComponent implements OnInit {

  @Input() conference: Conference;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.conference = this.route.snapshot.data.conference.data.conferences[0];
  }

}
