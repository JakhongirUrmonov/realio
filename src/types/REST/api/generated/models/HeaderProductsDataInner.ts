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
import type { HeaderProductsDataInnerAttributes } from './HeaderProductsDataInnerAttributes';
import {
    HeaderProductsDataInnerAttributesFromJSON,
    HeaderProductsDataInnerAttributesFromJSONTyped,
    HeaderProductsDataInnerAttributesToJSON,
} from './HeaderProductsDataInnerAttributes';

/**
 * 
 * @export
 * @interface HeaderProductsDataInner
 */
export interface HeaderProductsDataInner {
    /**
     * 
     * @type {number}
     * @memberof HeaderProductsDataInner
     */
    id?: number;
    /**
     * 
     * @type {HeaderProductsDataInnerAttributes}
     * @memberof HeaderProductsDataInner
     */
    attributes?: HeaderProductsDataInnerAttributes;
}

/**
 * Check if a given object implements the HeaderProductsDataInner interface.
 */
export function instanceOfHeaderProductsDataInner(value: object): value is HeaderProductsDataInner {
    return true;
}

export function HeaderProductsDataInnerFromJSON(json: any): HeaderProductsDataInner {
    return HeaderProductsDataInnerFromJSONTyped(json, false);
}

export function HeaderProductsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderProductsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : HeaderProductsDataInnerAttributesFromJSON(json['attributes']),
    };
}

export function HeaderProductsDataInnerToJSON(value?: HeaderProductsDataInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': HeaderProductsDataInnerAttributesToJSON(value['attributes']),
    };
}

