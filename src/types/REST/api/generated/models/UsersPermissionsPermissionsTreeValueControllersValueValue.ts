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
 * every action of every controller
 * @export
 * @interface UsersPermissionsPermissionsTreeValueControllersValueValue
 */
export interface UsersPermissionsPermissionsTreeValueControllersValueValue {
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsPermissionsTreeValueControllersValueValue
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsPermissionsTreeValueControllersValueValue
     */
    policy?: string;
}

/**
 * Check if a given object implements the UsersPermissionsPermissionsTreeValueControllersValueValue interface.
 */
export function instanceOfUsersPermissionsPermissionsTreeValueControllersValueValue(value: object): value is UsersPermissionsPermissionsTreeValueControllersValueValue {
    return true;
}

export function UsersPermissionsPermissionsTreeValueControllersValueValueFromJSON(json: any): UsersPermissionsPermissionsTreeValueControllersValueValue {
    return UsersPermissionsPermissionsTreeValueControllersValueValueFromJSONTyped(json, false);
}

export function UsersPermissionsPermissionsTreeValueControllersValueValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsPermissionsTreeValueControllersValueValue {
    if (json == null) {
        return json;
    }
    return {
        
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'policy': json['policy'] == null ? undefined : json['policy'],
    };
}

export function UsersPermissionsPermissionsTreeValueControllersValueValueToJSON(value?: UsersPermissionsPermissionsTreeValueControllersValueValue | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'enabled': value['enabled'],
        'policy': value['policy'],
    };
}
