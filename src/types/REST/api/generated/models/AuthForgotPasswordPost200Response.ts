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
 * @interface AuthForgotPasswordPost200Response
 */
export interface AuthForgotPasswordPost200Response {
    /**
     * 
     * @type {string}
     * @memberof AuthForgotPasswordPost200Response
     */
    ok?: AuthForgotPasswordPost200ResponseOkEnum;
}


/**
 * @export
 */
export const AuthForgotPasswordPost200ResponseOkEnum = {
    True: 'true'
} as const;
export type AuthForgotPasswordPost200ResponseOkEnum = typeof AuthForgotPasswordPost200ResponseOkEnum[keyof typeof AuthForgotPasswordPost200ResponseOkEnum];


/**
 * Check if a given object implements the AuthForgotPasswordPost200Response interface.
 */
export function instanceOfAuthForgotPasswordPost200Response(value: object): value is AuthForgotPasswordPost200Response {
    return true;
}

export function AuthForgotPasswordPost200ResponseFromJSON(json: any): AuthForgotPasswordPost200Response {
    return AuthForgotPasswordPost200ResponseFromJSONTyped(json, false);
}

export function AuthForgotPasswordPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthForgotPasswordPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'ok': json['ok'] == null ? undefined : json['ok'],
    };
}

export function AuthForgotPasswordPost200ResponseToJSON(value?: AuthForgotPasswordPost200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ok': value['ok'],
    };
}

