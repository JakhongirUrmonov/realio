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
import type { AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner } from './AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner';
import {
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerFromJSON,
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerFromJSONTyped,
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerToJSON,
} from './AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner';

/**
 * 
 * @export
 * @interface AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers
 */
export interface AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers {
    /**
     * 
     * @type {Array<AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner>}
     * @memberof AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers
     */
    data?: Array<AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner>;
}

/**
 * Check if a given object implements the AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers interface.
 */
export function instanceOfAboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers(value: object): value is AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers {
    return true;
}

export function AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersFromJSON(json: any): AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers {
    return AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersFromJSONTyped(json, false);
}

export function AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerFromJSON)),
    };
}

export function AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersToJSON(value?: AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsers | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerToJSON)),
    };
}

