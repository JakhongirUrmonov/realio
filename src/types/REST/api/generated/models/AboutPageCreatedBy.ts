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
import type { AboutPageCreatedByData } from './AboutPageCreatedByData';
import {
    AboutPageCreatedByDataFromJSON,
    AboutPageCreatedByDataFromJSONTyped,
    AboutPageCreatedByDataToJSON,
} from './AboutPageCreatedByData';

/**
 * 
 * @export
 * @interface AboutPageCreatedBy
 */
export interface AboutPageCreatedBy {
    /**
     * 
     * @type {AboutPageCreatedByData}
     * @memberof AboutPageCreatedBy
     */
    data?: AboutPageCreatedByData;
}

/**
 * Check if a given object implements the AboutPageCreatedBy interface.
 */
export function instanceOfAboutPageCreatedBy(value: object): value is AboutPageCreatedBy {
    return true;
}

export function AboutPageCreatedByFromJSON(json: any): AboutPageCreatedBy {
    return AboutPageCreatedByFromJSONTyped(json, false);
}

export function AboutPageCreatedByFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageCreatedBy {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AboutPageCreatedByDataFromJSON(json['data']),
    };
}

export function AboutPageCreatedByToJSON(value?: AboutPageCreatedBy | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': AboutPageCreatedByDataToJSON(value['data']),
    };
}

