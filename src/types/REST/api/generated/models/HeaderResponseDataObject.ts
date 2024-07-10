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
import type { Header } from './Header';
import {
    HeaderFromJSON,
    HeaderFromJSONTyped,
    HeaderToJSON,
} from './Header';

/**
 * 
 * @export
 * @interface HeaderResponseDataObject
 */
export interface HeaderResponseDataObject {
    /**
     * 
     * @type {number}
     * @memberof HeaderResponseDataObject
     */
    id?: number;
    /**
     * 
     * @type {Header}
     * @memberof HeaderResponseDataObject
     */
    attributes?: Header;
}

/**
 * Check if a given object implements the HeaderResponseDataObject interface.
 */
export function instanceOfHeaderResponseDataObject(value: object): value is HeaderResponseDataObject {
    return true;
}

export function HeaderResponseDataObjectFromJSON(json: any): HeaderResponseDataObject {
    return HeaderResponseDataObjectFromJSONTyped(json, false);
}

export function HeaderResponseDataObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderResponseDataObject {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : HeaderFromJSON(json['attributes']),
    };
}

export function HeaderResponseDataObjectToJSON(value?: HeaderResponseDataObject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': HeaderToJSON(value['attributes']),
    };
}
