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
 * @interface HeaderProductsDataInnerAttributesWebsite
 */
export interface HeaderProductsDataInnerAttributesWebsite {
    /**
     * 
     * @type {number}
     * @memberof HeaderProductsDataInnerAttributesWebsite
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof HeaderProductsDataInnerAttributesWebsite
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof HeaderProductsDataInnerAttributesWebsite
     */
    link?: string;
}

/**
 * Check if a given object implements the HeaderProductsDataInnerAttributesWebsite interface.
 */
export function instanceOfHeaderProductsDataInnerAttributesWebsite(value: object): value is HeaderProductsDataInnerAttributesWebsite {
    return true;
}

export function HeaderProductsDataInnerAttributesWebsiteFromJSON(json: any): HeaderProductsDataInnerAttributesWebsite {
    return HeaderProductsDataInnerAttributesWebsiteFromJSONTyped(json, false);
}

export function HeaderProductsDataInnerAttributesWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderProductsDataInnerAttributesWebsite {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'text': json['text'] == null ? undefined : json['text'],
        'link': json['link'] == null ? undefined : json['link'],
    };
}

export function HeaderProductsDataInnerAttributesWebsiteToJSON(value?: HeaderProductsDataInnerAttributesWebsite | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'text': value['text'],
        'link': value['link'],
    };
}
