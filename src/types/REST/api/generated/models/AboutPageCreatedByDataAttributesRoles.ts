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
import type { AboutPageCreatedByDataAttributesRolesDataInner } from './AboutPageCreatedByDataAttributesRolesDataInner';
import {
    AboutPageCreatedByDataAttributesRolesDataInnerFromJSON,
    AboutPageCreatedByDataAttributesRolesDataInnerFromJSONTyped,
    AboutPageCreatedByDataAttributesRolesDataInnerToJSON,
} from './AboutPageCreatedByDataAttributesRolesDataInner';

/**
 * 
 * @export
 * @interface AboutPageCreatedByDataAttributesRoles
 */
export interface AboutPageCreatedByDataAttributesRoles {
    /**
     * 
     * @type {Array<AboutPageCreatedByDataAttributesRolesDataInner>}
     * @memberof AboutPageCreatedByDataAttributesRoles
     */
    data?: Array<AboutPageCreatedByDataAttributesRolesDataInner>;
}

/**
 * Check if a given object implements the AboutPageCreatedByDataAttributesRoles interface.
 */
export function instanceOfAboutPageCreatedByDataAttributesRoles(value: object): value is AboutPageCreatedByDataAttributesRoles {
    return true;
}

export function AboutPageCreatedByDataAttributesRolesFromJSON(json: any): AboutPageCreatedByDataAttributesRoles {
    return AboutPageCreatedByDataAttributesRolesFromJSONTyped(json, false);
}

export function AboutPageCreatedByDataAttributesRolesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageCreatedByDataAttributesRoles {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AboutPageCreatedByDataAttributesRolesDataInnerFromJSON)),
    };
}

export function AboutPageCreatedByDataAttributesRolesToJSON(value?: AboutPageCreatedByDataAttributesRoles | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AboutPageCreatedByDataAttributesRolesDataInnerToJSON)),
    };
}
