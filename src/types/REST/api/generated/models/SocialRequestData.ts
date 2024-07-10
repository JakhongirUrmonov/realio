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
import type { HeaderSocialsComponent } from './HeaderSocialsComponent';
import {
    HeaderSocialsComponentFromJSON,
    HeaderSocialsComponentFromJSONTyped,
    HeaderSocialsComponentToJSON,
} from './HeaderSocialsComponent';

/**
 * 
 * @export
 * @interface SocialRequestData
 */
export interface SocialRequestData {
    /**
     * 
     * @type {HeaderSocialsComponent}
     * @memberof SocialRequestData
     */
    socials?: HeaderSocialsComponent;
}

/**
 * Check if a given object implements the SocialRequestData interface.
 */
export function instanceOfSocialRequestData(value: object): value is SocialRequestData {
    return true;
}

export function SocialRequestDataFromJSON(json: any): SocialRequestData {
    return SocialRequestDataFromJSONTyped(json, false);
}

export function SocialRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SocialRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'socials': json['socials'] == null ? undefined : HeaderSocialsComponentFromJSON(json['socials']),
    };
}

export function SocialRequestDataToJSON(value?: SocialRequestData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'socials': HeaderSocialsComponentToJSON(value['socials']),
    };
}

