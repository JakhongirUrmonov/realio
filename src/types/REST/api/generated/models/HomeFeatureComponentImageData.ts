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
import type { HomeFeatureComponentImageDataAttributes } from './HomeFeatureComponentImageDataAttributes';
import {
    HomeFeatureComponentImageDataAttributesFromJSON,
    HomeFeatureComponentImageDataAttributesFromJSONTyped,
    HomeFeatureComponentImageDataAttributesToJSON,
} from './HomeFeatureComponentImageDataAttributes';

/**
 * 
 * @export
 * @interface HomeFeatureComponentImageData
 */
export interface HomeFeatureComponentImageData {
    /**
     * 
     * @type {number}
     * @memberof HomeFeatureComponentImageData
     */
    id?: number;
    /**
     * 
     * @type {HomeFeatureComponentImageDataAttributes}
     * @memberof HomeFeatureComponentImageData
     */
    attributes?: HomeFeatureComponentImageDataAttributes;
}

/**
 * Check if a given object implements the HomeFeatureComponentImageData interface.
 */
export function instanceOfHomeFeatureComponentImageData(value: object): value is HomeFeatureComponentImageData {
    return true;
}

export function HomeFeatureComponentImageDataFromJSON(json: any): HomeFeatureComponentImageData {
    return HomeFeatureComponentImageDataFromJSONTyped(json, false);
}

export function HomeFeatureComponentImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HomeFeatureComponentImageData {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : HomeFeatureComponentImageDataAttributesFromJSON(json['attributes']),
    };
}

export function HomeFeatureComponentImageDataToJSON(value?: HomeFeatureComponentImageData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': HomeFeatureComponentImageDataAttributesToJSON(value['attributes']),
    };
}
