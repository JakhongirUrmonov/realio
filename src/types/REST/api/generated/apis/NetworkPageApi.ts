/* tslint:disable */
/* eslint-disable */
/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  NetworkPageRequest,
  NetworkPageResponse,
} from '../models/index';
import {
    NetworkPageRequestFromJSON,
    NetworkPageRequestToJSON,
    NetworkPageResponseFromJSON,
    NetworkPageResponseToJSON,
} from '../models/index';

export interface GetNetworkPageRequest {
    sort?: string;
    paginationWithCount?: boolean;
    paginationPage?: number;
    paginationPageSize?: number;
    paginationStart?: number;
    paginationLimit?: number;
    fields?: string;
    populate?: string;
    filters?: object;
    locale?: string;
}

export interface PutNetworkPageRequest {
    networkPageRequest: NetworkPageRequest;
}

/**
 * 
 */
export class NetworkPageApi extends runtime.BaseAPI {

    /**
     */
    async deleteNetworkPageRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/network-page`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async deleteNetworkPage(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.deleteNetworkPageRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getNetworkPageRaw(requestParameters: GetNetworkPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NetworkPageResponse>> {
        const queryParameters: any = {};

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['paginationWithCount'] != null) {
            queryParameters['pagination[withCount]'] = requestParameters['paginationWithCount'];
        }

        if (requestParameters['paginationPage'] != null) {
            queryParameters['pagination[page]'] = requestParameters['paginationPage'];
        }

        if (requestParameters['paginationPageSize'] != null) {
            queryParameters['pagination[pageSize]'] = requestParameters['paginationPageSize'];
        }

        if (requestParameters['paginationStart'] != null) {
            queryParameters['pagination[start]'] = requestParameters['paginationStart'];
        }

        if (requestParameters['paginationLimit'] != null) {
            queryParameters['pagination[limit]'] = requestParameters['paginationLimit'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        if (requestParameters['filters'] != null) {
            queryParameters['filters'] = requestParameters['filters'];
        }

        if (requestParameters['locale'] != null) {
            queryParameters['locale'] = requestParameters['locale'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/network-page`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkPageResponseFromJSON(jsonValue));
    }

    /**
     */
    async getNetworkPage(requestParameters: GetNetworkPageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NetworkPageResponse> {
        const response = await this.getNetworkPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async putNetworkPageRaw(requestParameters: PutNetworkPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NetworkPageResponse>> {
        if (requestParameters['networkPageRequest'] == null) {
            throw new runtime.RequiredError(
                'networkPageRequest',
                'Required parameter "networkPageRequest" was null or undefined when calling putNetworkPage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/network-page`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: NetworkPageRequestToJSON(requestParameters['networkPageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkPageResponseFromJSON(jsonValue));
    }

    /**
     */
    async putNetworkPage(requestParameters: PutNetworkPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NetworkPageResponse> {
        const response = await this.putNetworkPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
