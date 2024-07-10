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
import type { AboutPageCreatedBy } from './AboutPageCreatedBy';
import {
    AboutPageCreatedByFromJSON,
    AboutPageCreatedByFromJSONTyped,
    AboutPageCreatedByToJSON,
} from './AboutPageCreatedBy';
import type { AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFiles } from './AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFiles';
import {
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesFromJSON,
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesFromJSONTyped,
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesToJSON,
} from './AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFiles';
import type { AboutTeamMemberComponentImageDataAttributesRelated } from './AboutTeamMemberComponentImageDataAttributesRelated';
import {
    AboutTeamMemberComponentImageDataAttributesRelatedFromJSON,
    AboutTeamMemberComponentImageDataAttributesRelatedFromJSONTyped,
    AboutTeamMemberComponentImageDataAttributesRelatedToJSON,
} from './AboutTeamMemberComponentImageDataAttributesRelated';

/**
 * 
 * @export
 * @interface AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
 */
export interface AboutTeamMemberComponentImageDataAttributesFolderDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    pathId?: number;
    /**
     * 
     * @type {AboutPageCreatedBy}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    parent?: AboutPageCreatedBy;
    /**
     * 
     * @type {AboutTeamMemberComponentImageDataAttributesRelated}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    children?: AboutTeamMemberComponentImageDataAttributesRelated;
    /**
     * 
     * @type {AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFiles}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    files?: AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFiles;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    path?: string;
    /**
     * 
     * @type {Date}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutPageCreatedBy}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    createdBy?: AboutPageCreatedBy;
    /**
     * 
     * @type {AboutPageCreatedBy}
     * @memberof AboutTeamMemberComponentImageDataAttributesFolderDataAttributes
     */
    updatedBy?: AboutPageCreatedBy;
}

/**
 * Check if a given object implements the AboutTeamMemberComponentImageDataAttributesFolderDataAttributes interface.
 */
export function instanceOfAboutTeamMemberComponentImageDataAttributesFolderDataAttributes(value: object): value is AboutTeamMemberComponentImageDataAttributesFolderDataAttributes {
    return true;
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFromJSON(json: any): AboutTeamMemberComponentImageDataAttributesFolderDataAttributes {
    return AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFromJSONTyped(json, false);
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutTeamMemberComponentImageDataAttributesFolderDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'pathId': json['pathId'] == null ? undefined : json['pathId'],
        'parent': json['parent'] == null ? undefined : AboutPageCreatedByFromJSON(json['parent']),
        'children': json['children'] == null ? undefined : AboutTeamMemberComponentImageDataAttributesRelatedFromJSON(json['children']),
        'files': json['files'] == null ? undefined : AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesFromJSON(json['files']),
        'path': json['path'] == null ? undefined : json['path'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : AboutPageCreatedByFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : AboutPageCreatedByFromJSON(json['updatedBy']),
    };
}

export function AboutTeamMemberComponentImageDataAttributesFolderDataAttributesToJSON(value?: AboutTeamMemberComponentImageDataAttributesFolderDataAttributes | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'pathId': value['pathId'],
        'parent': AboutPageCreatedByToJSON(value['parent']),
        'children': AboutTeamMemberComponentImageDataAttributesRelatedToJSON(value['children']),
        'files': AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesToJSON(value['files']),
        'path': value['path'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'createdBy': AboutPageCreatedByToJSON(value['createdBy']),
        'updatedBy': AboutPageCreatedByToJSON(value['updatedBy']),
    };
}
