/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { WeatherForecast } from '../models/weather-forecast';

@Injectable({ providedIn: 'root' })
export class WeatherForecastService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiWeatherForecastGet()` */
  static readonly ApiWeatherForecastGetPath = '/api/WeatherForecast';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWeatherForecastGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWeatherForecastGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    const rb = new RequestBuilder(this.rootUrl, WeatherForecastService.ApiWeatherForecastGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeatherForecast>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWeatherForecastGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWeatherForecastGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<WeatherForecast>> {
    return this.apiWeatherForecastGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WeatherForecast>>): Array<WeatherForecast> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWeatherForecastGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWeatherForecastGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    const rb = new RequestBuilder(this.rootUrl, WeatherForecastService.ApiWeatherForecastGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeatherForecast>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWeatherForecastGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWeatherForecastGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<WeatherForecast>> {
    return this.apiWeatherForecastGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WeatherForecast>>): Array<WeatherForecast> => r.body)
    );
  }

}
