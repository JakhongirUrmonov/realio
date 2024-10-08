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
  ProductListResponse,
  ProductRequest,
  ProductResponse,
} from '../models/index';
import {
    ProductListResponseFromJSON,
    ProductListResponseToJSON,
    ProductRequestFromJSON,
    ProductRequestToJSON,
    ProductResponseFromJSON,
    ProductResponseToJSON,
} from '../models/index';

export interface DeleteProductsIdRequest {
    id: number;
}

export interface GetProductsRequest {
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

export interface GetProductsIdRequest {
    id: number;
}

export interface PostProductsRequest {
    productRequest: ProductRequest;
}

export interface PutProductsIdRequest {
    id: number;
    productRequest: ProductRequest;
}

/**
 * 
 */
export class ProductApi extends runtime.BaseAPI {

    /**
     */
    async deleteProductsIdRaw(requestParameters: DeleteProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteProductsId().'
            );
        }

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
            path: `/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
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
    async deleteProductsId(requestParameters: DeleteProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.deleteProductsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getProductsRaw(requestParameters: GetProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductListResponse>> {
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
            path: `/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductListResponseFromJSON(jsonValue));
    }

    /**
     */
    async getProducts(requestParameters: GetProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductListResponse> {
        const response = await this.getProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getProductsIdRaw(requestParameters: GetProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getProductsId().'
            );
        }

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
            path: `/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async getProductsId(requestParameters: GetProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductResponse> {
        const response = await this.getProductsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async postProductsRaw(requestParameters: PostProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters['productRequest'] == null) {
            throw new runtime.RequiredError(
                'productRequest',
                'Required parameter "productRequest" was null or undefined when calling postProducts().'
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
            path: `/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductRequestToJSON(requestParameters['productRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async postProducts(requestParameters: PostProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductResponse> {
        const response = await this.postProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async putProductsIdRaw(requestParameters: PutProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling putProductsId().'
            );
        }

        if (requestParameters['productRequest'] == null) {
            throw new runtime.RequiredError(
                'productRequest',
                'Required parameter "productRequest" was null or undefined when calling putProductsId().'
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
            path: `/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductRequestToJSON(requestParameters['productRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductResponseFromJSON(jsonValue));
    }

    /**
     */
    async putProductsId(requestParameters: PutProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductResponse> {
        const response = await this.putProductsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
