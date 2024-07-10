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
import type { Product } from './Product';
import {
    ProductFromJSON,
    ProductFromJSONTyped,
    ProductToJSON,
} from './Product';

/**
 * 
 * @export
 * @interface ProductListResponseDataItem
 */
export interface ProductListResponseDataItem {
    /**
     * 
     * @type {number}
     * @memberof ProductListResponseDataItem
     */
    id?: number;
    /**
     * 
     * @type {Product}
     * @memberof ProductListResponseDataItem
     */
    attributes?: Product;
}

/**
 * Check if a given object implements the ProductListResponseDataItem interface.
 */
export function instanceOfProductListResponseDataItem(value: object): value is ProductListResponseDataItem {
    return true;
}

export function ProductListResponseDataItemFromJSON(json: any): ProductListResponseDataItem {
    return ProductListResponseDataItemFromJSONTyped(json, false);
}

export function ProductListResponseDataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductListResponseDataItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : ProductFromJSON(json['attributes']),
    };
}

export function ProductListResponseDataItemToJSON(value?: ProductListResponseDataItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': ProductToJSON(value['attributes']),
    };
}

