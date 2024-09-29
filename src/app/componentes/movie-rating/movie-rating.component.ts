import { Component, model } from '@angular/core';
import { RatingComponent } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-movie-rating',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.scss',
})
export class MovieRatingComponent {
  rating = model(4);

  onRatingChange(newRating: number) {
    this.rating.update(() => newRating);
  }
}
