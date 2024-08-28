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
 * @interface BlogRichtextComponent
 */
export interface BlogRichtextComponent {
    /**
     * 
     * @type {number}
     * @memberof BlogRichtextComponent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BlogRichtextComponent
     */
    component?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogRichtextComponent
     */
    rich?: string;
}

/**
 * Check if a given object implements the BlogRichtextComponent interface.
 */
export function instanceOfBlogRichtextComponent(value: object): value is BlogRichtextComponent {
    return true;
}

export function BlogRichtextComponentFromJSON(json: any): BlogRichtextComponent {
    return BlogRichtextComponentFromJSONTyped(json, false);
}

export function BlogRichtextComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogRichtextComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'component': json['__component'] == null ? undefined : json['__component'],
        'rich': json['rich'] == null ? undefined : json['rich'],
    };
}

export function BlogRichtextComponentToJSON(value?: BlogRichtextComponent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        '__component': value['component'],
        'rich': value['rich'],
    };
}

