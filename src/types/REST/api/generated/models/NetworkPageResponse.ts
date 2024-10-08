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
import type { NetworkPageResponseDataObject } from './NetworkPageResponseDataObject';
import {
    NetworkPageResponseDataObjectFromJSON,
    NetworkPageResponseDataObjectFromJSONTyped,
    NetworkPageResponseDataObjectToJSON,
} from './NetworkPageResponseDataObject';

/**
 * 
 * @export
 * @interface NetworkPageResponse
 */
export interface NetworkPageResponse {
    /**
     * 
     * @type {NetworkPageResponseDataObject}
     * @memberof NetworkPageResponse
     */
    data?: NetworkPageResponseDataObject;
    /**
     * 
     * @type {object}
     * @memberof NetworkPageResponse
     */
    meta?: object;
}

/**
 * Check if a given object implements the NetworkPageResponse interface.
 */
export function instanceOfNetworkPageResponse(value: object): value is NetworkPageResponse {
    return true;
}

export function NetworkPageResponseFromJSON(json: any): NetworkPageResponse {
    return NetworkPageResponseFromJSONTyped(json, false);
}

export function NetworkPageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkPageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : NetworkPageResponseDataObjectFromJSON(json['data']),
        'meta': json['meta'] == null ? undefined : json['meta'],
    };
}

export function NetworkPageResponseToJSON(value?: NetworkPageResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': NetworkPageResponseDataObjectToJSON(value['data']),
        'meta': value['meta'],
    };
}

