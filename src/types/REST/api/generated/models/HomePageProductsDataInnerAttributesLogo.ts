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
import type { HomePageProductsDataInnerAttributesLogoData } from './HomePageProductsDataInnerAttributesLogoData';
import {
    HomePageProductsDataInnerAttributesLogoDataFromJSON,
    HomePageProductsDataInnerAttributesLogoDataFromJSONTyped,
    HomePageProductsDataInnerAttributesLogoDataToJSON,
} from './HomePageProductsDataInnerAttributesLogoData';

/**
 * 
 * @export
 * @interface HomePageProductsDataInnerAttributesLogo
 */
export interface HomePageProductsDataInnerAttributesLogo {
    /**
     * 
     * @type {HomePageProductsDataInnerAttributesLogoData}
     * @memberof HomePageProductsDataInnerAttributesLogo
     */
    data?: HomePageProductsDataInnerAttributesLogoData;
}

/**
 * Check if a given object implements the HomePageProductsDataInnerAttributesLogo interface.
 */
export function instanceOfHomePageProductsDataInnerAttributesLogo(value: object): value is HomePageProductsDataInnerAttributesLogo {
    return true;
}

export function HomePageProductsDataInnerAttributesLogoFromJSON(json: any): HomePageProductsDataInnerAttributesLogo {
    return HomePageProductsDataInnerAttributesLogoFromJSONTyped(json, false);
}

export function HomePageProductsDataInnerAttributesLogoFromJSONTyped(json: any, ignoreDiscriminator: boolean): HomePageProductsDataInnerAttributesLogo {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : HomePageProductsDataInnerAttributesLogoDataFromJSON(json['data']),
    };
}

export function HomePageProductsDataInnerAttributesLogoToJSON(value?: HomePageProductsDataInnerAttributesLogo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': HomePageProductsDataInnerAttributesLogoDataToJSON(value['data']),
    };
}

