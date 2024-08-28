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
import type { HeaderWalletComponentConnection } from './HeaderWalletComponentConnection';
import {
    HeaderWalletComponentConnectionFromJSON,
    HeaderWalletComponentConnectionFromJSONTyped,
    HeaderWalletComponentConnectionToJSON,
} from './HeaderWalletComponentConnection';
import type { OtherSeoComponentMetaSocialsInnerImage } from './OtherSeoComponentMetaSocialsInnerImage';
import {
    OtherSeoComponentMetaSocialsInnerImageFromJSON,
    OtherSeoComponentMetaSocialsInnerImageFromJSONTyped,
    OtherSeoComponentMetaSocialsInnerImageToJSON,
} from './OtherSeoComponentMetaSocialsInnerImage';

/**
 * 
 * @export
 * @interface HeaderWalletComponent
 */
export interface HeaderWalletComponent {
    /**
     * 
     * @type {number}
     * @memberof HeaderWalletComponent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof HeaderWalletComponent
     */
    buttonTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof HeaderWalletComponent
     */
    buttonDesc?: string;
    /**
     * 
     * @type {string}
     * @memberof HeaderWalletComponent
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof HeaderWalletComponent
     */
    description?: string;
    /**
     * 
     * @type {OtherSeoComponentMetaSocialsInnerImage}
     * @memberof HeaderWalletComponent
     */
    image?: OtherSeoComponentMetaSocialsInnerImage;
    /**
     * 
     * @type {string}
     * @memberof HeaderWalletComponent
     */
    keplrText?: string;
    /**
     * 
     * @type {OtherSeoComponentMetaSocialsInnerImage}
     * @memberof HeaderWalletComponent
     */
    keplrImage?: OtherSeoComponentMetaSocialsInnerImage;
    /**
     * 
     * @type {string}
     * @memberof HeaderWalletComponent
     */
    metamaskTitle?: string;
    /**
     * 
     * @type {OtherSeoComponentMetaSocialsInnerImage}
     * @memberof HeaderWalletComponent
     */
    metamaskImage?: OtherSeoComponentMetaSocialsInnerImage;
    /**
     * 
     * @type {HeaderWalletComponentConnection}
     * @memberof HeaderWalletComponent
     */
    connection?: HeaderWalletComponentConnection;
}

/**
 * Check if a given object implements the HeaderWalletComponent interface.
 */
export function instanceOfHeaderWalletComponent(value: object): value is HeaderWalletComponent {
    return true;
}

export function HeaderWalletComponentFromJSON(json: any): HeaderWalletComponent {
    return HeaderWalletComponentFromJSONTyped(json, false);
}

export function HeaderWalletComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderWalletComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'buttonTitle': json['buttonTitle'] == null ? undefined : json['buttonTitle'],
        'buttonDesc': json['buttonDesc'] == null ? undefined : json['buttonDesc'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'image': json['image'] == null ? undefined : OtherSeoComponentMetaSocialsInnerImageFromJSON(json['image']),
        'keplrText': json['keplrText'] == null ? undefined : json['keplrText'],
        'keplrImage': json['keplrImage'] == null ? undefined : OtherSeoComponentMetaSocialsInnerImageFromJSON(json['keplrImage']),
        'metamaskTitle': json['metamaskTitle'] == null ? undefined : json['metamaskTitle'],
        'metamaskImage': json['metamaskImage'] == null ? undefined : OtherSeoComponentMetaSocialsInnerImageFromJSON(json['metamaskImage']),
        'connection': json['connection'] == null ? undefined : HeaderWalletComponentConnectionFromJSON(json['connection']),
    };
}

export function HeaderWalletComponentToJSON(value?: HeaderWalletComponent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'buttonTitle': value['buttonTitle'],
        'buttonDesc': value['buttonDesc'],
        'title': value['title'],
        'description': value['description'],
        'image': OtherSeoComponentMetaSocialsInnerImageToJSON(value['image']),
        'keplrText': value['keplrText'],
        'keplrImage': OtherSeoComponentMetaSocialsInnerImageToJSON(value['keplrImage']),
        'metamaskTitle': value['metamaskTitle'],
        'metamaskImage': OtherSeoComponentMetaSocialsInnerImageToJSON(value['metamaskImage']),
        'connection': HeaderWalletComponentConnectionToJSON(value['connection']),
    };
}

