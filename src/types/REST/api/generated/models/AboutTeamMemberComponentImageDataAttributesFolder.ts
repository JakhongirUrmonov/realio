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
import type { AboutTeamMemberComponentImageDataAttributesFolderData } from './AboutTeamMemberComponentImageDataAttributesFolderData';
import {
    AboutTeamMemberComponentImageDataAttributesFolderDataFromJSON,
    AboutTeamMemberComponentImageDataAttributesFolderDataFromJSONTyped,
    AboutTeamMemberComponentImageDataAttributesFolderDataToJSON,
} from './AboutTeamMemberComponentImageDataAttributesFolderData';

/**
 * 
 * @export
 * @interface AboutTeamMemberComponentImageDataAttributesFolder
 */
export interface AboutTeamMemberComponentImageDataAttributesFolder {
    /**
     * 
     * @type {AboutTeamMemberComponentImageDataAttributesFolderData}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolder
     */
    data?: AboutTeamMemberComponentImageDataAttributesFolderData;
}

/**
 * Check if a given object implements the AboutTeamMemberComponentImageDataAttributesFolder interface.
 */
export function instanceOfAboutTeamMemberComponentImageDataAttributesFolder(value: object): value is AboutTeamMemberComponentImageDataAttributesFolder {
    return true;
}

export function AboutTeamMemberComponentImageDataAttributesFolderFromJSON(json: any): AboutTeamMemberComponentImageDataAttributesFolder {
    return AboutTeamMemberComponentImageDataAttributesFolderFromJSONTyped(json, false);
}

export function AboutTeamMemberComponentImageDataAttributesFolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutTeamMemberComponentImageDataAttributesFolder {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AboutTeamMemberComponentImageDataAttributesFolderDataFromJSON(json['data']),
    };
}

export function AboutTeamMemberComponentImageDataAttributesFolderToJSON(value?: AboutTeamMemberComponentImageDataAttributesFolder | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': AboutTeamMemberComponentImageDataAttributesFolderDataToJSON(value['data']),
    };
}

