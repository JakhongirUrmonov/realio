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
import type { AboutPageListResponseMeta } from './AboutPageListResponseMeta';
import {
    AboutPageListResponseMetaFromJSON,
    AboutPageListResponseMetaFromJSONTyped,
    AboutPageListResponseMetaToJSON,
} from './AboutPageListResponseMeta';
import type { FooterListResponseDataItem } from './FooterListResponseDataItem';
import {
    FooterListResponseDataItemFromJSON,
    FooterListResponseDataItemFromJSONTyped,
    FooterListResponseDataItemToJSON,
} from './FooterListResponseDataItem';

/**
 * 
 * @export
 * @interface FooterListResponse
 */
export interface FooterListResponse {
    /**
     * 
     * @type {Array<FooterListResponseDataItem>}
     * @memberof FooterListResponse
     */
    data?: Array<FooterListResponseDataItem>;
    /**
     * 
     * @type {AboutPageListResponseMeta}
     * @memberof FooterListResponse
     */
    meta?: AboutPageListResponseMeta;
}

/**
 * Check if a given object implements the FooterListResponse interface.
 */
export function instanceOfFooterListResponse(value: object): value is FooterListResponse {
    return true;
}

export function FooterListResponseFromJSON(json: any): FooterListResponse {
    return FooterListResponseFromJSONTyped(json, false);
}

export function FooterListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FooterListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(FooterListResponseDataItemFromJSON)),
        'meta': json['meta'] == null ? undefined : AboutPageListResponseMetaFromJSON(json['meta']),
    };
}

export function FooterListResponseToJSON(value?: FooterListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(FooterListResponseDataItemToJSON)),
        'meta': AboutPageListResponseMetaToJSON(value['meta']),
    };
}

