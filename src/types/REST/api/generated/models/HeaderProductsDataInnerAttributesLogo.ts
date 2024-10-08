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
import type { HeaderProductsDataInnerAttributesLogoData } from './HeaderProductsDataInnerAttributesLogoData';
import {
    HeaderProductsDataInnerAttributesLogoDataFromJSON,
    HeaderProductsDataInnerAttributesLogoDataFromJSONTyped,
    HeaderProductsDataInnerAttributesLogoDataToJSON,
} from './HeaderProductsDataInnerAttributesLogoData';

/**
 * 
 * @export
 * @interface HeaderProductsDataInnerAttributesLogo
 */
export interface HeaderProductsDataInnerAttributesLogo {
    /**
     * 
     * @type {HeaderProductsDataInnerAttributesLogoData}
     * @memberof HeaderProductsDataInnerAttributesLogo
     */
    data?: HeaderProductsDataInnerAttributesLogoData;
}

/**
 * Check if a given object implements the HeaderProductsDataInnerAttributesLogo interface.
 */
export function instanceOfHeaderProductsDataInnerAttributesLogo(value: object): value is HeaderProductsDataInnerAttributesLogo {
    return true;
}

export function HeaderProductsDataInnerAttributesLogoFromJSON(json: any): HeaderProductsDataInnerAttributesLogo {
    return HeaderProductsDataInnerAttributesLogoFromJSONTyped(json, false);
}

export function HeaderProductsDataInnerAttributesLogoFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderProductsDataInnerAttributesLogo {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : HeaderProductsDataInnerAttributesLogoDataFromJSON(json['data']),
    };
}

export function HeaderProductsDataInnerAttributesLogoToJSON(value?: HeaderProductsDataInnerAttributesLogo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': HeaderProductsDataInnerAttributesLogoDataToJSON(value['data']),
    };
}

