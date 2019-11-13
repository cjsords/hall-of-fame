import { Component, OnInit } from "@angular/core";
import { ComputerService } from "../services/computer.service";
import { People } from "../interfaces/people";

@Component({
  selector: "app-hof",
  templateUrl: "./hof.component.html",
  styleUrls: ["./hof.component.css"]
})
export class HofComponent implements OnInit {
  hallOfFamers: People;

  constructor(private computerService: ComputerService) {}

  ngOnInit() {
    this.computerService
      .getHallOfFame()
      .subscribe(person => (this.hallOfFamers = person));
  }
}
