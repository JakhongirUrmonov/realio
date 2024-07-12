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
import type { OtherSeoComponentMetaSocialsInnerImageDataAttributes } from './OtherSeoComponentMetaSocialsInnerImageDataAttributes';
import {
    OtherSeoComponentMetaSocialsInnerImageDataAttributesFromJSON,
    OtherSeoComponentMetaSocialsInnerImageDataAttributesFromJSONTyped,
    OtherSeoComponentMetaSocialsInnerImageDataAttributesToJSON,
} from './OtherSeoComponentMetaSocialsInnerImageDataAttributes';

/**
 * 
 * @export
 * @interface OtherSeoComponentMetaSocialsInnerImageData
 */
export interface OtherSeoComponentMetaSocialsInnerImageData {
    /**
     * 
     * @type {number}
     * @memberof OtherSeoComponentMetaSocialsInnerImageData
     */
    id?: number;
    /**
     * 
     * @type {OtherSeoComponentMetaSocialsInnerImageDataAttributes}
     * @memberof OtherSeoComponentMetaSocialsInnerImageData
     */
    attributes?: OtherSeoComponentMetaSocialsInnerImageDataAttributes;
}

/**
 * Check if a given object implements the OtherSeoComponentMetaSocialsInnerImageData interface.
 */
export function instanceOfOtherSeoComponentMetaSocialsInnerImageData(value: object): value is OtherSeoComponentMetaSocialsInnerImageData {
    return true;
}

export function OtherSeoComponentMetaSocialsInnerImageDataFromJSON(json: any): OtherSeoComponentMetaSocialsInnerImageData {
    return OtherSeoComponentMetaSocialsInnerImageDataFromJSONTyped(json, false);
}

export function OtherSeoComponentMetaSocialsInnerImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): OtherSeoComponentMetaSocialsInnerImageData {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : OtherSeoComponentMetaSocialsInnerImageDataAttributesFromJSON(json['attributes']),
    };
}

export function OtherSeoComponentMetaSocialsInnerImageDataToJSON(value?: OtherSeoComponentMetaSocialsInnerImageData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': OtherSeoComponentMetaSocialsInnerImageDataAttributesToJSON(value['attributes']),
    };
}

