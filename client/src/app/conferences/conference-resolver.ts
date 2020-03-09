import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {Conference, ConferencesByIdQuery} from "./conferences-query";

@Injectable({ providedIn: 'root' })
export class ConferenceResolver implements Resolve<Conference[]> {
  constructor(private getConferencesByIdQuery: ConferencesByIdQuery) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.getConferencesByIdQuery.fetch();
  }
}
