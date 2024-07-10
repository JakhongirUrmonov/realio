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
import type { HeaderSocialsComponent } from './HeaderSocialsComponent';
import {
    HeaderSocialsComponentFromJSON,
    HeaderSocialsComponentFromJSONTyped,
    HeaderSocialsComponentToJSON,
} from './HeaderSocialsComponent';
import type { AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy } from './AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';
import {
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON,
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSONTyped,
    AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON,
} from './AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy';

/**
 * 
 * @export
 * @interface Social
 */
export interface Social {
    /**
     * 
     * @type {HeaderSocialsComponent}
     * @memberof Social
     */
    socials?: HeaderSocialsComponent;
    /**
     * 
     * @type {Date}
     * @memberof Social
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Social
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Social
     */
    publishedAt?: Date;
    /**
     * 
     * @type {AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy}
     * @memberof Social
     */
    createdBy?: AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedBy;
    /**
     * 
     * @type {AboutPageCreatedBy}
     * @memberof Social
     */
    updatedBy?: AboutPageCreatedBy;
}

/**
 * Check if a given object implements the Social interface.
 */
export function instanceOfSocial(value: object): value is Social {
    return true;
}

export function SocialFromJSON(json: any): Social {
    return SocialFromJSONTyped(json, false);
}

export function SocialFromJSONTyped(json: any, ignoreDiscriminator: boolean): Social {
    if (json == null) {
        return json;
    }
    return {
        
        'socials': json['socials'] == null ? undefined : HeaderSocialsComponentFromJSON(json['socials']),
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'publishedAt': json['publishedAt'] == null ? undefined : (new Date(json['publishedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : AboutPageCreatedByFromJSON(json['updatedBy']),
    };
}

export function SocialToJSON(value?: Social | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'socials': HeaderSocialsComponentToJSON(value['socials']),
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'publishedAt': value['publishedAt'] == null ? undefined : ((value['publishedAt']).toISOString()),
        'createdBy': AboutTeamMemberComponentImageDataAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByToJSON(value['createdBy']),
        'updatedBy': AboutPageCreatedByToJSON(value['updatedBy']),
    };
}

