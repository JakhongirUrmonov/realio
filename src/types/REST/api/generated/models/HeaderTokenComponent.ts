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
import type { OtherSeoComponentMetaSocialsInnerImage } from './OtherSeoComponentMetaSocialsInnerImage';
import {
    OtherSeoComponentMetaSocialsInnerImageFromJSON,
    OtherSeoComponentMetaSocialsInnerImageFromJSONTyped,
    OtherSeoComponentMetaSocialsInnerImageToJSON,
} from './OtherSeoComponentMetaSocialsInnerImage';

/**
 * 
 * @export
 * @interface HeaderTokenComponent
 */
export interface HeaderTokenComponent {
    /**
     * 
     * @type {number}
     * @memberof HeaderTokenComponent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof HeaderTokenComponent
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof HeaderTokenComponent
     */
    description?: string;
    /**
     * 
     * @type {OtherSeoComponentMetaSocialsInnerImage}
     * @memberof HeaderTokenComponent
     */
    icon?: OtherSeoComponentMetaSocialsInnerImage;
    /**
     * 
     * @type {string}
     * @memberof HeaderTokenComponent
     */
    link?: string;
}

/**
 * Check if a given object implements the HeaderTokenComponent interface.
 */
export function instanceOfHeaderTokenComponent(value: object): value is HeaderTokenComponent {
    return true;
}

export function HeaderTokenComponentFromJSON(json: any): HeaderTokenComponent {
    return HeaderTokenComponentFromJSONTyped(json, false);
}

export function HeaderTokenComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderTokenComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'icon': json['icon'] == null ? undefined : OtherSeoComponentMetaSocialsInnerImageFromJSON(json['icon']),
        'link': json['link'] == null ? undefined : json['link'],
    };
}

export function HeaderTokenComponentToJSON(value?: HeaderTokenComponent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'description': value['description'],
        'icon': OtherSeoComponentMetaSocialsInnerImageToJSON(value['icon']),
        'link': value['link'],
    };
}

