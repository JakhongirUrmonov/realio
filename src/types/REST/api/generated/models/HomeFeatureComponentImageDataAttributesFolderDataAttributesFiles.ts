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
import type { HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInner } from './HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInner';
import {
    HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerFromJSON,
    HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerFromJSONTyped,
    HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerToJSON,
} from './HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInner';

/**
 * 
 * @export
 * @interface HomeFeatureComponentImageDataAttributesFolderDataAttributesFiles
 */
export interface HomeFeatureComponentImageDataAttributesFolderDataAttributesFiles {
    /**
     * 
     * @type {Array<HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInner>}
     * @memberof HomeFeatureComponentImageDataAttributesFolderDataAttributesFiles
     */
    data?: Array<HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInner>;
}

/**
 * Check if a given object implements the HomeFeatureComponentImageDataAttributesFolderDataAttributesFiles interface.
 */
export function instanceOfHomeFeatureComponentImageDataAttributesFolderDataAttributesFiles(value: object): value is HomeFeatureComponentImageDataAttributesFolderDataAttributesFiles {
    return true;
}

export function HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesFromJSON(json: any): HomeFeatureComponentImageDataAttributesFolderDataAttributesFiles {
    return HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesFromJSONTyped(json, false);
}

export function HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): HomeFeatureComponentImageDataAttributesFolderDataAttributesFiles {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerFromJSON)),
    };
}

export function HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesToJSON(value?: HomeFeatureComponentImageDataAttributesFolderDataAttributesFiles | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(HomeFeatureComponentImageDataAttributesFolderDataAttributesFilesDataInnerToJSON)),
    };
}

