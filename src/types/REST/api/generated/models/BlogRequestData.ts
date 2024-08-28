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
import type { BlogRequestDataThumbnail } from './BlogRequestDataThumbnail';
import {
    BlogRequestDataThumbnailFromJSON,
    BlogRequestDataThumbnailFromJSONTyped,
    BlogRequestDataThumbnailToJSON,
} from './BlogRequestDataThumbnail';
import type { BlogRequestDataDynamicZoneInner } from './BlogRequestDataDynamicZoneInner';
import {
    BlogRequestDataDynamicZoneInnerFromJSON,
    BlogRequestDataDynamicZoneInnerFromJSONTyped,
    BlogRequestDataDynamicZoneInnerToJSON,
} from './BlogRequestDataDynamicZoneInner';

/**
 * 
 * @export
 * @interface BlogRequestData
 */
export interface BlogRequestData {
    /**
     * 
     * @type {string}
     * @memberof BlogRequestData
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof BlogRequestData
     */
    subtitle?: string;
    /**
     * 
     * @type {Array<BlogRequestDataDynamicZoneInner>}
     * @memberof BlogRequestData
     */
    dynamicZone?: Array<BlogRequestDataDynamicZoneInner>;
    /**
     * 
     * @type {BlogRequestDataThumbnail}
     * @memberof BlogRequestData
     */
    thumbnail: BlogRequestDataThumbnail;
    /**
     * 
     * @type {Date}
     * @memberof BlogRequestData
     */
    createdDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof BlogRequestData
     */
    slug: string;
}

/**
 * Check if a given object implements the BlogRequestData interface.
 */
export function instanceOfBlogRequestData(value: object): value is BlogRequestData {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('thumbnail' in value) || value['thumbnail'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    return true;
}

export function BlogRequestDataFromJSON(json: any): BlogRequestData {
    return BlogRequestDataFromJSONTyped(json, false);
}

export function BlogRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'subtitle': json['subtitle'] == null ? undefined : json['subtitle'],
        'dynamicZone': json['dynamicZone'] == null ? undefined : ((json['dynamicZone'] as Array<any>).map(BlogRequestDataDynamicZoneInnerFromJSON)),
        'thumbnail': BlogRequestDataThumbnailFromJSON(json['thumbnail']),
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'slug': json['slug'],
    };
}

export function BlogRequestDataToJSON(value?: BlogRequestData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'subtitle': value['subtitle'],
        'dynamicZone': value['dynamicZone'] == null ? undefined : ((value['dynamicZone'] as Array<any>).map(BlogRequestDataDynamicZoneInnerToJSON)),
        'thumbnail': BlogRequestDataThumbnailToJSON(value['thumbnail']),
        'createdDate': value['createdDate'] == null ? undefined : ((value['createdDate']).toISOString().substring(0,10)),
        'slug': value['slug'],
    };
}

