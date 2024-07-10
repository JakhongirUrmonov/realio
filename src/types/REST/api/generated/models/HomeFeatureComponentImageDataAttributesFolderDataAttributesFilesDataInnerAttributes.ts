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
import type { AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole } from './AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole';
import {
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON,
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSONTyped,
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON,
} from './AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole';
import type { AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers } from './AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers';
import {
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersFromJSON,
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersFromJSONTyped,
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersToJSON,
} from './AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers';

/**
 * 
 * @export
 * @interface HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
 */
export interface HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes {
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    alternativeText?: string;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    caption?: string;
    /**
     * 
     * @type {number}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    height?: number;
    /**
     * 
     * @type {any}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    formats?: any;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    ext?: string;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    mime?: string;
    /**
     * 
     * @type {number}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    previewUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    provider?: string;
    /**
     * 
     * @type {any}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    providerMetadata?: any;
    /**
     * 
     * @type {AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    related?: AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers;
    /**
     * 
     * @type {AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    folder?: AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
    /**
     * 
     * @type {string}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    folderPath?: string;
    /**
     * 
     * @type {Date}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutPageCreatedBy}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    createdBy?: AboutPageCreatedBy;
    /**
     * 
     * @type {AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes
     */
    updatedBy?: AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
}

/**
 * Check if a given object implements the HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes interface.
 */
export function instanceOfHomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes(value: object): value is HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes {
    return true;
}

export function HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesFromJSON(json: any): HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes {
    return HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesFromJSONTyped(json, false);
}

export function HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes {
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
        'related': json['related'] == null ? undefined : AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersFromJSON(json['related']),
        'folder': json['folder'] == null ? undefined : AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON(json['folder']),
        'folderPath': json['folderPath'] == null ? undefined : json['folderPath'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : AboutPageCreatedByFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON(json['updatedBy']),
    };
}

export function HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesToJSON(value?: HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributes | null): any {
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
        'related': AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersToJSON(value['related']),
        'folder': AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON(value['folder']),
        'folderPath': value['folderPath'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'createdBy': AboutPageCreatedByToJSON(value['createdBy']),
        'updatedBy': AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON(value['updatedBy']),
    };
}
