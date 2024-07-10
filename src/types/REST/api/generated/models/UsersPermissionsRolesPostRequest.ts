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
import type { UsersPermissionsPermissionsTreeValue } from './UsersPermissionsPermissionsTreeValue';
import {
    UsersPermissionsPermissionsTreeValueFromJSON,
    UsersPermissionsPermissionsTreeValueFromJSONTyped,
    UsersPermissionsPermissionsTreeValueToJSON,
} from './UsersPermissionsPermissionsTreeValue';

/**
 * 
 * @export
 * @interface UsersPermissionsRolesPostRequest
 */
export interface UsersPermissionsRolesPostRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRolesPostRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRolesPostRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRolesPostRequest
     */
    type?: string;
    /**
     * 
     * @type {{ [key: string]: UsersPermissionsPermissionsTreeValue; }}
     * @memberof UsersPermissionsRolesPostRequest
     */
    permissions?: { [key: string]: UsersPermissionsPermissionsTreeValue; };
}

/**
 * Check if a given object implements the UsersPermissionsRolesPostRequest interface.
 */
export function instanceOfUsersPermissionsRolesPostRequest(value: object): value is UsersPermissionsRolesPostRequest {
    return true;
}

export function UsersPermissionsRolesPostRequestFromJSON(json: any): UsersPermissionsRolesPostRequest {
    return UsersPermissionsRolesPostRequestFromJSONTyped(json, false);
}

export function UsersPermissionsRolesPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsRolesPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'] == null ? undefined : json['type'],
        'permissions': json['permissions'] == null ? undefined : (mapValues(json['permissions'], UsersPermissionsPermissionsTreeValueFromJSON)),
    };
}

export function UsersPermissionsRolesPostRequestToJSON(value?: UsersPermissionsRolesPostRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'type': value['type'],
        'permissions': value['permissions'] == null ? undefined : (mapValues(value['permissions'], UsersPermissionsPermissionsTreeValueToJSON)),
    };
}
