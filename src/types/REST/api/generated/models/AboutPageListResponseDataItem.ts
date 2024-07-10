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
import type { AboutPage } from './AboutPage';
import {
    AboutPageFromJSON,
    AboutPageFromJSONTyped,
    AboutPageToJSON,
} from './AboutPage';

/**
 * 
 * @export
 * @interface AboutPageListResponseDataItem
 */
export interface AboutPageListResponseDataItem {
    /**
     * 
     * @type {number}
     * @memberof AboutPageListResponseDataItem
     */
    id?: number;
    /**
     * 
     * @type {AboutPage}
     * @memberof AboutPageListResponseDataItem
     */
    attributes?: AboutPage;
}

/**
 * Check if a given object implements the AboutPageListResponseDataItem interface.
 */
export function instanceOfAboutPageListResponseDataItem(value: object): value is AboutPageListResponseDataItem {
    return true;
}

export function AboutPageListResponseDataItemFromJSON(json: any): AboutPageListResponseDataItem {
    return AboutPageListResponseDataItemFromJSONTyped(json, false);
}

export function AboutPageListResponseDataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageListResponseDataItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : AboutPageFromJSON(json['attributes']),
    };
}

export function AboutPageListResponseDataItemToJSON(value?: AboutPageListResponseDataItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': AboutPageToJSON(value['attributes']),
    };
}
