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
 * @interface AboutPageResponseDataObject
 */
export interface AboutPageResponseDataObject {
    /**
     * 
     * @type {number}
     * @memberof AboutPageResponseDataObject
     */
    id?: number;
    /**
     * 
     * @type {AboutPage}
     * @memberof AboutPageResponseDataObject
     */
    attributes?: AboutPage;
}

/**
 * Check if a given object implements the AboutPageResponseDataObject interface.
 */
export function instanceOfAboutPageResponseDataObject(value: object): value is AboutPageResponseDataObject {
    return true;
}

export function AboutPageResponseDataObjectFromJSON(json: any): AboutPageResponseDataObject {
    return AboutPageResponseDataObjectFromJSONTyped(json, false);
}

export function AboutPageResponseDataObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageResponseDataObject {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : AboutPageFromJSON(json['attributes']),
    };
}

export function AboutPageResponseDataObjectToJSON(value?: AboutPageResponseDataObject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': AboutPageToJSON(value['attributes']),
    };
}

