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
import type { BlogBigImageComponent } from './BlogBigImageComponent';
import {
    BlogBigImageComponentFromJSON,
    BlogBigImageComponentFromJSONTyped,
    BlogBigImageComponentToJSON,
} from './BlogBigImageComponent';
import type { BlogRichtextComponent } from './BlogRichtextComponent';
import {
    BlogRichtextComponentFromJSON,
    BlogRichtextComponentFromJSONTyped,
    BlogRichtextComponentToJSON,
} from './BlogRichtextComponent';
import type { BlogSmallImageComponent } from './BlogSmallImageComponent';
import {
    BlogSmallImageComponentFromJSON,
    BlogSmallImageComponentFromJSONTyped,
    BlogSmallImageComponentToJSON,
} from './BlogSmallImageComponent';
import type { BlogMediumImageComponent } from './BlogMediumImageComponent';
import {
    BlogMediumImageComponentFromJSON,
    BlogMediumImageComponentFromJSONTyped,
    BlogMediumImageComponentToJSON,
} from './BlogMediumImageComponent';
import type { BlogYoutubeComponent } from './BlogYoutubeComponent';
import {
    BlogYoutubeComponentFromJSON,
    BlogYoutubeComponentFromJSONTyped,
    BlogYoutubeComponentToJSON,
} from './BlogYoutubeComponent';
import type { BlogImageWithTextComponent } from './BlogImageWithTextComponent';
import {
    BlogImageWithTextComponentFromJSON,
    BlogImageWithTextComponentFromJSONTyped,
    BlogImageWithTextComponentToJSON,
} from './BlogImageWithTextComponent';
import type { OtherSeoComponentMetaSocialsInnerImage } from './OtherSeoComponentMetaSocialsInnerImage';
import {
    OtherSeoComponentMetaSocialsInnerImageFromJSON,
    OtherSeoComponentMetaSocialsInnerImageFromJSONTyped,
    OtherSeoComponentMetaSocialsInnerImageToJSON,
} from './OtherSeoComponentMetaSocialsInnerImage';

/**
 * 
 * @export
 * @interface BlogRequestDataDynamicZoneInner
 */
export interface BlogRequestDataDynamicZoneInner {
    /**
     * 
     * @type {number}
     * @memberof BlogRequestDataDynamicZoneInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BlogRequestDataDynamicZoneInner
     */
    component?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogRequestDataDynamicZoneInner
     */
    rich?: string;
    /**
     * 
     * @type {OtherSeoComponentMetaSocialsInnerImage}
     * @memberof BlogRequestDataDynamicZoneInner
     */
    image?: OtherSeoComponentMetaSocialsInnerImage;
    /**
     * 
     * @type {string}
     * @memberof BlogRequestDataDynamicZoneInner
     */
    imagePosition?: BlogRequestDataDynamicZoneInnerImagePositionEnum;
    /**
     * 
     * @type {string}
     * @memberof BlogRequestDataDynamicZoneInner
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogRequestDataDynamicZoneInner
     */
    imageType?: BlogRequestDataDynamicZoneInnerImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BlogRequestDataDynamicZoneInner
     */
    link?: string;
}


/**
 * @export
 */
export const BlogRequestDataDynamicZoneInnerImagePositionEnum = {
    Left: 'left',
    Right: 'right'
} as const;
export type BlogRequestDataDynamicZoneInnerImagePositionEnum = typeof BlogRequestDataDynamicZoneInnerImagePositionEnum[keyof typeof BlogRequestDataDynamicZoneInnerImagePositionEnum];

/**
 * @export
 */
export const BlogRequestDataDynamicZoneInnerImageTypeEnum = {
    Vertical: 'vertical',
    Horizontal: 'horizontal'
} as const;
export type BlogRequestDataDynamicZoneInnerImageTypeEnum = typeof BlogRequestDataDynamicZoneInnerImageTypeEnum[keyof typeof BlogRequestDataDynamicZoneInnerImageTypeEnum];


/**
 * Check if a given object implements the BlogRequestDataDynamicZoneInner interface.
 */
export function instanceOfBlogRequestDataDynamicZoneInner(value: object): value is BlogRequestDataDynamicZoneInner {
    return true;
}

export function BlogRequestDataDynamicZoneInnerFromJSON(json: any): BlogRequestDataDynamicZoneInner {
    return BlogRequestDataDynamicZoneInnerFromJSONTyped(json, false);
}

export function BlogRequestDataDynamicZoneInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogRequestDataDynamicZoneInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'component': json['__component'] == null ? undefined : json['__component'],
        'rich': json['rich'] == null ? undefined : json['rich'],
        'image': json['image'] == null ? undefined : OtherSeoComponentMetaSocialsInnerImageFromJSON(json['image']),
        'imagePosition': json['imagePosition'] == null ? undefined : json['imagePosition'],
        'text': json['text'] == null ? undefined : json['text'],
        'imageType': json['imageType'] == null ? undefined : json['imageType'],
        'link': json['link'] == null ? undefined : json['link'],
    };
}

export function BlogRequestDataDynamicZoneInnerToJSON(value?: BlogRequestDataDynamicZoneInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        '__component': value['component'],
        'rich': value['rich'],
        'image': OtherSeoComponentMetaSocialsInnerImageToJSON(value['image']),
        'imagePosition': value['imagePosition'],
        'text': value['text'],
        'imageType': value['imageType'],
        'link': value['link'],
    };
}
