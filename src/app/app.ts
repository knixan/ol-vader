import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { WeatherService, WeatherData } from './weather.service';
import { getBeerRecommendation, BeerRecommendation } from './beer-recommendations';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private weatherService = inject(WeatherService);

  city = signal('');
  weather = signal<WeatherData | null>(null);
  beer = signal<BeerRecommendation | null>(null);
  loading = signal(false);
  error = signal('');

  search() {
    const cityName = this.city().trim();
    if (!cityName) return;

    this.loading.set(true);
    this.error.set('');
    this.weather.set(null);
    this.beer.set(null);

    this.weatherService.getWeather(cityName).subscribe({
      next: (data) => {
        this.weather.set(data);
        this.beer.set(getBeerRecommendation(data.weather[0].id, data.main.temp));
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Hittade inte staden. Kontrollera stavningen och försök igen.');
        this.loading.set(false);
      },
    });
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.search();
  }
}
