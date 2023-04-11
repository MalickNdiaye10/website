import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ScoreService} from "../../../services/score.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private scoreService: ScoreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.scoreService.currentScore.subscribe((value) => {
      if (value < this.scoreService.max) {
        this.router.navigate([`/`], {relativeTo: this.route});
      }
    })
  }

}
