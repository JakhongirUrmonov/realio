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
import type { AboutTeamMemberComponentImageDataAttributesRelated } from './AboutTeamMemberComponentImageDataAttributesRelated';
import {
    AboutTeamMemberComponentImageDataAttributesRelatedFromJSON,
    AboutTeamMemberComponentImageDataAttributesRelatedFromJSONTyped,
    AboutTeamMemberComponentImageDataAttributesRelatedToJSON,
} from './AboutTeamMemberComponentImageDataAttributesRelated';
import type { AboutTeamMemberComponentImageDataAttributesFolder } from './AboutTeamMemberComponentImageDataAttributesFolder';
import {
    AboutTeamMemberComponentImageDataAttributesFolderFromJSON,
    AboutTeamMemberComponentImageDataAttributesFolderFromJSONTyped,
    AboutTeamMemberComponentImageDataAttributesFolderToJSON,
} from './AboutTeamMemberComponentImageDataAttributesFolder';

/**
 * 
 * @export
 * @interface AboutTeamMemberComponentImageDataAttributes
 */
export interface AboutTeamMemberComponentImageDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    alternativeText?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    caption?: string;
    /**
     * 
     * @type {number}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    height?: number;
    /**
     * 
     * @type {any}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    formats?: any;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    ext?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    mime?: string;
    /**
     * 
     * @type {number}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    previewUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    provider?: string;
    /**
     * 
     * @type {any}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    providerMetadata?: any;
    /**
     * 
     * @type {AboutTeamMemberComponentImageDataAttributesRelated}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    related?: AboutTeamMemberComponentImageDataAttributesRelated;
    /**
     * 
     * @type {AboutTeamMemberComponentImageDataAttributesFolder}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    folder?: AboutTeamMemberComponentImageDataAttributesFolder;
    /**
     * 
     * @type {string}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    folderPath?: string;
    /**
     * 
     * @type {Date}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutPageCreatedBy}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    createdBy?: AboutPageCreatedBy;
    /**
     * 
     * @type {AboutPageCreatedBy}
     * @memberof AboutTeamMemberComponentImageDataAttributes
     */
    updatedBy?: AboutPageCreatedBy;
}

/**
 * Check if a given object implements the AboutTeamMemberComponentImageDataAttributes interface.
 */
export function instanceOfAboutTeamMemberComponentImageDataAttributes(value: object): value is AboutTeamMemberComponentImageDataAttributes {
    return true;
}

export function AboutTeamMemberComponentImageDataAttributesFromJSON(json: any): AboutTeamMemberComponentImageDataAttributes {
    return AboutTeamMemberComponentImageDataAttributesFromJSONTyped(json, false);
}

export function AboutTeamMemberComponentImageDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutTeamMemberComponentImageDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'alternativeText': json['alternativeText'] == null ? undefined : json['alternativeText'],
        'caption': json['caption'] == null ? undefined : json['caption'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
        'formats': json['formats'] == null ? undefined : json['formats'],
        'hash': json['hash'] == null ? undefined : json['hash'],
        'ext': json['ext'] == null ? undefined : json['ext'],
        'mime': json['mime'] == null ? undefined : json['mime'],
        'size': json['size'] == null ? undefined : json['size'],
        'url': json['url'] == null ? undefined : json['url'],
        'previewUrl': json['previewUrl'] == null ? undefined : json['previewUrl'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'providerMetadata': json['provider_metadata'] == null ? undefined : json['provider_metadata'],
        'related': json['related'] == null ? undefined : AboutTeamMemberComponentImageDataAttributesRelatedFromJSON(json['related']),
        'folder': json['folder'] == null ? undefined : AboutTeamMemberComponentImageDataAttributesFolderFromJSON(json['folder']),
        'folderPath': json['folderPath'] == null ? undefined : json['folderPath'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : AboutPageCreatedByFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : AboutPageCreatedByFromJSON(json['updatedBy']),
    };
}

export function AboutTeamMemberComponentImageDataAttributesToJSON(value?: AboutTeamMemberComponentImageDataAttributes | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'alternativeText': value['alternativeText'],
        'caption': value['caption'],
        'width': value['width'],
        'height': value['height'],
        'formats': value['formats'],
        'hash': value['hash'],
        'ext': value['ext'],
        'mime': value['mime'],
        'size': value['size'],
        'url': value['url'],
        'previewUrl': value['previewUrl'],
        'provider': value['provider'],
        'provider_metadata': value['providerMetadata'],
        'related': AboutTeamMemberComponentImageDataAttributesRelatedToJSON(value['related']),
        'folder': AboutTeamMemberComponentImageDataAttributesFolderToJSON(value['folder']),
        'folderPath': value['folderPath'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'createdBy': AboutPageCreatedByToJSON(value['createdBy']),
        'updatedBy': AboutPageCreatedByToJSON(value['updatedBy']),
    };
}

