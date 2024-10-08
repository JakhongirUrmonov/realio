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
import type { Blog } from './Blog';
import {
    BlogFromJSON,
    BlogFromJSONTyped,
    BlogToJSON,
} from './Blog';

/**
 * 
 * @export
 * @interface BlogListResponseDataItem
 */
export interface BlogListResponseDataItem {
    /**
     * 
     * @type {number}
     * @memberof BlogListResponseDataItem
     */
    id?: number;
    /**
     * 
     * @type {Blog}
     * @memberof BlogListResponseDataItem
     */
    attributes?: Blog;
}

/**
 * Check if a given object implements the BlogListResponseDataItem interface.
 */
export function instanceOfBlogListResponseDataItem(value: object): value is BlogListResponseDataItem {
    return true;
}

export function BlogListResponseDataItemFromJSON(json: any): BlogListResponseDataItem {
    return BlogListResponseDataItemFromJSONTyped(json, false);
}

export function BlogListResponseDataItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogListResponseDataItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'attributes': json['attributes'] == null ? undefined : BlogFromJSON(json['attributes']),
    };
}

export function BlogListResponseDataItemToJSON(value?: BlogListResponseDataItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'attributes': BlogToJSON(value['attributes']),
    };
}

