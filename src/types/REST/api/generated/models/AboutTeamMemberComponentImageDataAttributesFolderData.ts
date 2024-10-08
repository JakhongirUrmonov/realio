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
import type { AboutTeamMemberComponentImageDataAttributesFolderDataAttributes } from './AboutTeamMemberComponentImageDataAttributesFolderDataAttributes';
import {
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFromJSON,
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFromJSONTyped,
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesToJSON,
} from './AboutTeamMemberComponentImageDataAttributesFolderDataAttributes';

/**
 * 
 * @export
 * @interface AboutTeamMemberComponentImageDataAttributesFolderData
 */
export interface AboutTeamMemberComponentImageDataAttributesFolderData {
    /**
     * 
     * @type {number}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderData
     */
    id?: number;
    /**
     * 
     * @type {AboutTeamMemberComponentImageDataAttributesFolderDataAttributes}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderData
     */
    attributes?: AboutTeamMemberComponentImageDataAttributesFolderDataAttributes;
}

/**
 * Check if a given object implements the AboutTeamMemberComponentImageDataAttributesFolderData interface.
 */
export function instanceOfAboutTeamMemberComponentImageDataAttributesFolderData(value: object): value is AboutTeamMemberComponentImageDataAttributesFolderData {
    return true;
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataFromJSON(json: any): AboutTeamMemberComponentImageDataAttributesFolderData {
    return AboutTeamMemberComponentImageDataAttributesFolderDataFromJSONTyped(json, false);
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutTeamMemberComponentImageDataAttributesFolderData {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFromJSON(json['attributes']),
    };
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataToJSON(value?: AboutTeamMemberComponentImageDataAttributesFolderData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': AboutTeamMemberComponentImageDataAttributesFolderDataAttributesToJSON(value['attributes']),
    };
}

