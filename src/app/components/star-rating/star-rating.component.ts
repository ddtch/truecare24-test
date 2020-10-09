import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarRatingComponent implements OnInit {

  public stars = [1, 2, 3, 4, 5];
  @Input()
  public currentScore = null;
  @Output()
  public voted: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public setRating(rate: number) {
    this.currentScore = rate;
    this.voted.emit(rate);
  }
}
