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
 * @interface UsersPermissionsUser
 */
export interface UsersPermissionsUser {
    /**
     * 
     * @type {number}
     * @memberof UsersPermissionsUser
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUser
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUser
     */
    provider?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUser
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUser
     */
    blocked?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsUser
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsUser
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the UsersPermissionsUser interface.
 */
export function instanceOfUsersPermissionsUser(value: object): value is UsersPermissionsUser {
    return true;
}

export function UsersPermissionsUserFromJSON(json: any): UsersPermissionsUser {
    return UsersPermissionsUserFromJSONTyped(json, false);
}

export function UsersPermissionsUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsUser {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'username': json['username'] == null ? undefined : json['username'],
        'email': json['email'] == null ? undefined : json['email'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'confirmed': json['confirmed'] == null ? undefined : json['confirmed'],
        'blocked': json['blocked'] == null ? undefined : json['blocked'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
    };
}

export function UsersPermissionsUserToJSON(value?: UsersPermissionsUser | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'username': value['username'],
        'email': value['email'],
        'provider': value['provider'],
        'confirmed': value['confirmed'],
        'blocked': value['blocked'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}
