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
/**
 * 
 * @export
 * @interface AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner
 */
export interface AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner {
    /**
     * 
     * @type {number}
     * @memberof AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner
     */
    id?: number;
    /**
     * 
     * @type {object}
     * @memberof AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner
     */
    attributes?: object;
}

/**
 * Check if a given object implements the AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner interface.
 */
export function instanceOfAboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner(value: object): value is AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner {
    return true;
}

export function AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerFromJSON(json: any): AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner {
    return AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerFromJSONTyped(json, false);
}

export function AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : json['attributes'],
    };
}

export function AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInnerToJSON(value?: AboutPageCreatedByDataAttributesRolesDataInnerAttributesUsersDataInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': value['attributes'],
    };
}

