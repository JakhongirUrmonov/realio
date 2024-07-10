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
import type { AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole } from './AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole';
import {
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON,
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSONTyped,
    AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON,
} from './AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole';
import type { AboutPageCreatedByDataAttributesRoles } from './AboutPageCreatedByDataAttributesRoles';
import {
    AboutPageCreatedByDataAttributesRolesFromJSON,
    AboutPageCreatedByDataAttributesRolesFromJSONTyped,
    AboutPageCreatedByDataAttributesRolesToJSON,
} from './AboutPageCreatedByDataAttributesRoles';

/**
 * 
 * @export
 * @interface AboutPageCreatedByDataAttributes
 */
export interface AboutPageCreatedByDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AboutPageCreatedByDataAttributes
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutPageCreatedByDataAttributes
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutPageCreatedByDataAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutPageCreatedByDataAttributes
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutPageCreatedByDataAttributes
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AboutPageCreatedByDataAttributes
     */
    registrationToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AboutPageCreatedByDataAttributes
     */
    isActive?: boolean;
    /**
     * 
     * @type {AboutPageCreatedByDataAttributesRoles}
     * @memberof AboutPageCreatedByDataAttributes
     */
    roles?: AboutPageCreatedByDataAttributesRoles;
    /**
     * 
     * @type {boolean}
     * @memberof AboutPageCreatedByDataAttributes
     */
    blocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AboutPageCreatedByDataAttributes
     */
    preferedLanguage?: string;
    /**
     * 
     * @type {Date}
     * @memberof AboutPageCreatedByDataAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AboutPageCreatedByDataAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
     * @memberof AboutPageCreatedByDataAttributes
     */
    createdBy?: AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
    /**
     * 
     * @type {AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole}
     * @memberof AboutPageCreatedByDataAttributes
     */
    updatedBy?: AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRole;
}

/**
 * Check if a given object implements the AboutPageCreatedByDataAttributes interface.
 */
export function instanceOfAboutPageCreatedByDataAttributes(value: object): value is AboutPageCreatedByDataAttributes {
    return true;
}

export function AboutPageCreatedByDataAttributesFromJSON(json: any): AboutPageCreatedByDataAttributes {
    return AboutPageCreatedByDataAttributesFromJSONTyped(json, false);
}

export function AboutPageCreatedByDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageCreatedByDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'firstname': json['firstname'] == null ? undefined : json['firstname'],
        'lastname': json['lastname'] == null ? undefined : json['lastname'],
        'username': json['username'] == null ? undefined : json['username'],
        'email': json['email'] == null ? undefined : json['email'],
        'resetPasswordToken': json['resetPasswordToken'] == null ? undefined : json['resetPasswordToken'],
        'registrationToken': json['registrationToken'] == null ? undefined : json['registrationToken'],
        'isActive': json['isActive'] == null ? undefined : json['isActive'],
        'roles': json['roles'] == null ? undefined : AboutPageCreatedByDataAttributesRolesFromJSON(json['roles']),
        'blocked': json['blocked'] == null ? undefined : json['blocked'],
        'preferedLanguage': json['preferedLanguage'] == null ? undefined : json['preferedLanguage'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleFromJSON(json['updatedBy']),
    };
}

export function AboutPageCreatedByDataAttributesToJSON(value?: AboutPageCreatedByDataAttributes | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'firstname': value['firstname'],
        'lastname': value['lastname'],
        'username': value['username'],
        'email': value['email'],
        'resetPasswordToken': value['resetPasswordToken'],
        'registrationToken': value['registrationToken'],
        'isActive': value['isActive'],
        'roles': AboutPageCreatedByDataAttributesRolesToJSON(value['roles']),
        'blocked': value['blocked'],
        'preferedLanguage': value['preferedLanguage'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'createdBy': AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON(value['createdBy']),
        'updatedBy': AboutPageCreatedByDataAttributesRolesDataInnerAttributesPermissionsDataInnerAttributesRoleToJSON(value['updatedBy']),
    };
}
