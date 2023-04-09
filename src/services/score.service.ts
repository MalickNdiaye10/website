import { Injectable } from '@angular/core';
import {BehaviorSubject, max} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score = new BehaviorSubject<number>(1000);
  currentScore = this.score.asObservable();
  private increment = 1000;
  public max = 4000;

  constructor() {

  }

  addScore(){
    if (this.score.getValue() < this.max){
      this.score.next(this.score.getValue() + this.increment);
    }
  }
}
