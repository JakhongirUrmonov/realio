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
import type { AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData } from './AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData';
import {
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSON,
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSONTyped,
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataToJSON,
} from './AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData';

/**
 * 
 * @export
 * @interface AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy
 */
export interface AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy {
    /**
     * 
     * @type {AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy
     */
    data?: AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByData;
}

/**
 * Check if a given object implements the AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy interface.
 */
export function instanceOfAboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy(value: object): value is AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy {
    return true;
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON(json: any): AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy {
    return AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped(json, false);
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataFromJSON(json['data']),
    };
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON(value?: AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataToJSON(value['data']),
    };
}

