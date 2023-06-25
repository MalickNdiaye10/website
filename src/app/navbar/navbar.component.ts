import { Component, OnInit } from '@angular/core';
import {ScoreService} from "../../services/score.service";

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
  public currentScore: number = 0;
  public maxScore: number = 0;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.maxScore = this.scoreService.max;
    this.scoreService.currentScore.subscribe((value) => {
      this.currentScore = value;
      this.fillBar();
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

  fillBar(): void{
    const scoreBar = document.getElementById("score-bar");
    if (scoreBar != null){
      scoreBar.style.width = ((this.currentScore / this.maxScore) * 100) + "%";
    }
  }
}
