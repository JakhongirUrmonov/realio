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
import type { HomeFeatureComponentImageData } from './HomeFeatureComponentImageData';
import {
    HomeFeatureComponentImageDataFromJSON,
    HomeFeatureComponentImageDataFromJSONTyped,
    HomeFeatureComponentImageDataToJSON,
} from './HomeFeatureComponentImageData';

/**
 * 
 * @export
 * @interface HomeFeatureComponentImage
 */
export interface HomeFeatureComponentImage {
    /**
     * 
     * @type {HomeFeatureComponentImageData}
     * @memberof HomeFeatureComponentImage
     */
    data?: HomeFeatureComponentImageData;
}

/**
 * Check if a given object implements the HomeFeatureComponentImage interface.
 */
export function instanceOfHomeFeatureComponentImage(value: object): value is HomeFeatureComponentImage {
    return true;
}

export function HomeFeatureComponentImageFromJSON(json: any): HomeFeatureComponentImage {
    return HomeFeatureComponentImageFromJSONTyped(json, false);
}

export function HomeFeatureComponentImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): HomeFeatureComponentImage {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : HomeFeatureComponentImageDataFromJSON(json['data']),
    };
}

export function HomeFeatureComponentImageToJSON(value?: HomeFeatureComponentImage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': HomeFeatureComponentImageDataToJSON(value['data']),
    };
}

