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

import { mapValues } from '../runtime';
import type { ProductRequestData } from './ProductRequestData';
import {
    ProductRequestDataFromJSON,
    ProductRequestDataFromJSONTyped,
    ProductRequestDataToJSON,
} from './ProductRequestData';

/**
 * 
 * @export
 * @interface ProductRequest
 */
export interface ProductRequest {
    /**
     * 
     * @type {ProductRequestData}
     * @memberof ProductRequest
     */
    data: ProductRequestData;
}

/**
 * Check if a given object implements the ProductRequest interface.
 */
export function instanceOfProductRequest(value: object): value is ProductRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ProductRequestFromJSON(json: any): ProductRequest {
    return ProductRequestFromJSONTyped(json, false);
}

export function ProductRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ProductRequestDataFromJSON(json['data']),
    };
}

export function ProductRequestToJSON(value?: ProductRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ProductRequestDataToJSON(value['data']),
    };
}

