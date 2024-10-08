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
import type { HomePage } from './HomePage';
import {
    HomePageFromJSON,
    HomePageFromJSONTyped,
    HomePageToJSON,
} from './HomePage';

/**
 * 
 * @export
 * @interface HomePageListResponseDataItem
 */
export interface HomePageListResponseDataItem {
    /**
     * 
     * @type {number}
     * @memberof HomePageListResponseDataItem
     */
    id?: number;
    /**
     * 
     * @type {HomePage}
     * @memberof HomePageListResponseDataItem
     */
    attributes?: HomePage;
}

/**
 * Check if a given object implements the HomePageListResponseDataItem interface.
 */
export function instanceOfHomePageListResponseDataItem(value: object): value is HomePageListResponseDataItem {
    return true;
}

export function HomePageListResponseDataItemFromJSON(json: any): HomePageListResponseDataItem {
    return HomePageListResponseDataItemFromJSONTyped(json, false);
}

export function HomePageListResponseDataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): HomePageListResponseDataItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : HomePageFromJSON(json['attributes']),
    };
}

export function HomePageListResponseDataItemToJSON(value?: HomePageListResponseDataItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': HomePageToJSON(value['attributes']),
    };
}

