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
import type { AboutTeamMemberComponentImage } from './AboutTeamMemberComponentImage';
import {
    AboutTeamMemberComponentImageFromJSON,
    AboutTeamMemberComponentImageFromJSONTyped,
    AboutTeamMemberComponentImageToJSON,
} from './AboutTeamMemberComponentImage';

/**
 * 
 * @export
 * @interface NetworkSourceComponent
 */
export interface NetworkSourceComponent {
    /**
     * 
     * @type {number}
     * @memberof NetworkSourceComponent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof NetworkSourceComponent
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworkSourceComponent
     */
    description?: string;
    /**
     * 
     * @type {AboutTeamMemberComponentImage}
     * @memberof NetworkSourceComponent
     */
    image?: AboutTeamMemberComponentImage;
    /**
     * 
     * @type {string}
     * @memberof NetworkSourceComponent
     */
    link?: string;
}

/**
 * Check if a given object implements the NetworkSourceComponent interface.
 */
export function instanceOfNetworkSourceComponent(value: object): value is NetworkSourceComponent {
    return true;
}

export function NetworkSourceComponentFromJSON(json: any): NetworkSourceComponent {
    return NetworkSourceComponentFromJSONTyped(json, false);
}

export function NetworkSourceComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkSourceComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'image': json['image'] == null ? undefined : AboutTeamMemberComponentImageFromJSON(json['image']),
        'link': json['link'] == null ? undefined : json['link'],
    };
}

export function NetworkSourceComponentToJSON(value?: NetworkSourceComponent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'description': value['description'],
        'image': AboutTeamMemberComponentImageToJSON(value['image']),
        'link': value['link'],
    };
}

