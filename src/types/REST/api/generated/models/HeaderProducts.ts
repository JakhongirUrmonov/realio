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
import type { HeaderProductsDataInner } from './HeaderProductsDataInner';
import {
    HeaderProductsDataInnerFromJSON,
    HeaderProductsDataInnerFromJSONTyped,
    HeaderProductsDataInnerToJSON,
} from './HeaderProductsDataInner';

/**
 * 
 * @export
 * @interface HeaderProducts
 */
export interface HeaderProducts {
    /**
     * 
     * @type {Array<HeaderProductsDataInner>}
     * @memberof HeaderProducts
     */
    data?: Array<HeaderProductsDataInner>;
}

/**
 * Check if a given object implements the HeaderProducts interface.
 */
export function instanceOfHeaderProducts(value: object): value is HeaderProducts {
    return true;
}

export function HeaderProductsFromJSON(json: any): HeaderProducts {
    return HeaderProductsFromJSONTyped(json, false);
}

export function HeaderProductsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderProducts {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(HeaderProductsDataInnerFromJSON)),
    };
}

export function HeaderProductsToJSON(value?: HeaderProducts | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(HeaderProductsDataInnerToJSON)),
    };
}
