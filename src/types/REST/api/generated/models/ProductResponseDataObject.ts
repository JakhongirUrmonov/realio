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
 * @interface ProductResponseDataObject
 */
export interface ProductResponseDataObject {
    /**
     * 
     * @type {number}
     * @memberof ProductResponseDataObject
     */
    id?: number;
    /**
     * 
     * @type {Product}
     * @memberof ProductResponseDataObject
     */
    attributes?: Product;
}

/**
 * Check if a given object implements the ProductResponseDataObject interface.
 */
export function instanceOfProductResponseDataObject(value: object): value is ProductResponseDataObject {
    return true;
}

export function ProductResponseDataObjectFromJSON(json: any): ProductResponseDataObject {
    return ProductResponseDataObjectFromJSONTyped(json, false);
}

export function ProductResponseDataObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductResponseDataObject {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : ProductFromJSON(json['attributes']),
    };
}

export function ProductResponseDataObjectToJSON(value?: ProductResponseDataObject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': ProductToJSON(value['attributes']),
    };
}

