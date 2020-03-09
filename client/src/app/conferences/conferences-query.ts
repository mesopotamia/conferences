import {Injectable} from "@angular/core";
import {Query} from "apollo-angular";
import gql from "graphql-tag";

export interface Conference {
  city: string;
  date: string;
  name: string;
  id: string;
}
interface Response {
  conferences: Conference[];
}
@Injectable({
  providedIn: 'root'
})
export class ConferencesQuery extends Query<Response> {
  document = gql`
  query MyQuery {
  conferences(limit: 10) {
    city
    date
    name
    id
  }
}
`
}
@Injectable({
  providedIn: 'root'
})
export class ConferencesByIdQuery extends Query<Response> {
  document = gql`
  query getConferencesByIdQuery {
  conferences(where: {id: {_eq: "666"}}  ) {
    city
    date
    name
    id
  }
}
`
}
