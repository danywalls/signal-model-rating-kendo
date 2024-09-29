import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieRatingComponent } from './componentes/movie-rating/movie-rating.component';

interface Movie {
  title: string;
  rating: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  movies = signal<Movie[]>([
    { title: 'Inception', rating: 4 },

    { title: 'Interstellar', rating: 5 },

    { title: 'The Dark Knight', rating: 5 },

    { title: 'Dunkirk', rating: 3 },
  ]);
}
