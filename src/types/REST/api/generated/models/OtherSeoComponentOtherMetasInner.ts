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
/**
 * 
 * @export
 * @interface OtherSeoComponentOtherMetasInner
 */
export interface OtherSeoComponentOtherMetasInner {
    /**
     * 
     * @type {number}
     * @memberof OtherSeoComponentOtherMetasInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof OtherSeoComponentOtherMetasInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OtherSeoComponentOtherMetasInner
     */
    content?: string;
}

/**
 * Check if a given object implements the OtherSeoComponentOtherMetasInner interface.
 */
export function instanceOfOtherSeoComponentOtherMetasInner(value: object): value is OtherSeoComponentOtherMetasInner {
    return true;
}

export function OtherSeoComponentOtherMetasInnerFromJSON(json: any): OtherSeoComponentOtherMetasInner {
    return OtherSeoComponentOtherMetasInnerFromJSONTyped(json, false);
}

export function OtherSeoComponentOtherMetasInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OtherSeoComponentOtherMetasInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'content': json['content'] == null ? undefined : json['content'],
    };
}

export function OtherSeoComponentOtherMetasInnerToJSON(value?: OtherSeoComponentOtherMetasInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'content': value['content'],
    };
}

