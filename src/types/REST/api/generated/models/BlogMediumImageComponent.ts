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
 * @interface BlogMediumImageComponent
 */
export interface BlogMediumImageComponent {
    /**
     * 
     * @type {number}
     * @memberof BlogMediumImageComponent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BlogMediumImageComponent
     */
    component?: string;
    /**
     * 
     * @type {OtherSeoComponentMetaSocialsInnerImage}
     * @memberof BlogMediumImageComponent
     */
    image?: OtherSeoComponentMetaSocialsInnerImage;
    /**
     * 
     * @type {string}
     * @memberof BlogMediumImageComponent
     */
    imagePosition?: BlogMediumImageComponentImagePositionEnum;
    /**
     * 
     * @type {string}
     * @memberof BlogMediumImageComponent
     */
    imageType?: BlogMediumImageComponentImageTypeEnum;
}


/**
 * @export
 */
export const BlogMediumImageComponentImagePositionEnum = {
    Right: 'right',
    Left: 'left'
} as const;
export type BlogMediumImageComponentImagePositionEnum = typeof BlogMediumImageComponentImagePositionEnum[keyof typeof BlogMediumImageComponentImagePositionEnum];

/**
 * @export
 */
export const BlogMediumImageComponentImageTypeEnum = {
    Vertical: 'vertical',
    Horizontal: 'horizontal'
} as const;
export type BlogMediumImageComponentImageTypeEnum = typeof BlogMediumImageComponentImageTypeEnum[keyof typeof BlogMediumImageComponentImageTypeEnum];


/**
 * Check if a given object implements the BlogMediumImageComponent interface.
 */
export function instanceOfBlogMediumImageComponent(value: object): value is BlogMediumImageComponent {
    return true;
}

export function BlogMediumImageComponentFromJSON(json: any): BlogMediumImageComponent {
    return BlogMediumImageComponentFromJSONTyped(json, false);
}

export function BlogMediumImageComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogMediumImageComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'component': json['__component'] == null ? undefined : json['__component'],
        'image': json['image'] == null ? undefined : OtherSeoComponentMetaSocialsInnerImageFromJSON(json['image']),
        'imagePosition': json['imagePosition'] == null ? undefined : json['imagePosition'],
        'imageType': json['imageType'] == null ? undefined : json['imageType'],
    };
}

export function BlogMediumImageComponentToJSON(value?: BlogMediumImageComponent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        '__component': value['component'],
        'image': OtherSeoComponentMetaSocialsInnerImageToJSON(value['image']),
        'imagePosition': value['imagePosition'],
        'imageType': value['imageType'],
    };
}

