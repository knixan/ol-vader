import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface WeatherData {
  name: string;
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private http = inject(HttpClient);
  private apiKey = environment.weatherApiKey;
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  getWeather(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${this.baseUrl}/weather?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric&lang=sv`
    );
  }
}
