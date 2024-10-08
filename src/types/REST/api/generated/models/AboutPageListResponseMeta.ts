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
import type { AboutPageListResponseMetaPagination } from './AboutPageListResponseMetaPagination';
import {
    AboutPageListResponseMetaPaginationFromJSON,
    AboutPageListResponseMetaPaginationFromJSONTyped,
    AboutPageListResponseMetaPaginationToJSON,
} from './AboutPageListResponseMetaPagination';

/**
 * 
 * @export
 * @interface AboutPageListResponseMeta
 */
export interface AboutPageListResponseMeta {
    /**
     * 
     * @type {AboutPageListResponseMetaPagination}
     * @memberof AboutPageListResponseMeta
     */
    pagination?: AboutPageListResponseMetaPagination;
}

/**
 * Check if a given object implements the AboutPageListResponseMeta interface.
 */
export function instanceOfAboutPageListResponseMeta(value: object): value is AboutPageListResponseMeta {
    return true;
}

export function AboutPageListResponseMetaFromJSON(json: any): AboutPageListResponseMeta {
    return AboutPageListResponseMetaFromJSONTyped(json, false);
}

export function AboutPageListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageListResponseMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'pagination': json['pagination'] == null ? undefined : AboutPageListResponseMetaPaginationFromJSON(json['pagination']),
    };
}

export function AboutPageListResponseMetaToJSON(value?: AboutPageListResponseMeta | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'pagination': AboutPageListResponseMetaPaginationToJSON(value['pagination']),
    };
}

