import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { People } from "../interfaces/people";

@Injectable({
  providedIn: "root"
})
export class ComputerService {
  getHallOfFame(): Observable<any> {
    return this.http.get(
      "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json"
    );
  }
  constructor(private http: HttpClient) {}
}
