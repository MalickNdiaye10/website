import { Component, OnInit } from '@angular/core';
import {ScoreService} from "../../services/score.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public maxedOut: boolean = false;
  public scoredComp: boolean = false;
  public scoredRea: boolean = false;
  public scoredExp: boolean = false;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.currentScore.subscribe((value) => {
      this.maxedOut = value == this.scoreService.max;
    })
  }

  Score(target: string): void{
    if (target == "comp"){
      if (this.scoredComp) return;
      this.scoredComp = true;
    } else if (target == 'rea'){
      if (this.scoredRea) return;
      this.scoredRea = true;
    } else if (target == 'exp'){
      if (this.scoredExp) return;
      this.scoredExp = true;
    }
    this.scoreService.addScore();
  }


}
