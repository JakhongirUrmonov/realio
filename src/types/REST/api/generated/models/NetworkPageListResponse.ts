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
import type { NetworkPageListResponseDataItem } from './NetworkPageListResponseDataItem';
import {
    NetworkPageListResponseDataItemFromJSON,
    NetworkPageListResponseDataItemFromJSONTyped,
    NetworkPageListResponseDataItemToJSON,
} from './NetworkPageListResponseDataItem';

/**
 * 
 * @export
 * @interface NetworkPageListResponse
 */
export interface NetworkPageListResponse {
    /**
     * 
     * @type {Array<NetworkPageListResponseDataItem>}
     * @memberof NetworkPageListResponse
     */
    data?: Array<NetworkPageListResponseDataItem>;
    /**
     * 
     * @type {AboutPageListResponseMeta}
     * @memberof NetworkPageListResponse
     */
    meta?: AboutPageListResponseMeta;
}

/**
 * Check if a given object implements the NetworkPageListResponse interface.
 */
export function instanceOfNetworkPageListResponse(value: object): value is NetworkPageListResponse {
    return true;
}

export function NetworkPageListResponseFromJSON(json: any): NetworkPageListResponse {
    return NetworkPageListResponseFromJSONTyped(json, false);
}

export function NetworkPageListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkPageListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(NetworkPageListResponseDataItemFromJSON)),
        'meta': json['meta'] == null ? undefined : AboutPageListResponseMetaFromJSON(json['meta']),
    };
}

export function NetworkPageListResponseToJSON(value?: NetworkPageListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(NetworkPageListResponseDataItemToJSON)),
        'meta': AboutPageListResponseMetaToJSON(value['meta']),
    };
}
