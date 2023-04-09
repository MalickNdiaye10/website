import {Component, OnInit} from '@angular/core';
import {ScoreService} from "../../services/score.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  public currentScore: number = 0;
  public maxScore: number = 0;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.maxScore = this.scoreService.max;
    this.scoreService.currentScore.subscribe((value) => {
      this.currentScore = value;
      this.fillBar();
    })
  }

  fillBar(): void{
    const scoreBar = document.getElementById("score-bar");
    if (scoreBar != null){
      scoreBar.style.width = ((this.currentScore / this.maxScore) * 100) + "%";
    }
  }
}
