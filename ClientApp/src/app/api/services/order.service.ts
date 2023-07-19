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

import { Order } from '../models/order';
import { OrderResult } from '../models/order-result';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiOrderGet()` */
  static readonly ApiOrderGetPath = '/api/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Plain$Response(
    params?: {
      page?: number;
      pageSize?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<OrderResult>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetPath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderResult>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Plain(
    params?: {
      page?: number;
      pageSize?: number;
    },
    context?: HttpContext
  ): Observable<OrderResult> {
    return this.apiOrderGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderResult>): OrderResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Json$Response(
    params?: {
      page?: number;
      pageSize?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<OrderResult>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetPath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('pageSize', params.pageSize, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderResult>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Json(
    params?: {
      page?: number;
      pageSize?: number;
    },
    context?: HttpContext
  ): Observable<OrderResult> {
    return this.apiOrderGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderResult>): OrderResult => r.body)
    );
  }

  /** Path part for operation `apiOrderPut()` */
  static readonly ApiOrderPutPath = '/api/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPut$Response(
    params?: {
      key?: number;
      body?: Order
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderPutPath, 'put');
    if (params) {
      rb.query('key', params.key, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPut(
    params?: {
      key?: number;
      body?: Order
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiOrderPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOrderPost()` */
  static readonly ApiOrderPostPath = '/api/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Response(
    params?: {
      body?: Order
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost(
    params?: {
      body?: Order
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiOrderPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOrderKeyDelete()` */
  static readonly ApiOrderKeyDeletePath = '/api/Order/{key}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderKeyDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderKeyDelete$Response(
    params: {
      key: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderKeyDeletePath, 'delete');
    if (params) {
      rb.path('key', params.key, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderKeyDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderKeyDelete(
    params: {
      key: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiOrderKeyDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
