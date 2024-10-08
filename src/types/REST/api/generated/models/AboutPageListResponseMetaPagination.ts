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
 * @interface AboutPageListResponseMetaPagination
 */
export interface AboutPageListResponseMetaPagination {
    /**
     * 
     * @type {number}
     * @memberof AboutPageListResponseMetaPagination
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof AboutPageListResponseMetaPagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AboutPageListResponseMetaPagination
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AboutPageListResponseMetaPagination
     */
    total?: number;
}

/**
 * Check if a given object implements the AboutPageListResponseMetaPagination interface.
 */
export function instanceOfAboutPageListResponseMetaPagination(value: object): value is AboutPageListResponseMetaPagination {
    return true;
}

export function AboutPageListResponseMetaPaginationFromJSON(json: any): AboutPageListResponseMetaPagination {
    return AboutPageListResponseMetaPaginationFromJSONTyped(json, false);
}

export function AboutPageListResponseMetaPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutPageListResponseMetaPagination {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'pageCount': json['pageCount'] == null ? undefined : json['pageCount'],
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function AboutPageListResponseMetaPaginationToJSON(value?: AboutPageListResponseMetaPagination | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'page': value['page'],
        'pageSize': value['pageSize'],
        'pageCount': value['pageCount'],
        'total': value['total'],
    };
}

