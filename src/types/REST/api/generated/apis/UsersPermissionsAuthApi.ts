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


import * as runtime from '../runtime';
import type {
  AuthChangePasswordPostRequest,
  AuthForgotPasswordPost200Response,
  AuthForgotPasswordPostRequest,
  AuthLocalPostRequest,
  AuthLocalRegisterPostRequest,
  AuthResetPasswordPostRequest,
  AuthSendEmailConfirmationPost200Response,
  UsersPermissionsUserRegistration,
} from '../models/index';
import {
    AuthChangePasswordPostRequestFromJSON,
    AuthChangePasswordPostRequestToJSON,
    AuthForgotPasswordPost200ResponseFromJSON,
    AuthForgotPasswordPost200ResponseToJSON,
    AuthForgotPasswordPostRequestFromJSON,
    AuthForgotPasswordPostRequestToJSON,
    AuthLocalPostRequestFromJSON,
    AuthLocalPostRequestToJSON,
    AuthLocalRegisterPostRequestFromJSON,
    AuthLocalRegisterPostRequestToJSON,
    AuthResetPasswordPostRequestFromJSON,
    AuthResetPasswordPostRequestToJSON,
    AuthSendEmailConfirmationPost200ResponseFromJSON,
    AuthSendEmailConfirmationPost200ResponseToJSON,
    UsersPermissionsUserRegistrationFromJSON,
    UsersPermissionsUserRegistrationToJSON,
} from '../models/index';

export interface AuthChangePasswordPostOperationRequest {
    authChangePasswordPostRequest: AuthChangePasswordPostRequest;
}

export interface AuthEmailConfirmationGetRequest {
    confirmation?: string;
}

export interface AuthForgotPasswordPostOperationRequest {
    authForgotPasswordPostRequest: AuthForgotPasswordPostRequest;
}

export interface AuthLocalPostOperationRequest {
    authLocalPostRequest: AuthLocalPostRequest;
}

export interface AuthLocalRegisterPostOperationRequest {
    authLocalRegisterPostRequest: AuthLocalRegisterPostRequest;
}

export interface AuthProviderCallbackGetRequest {
    provider: string;
}

export interface AuthResetPasswordPostOperationRequest {
    authResetPasswordPostRequest: AuthResetPasswordPostRequest;
}

export interface AuthSendEmailConfirmationPostRequest {
    authForgotPasswordPostRequest: AuthForgotPasswordPostRequest;
}

export interface ConnectProviderGetRequest {
    provider: string;
}

/**
 * 
 */
export class UsersPermissionsAuthApi extends runtime.BaseAPI {

    /**
     * Update user\'s own password
     */
    async authChangePasswordPostRaw(requestParameters: AuthChangePasswordPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsUserRegistration>> {
        if (requestParameters['authChangePasswordPostRequest'] == null) {
            throw new runtime.RequiredError(
                'authChangePasswordPostRequest',
                'Required parameter "authChangePasswordPostRequest" was null or undefined when calling authChangePasswordPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/change-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthChangePasswordPostRequestToJSON(requestParameters['authChangePasswordPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsUserRegistrationFromJSON(jsonValue));
    }

    /**
     * Update user\'s own password
     */
    async authChangePasswordPost(requestParameters: AuthChangePasswordPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsUserRegistration> {
        const response = await this.authChangePasswordPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Confirm user email
     */
    async authEmailConfirmationGetRaw(requestParameters: AuthEmailConfirmationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Error>> {
        const queryParameters: any = {};

        if (requestParameters['confirmation'] != null) {
            queryParameters['confirmation'] = requestParameters['confirmation'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/email-confirmation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<Error>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Confirm user email
     */
    async authEmailConfirmationGet(requestParameters: AuthEmailConfirmationGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Error> {
        const response = await this.authEmailConfirmationGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Send rest password email
     */
    async authForgotPasswordPostRaw(requestParameters: AuthForgotPasswordPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthForgotPasswordPost200Response>> {
        if (requestParameters['authForgotPasswordPostRequest'] == null) {
            throw new runtime.RequiredError(
                'authForgotPasswordPostRequest',
                'Required parameter "authForgotPasswordPostRequest" was null or undefined when calling authForgotPasswordPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/forgot-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthForgotPasswordPostRequestToJSON(requestParameters['authForgotPasswordPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthForgotPasswordPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Send rest password email
     */
    async authForgotPasswordPost(requestParameters: AuthForgotPasswordPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthForgotPasswordPost200Response> {
        const response = await this.authForgotPasswordPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a jwt token and user info
     * Local login
     */
    async authLocalPostRaw(requestParameters: AuthLocalPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsUserRegistration>> {
        if (requestParameters['authLocalPostRequest'] == null) {
            throw new runtime.RequiredError(
                'authLocalPostRequest',
                'Required parameter "authLocalPostRequest" was null or undefined when calling authLocalPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/local`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthLocalPostRequestToJSON(requestParameters['authLocalPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsUserRegistrationFromJSON(jsonValue));
    }

    /**
     * Returns a jwt token and user info
     * Local login
     */
    async authLocalPost(requestParameters: AuthLocalPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsUserRegistration> {
        const response = await this.authLocalPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a jwt token and user info
     * Register a user
     */
    async authLocalRegisterPostRaw(requestParameters: AuthLocalRegisterPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsUserRegistration>> {
        if (requestParameters['authLocalRegisterPostRequest'] == null) {
            throw new runtime.RequiredError(
                'authLocalRegisterPostRequest',
                'Required parameter "authLocalRegisterPostRequest" was null or undefined when calling authLocalRegisterPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/local/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthLocalRegisterPostRequestToJSON(requestParameters['authLocalRegisterPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsUserRegistrationFromJSON(jsonValue));
    }

    /**
     * Returns a jwt token and user info
     * Register a user
     */
    async authLocalRegisterPost(requestParameters: AuthLocalRegisterPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsUserRegistration> {
        const response = await this.authLocalRegisterPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Default Callback from provider auth
     */
    async authProviderCallbackGetRaw(requestParameters: AuthProviderCallbackGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsUserRegistration>> {
        if (requestParameters['provider'] == null) {
            throw new runtime.RequiredError(
                'provider',
                'Required parameter "provider" was null or undefined when calling authProviderCallbackGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/{provider}/callback`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters['provider']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsUserRegistrationFromJSON(jsonValue));
    }

    /**
     * Default Callback from provider auth
     */
    async authProviderCallbackGet(requestParameters: AuthProviderCallbackGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsUserRegistration> {
        const response = await this.authProviderCallbackGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Rest user password
     */
    async authResetPasswordPostRaw(requestParameters: AuthResetPasswordPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersPermissionsUserRegistration>> {
        if (requestParameters['authResetPasswordPostRequest'] == null) {
            throw new runtime.RequiredError(
                'authResetPasswordPostRequest',
                'Required parameter "authResetPasswordPostRequest" was null or undefined when calling authResetPasswordPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/reset-password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthResetPasswordPostRequestToJSON(requestParameters['authResetPasswordPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersPermissionsUserRegistrationFromJSON(jsonValue));
    }

    /**
     * Rest user password
     */
    async authResetPasswordPost(requestParameters: AuthResetPasswordPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersPermissionsUserRegistration> {
        const response = await this.authResetPasswordPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Send confirmation email
     */
    async authSendEmailConfirmationPostRaw(requestParameters: AuthSendEmailConfirmationPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthSendEmailConfirmationPost200Response>> {
        if (requestParameters['authForgotPasswordPostRequest'] == null) {
            throw new runtime.RequiredError(
                'authForgotPasswordPostRequest',
                'Required parameter "authForgotPasswordPostRequest" was null or undefined when calling authSendEmailConfirmationPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth/send-email-confirmation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthForgotPasswordPostRequestToJSON(requestParameters['authForgotPasswordPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthSendEmailConfirmationPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Send confirmation email
     */
    async authSendEmailConfirmationPost(requestParameters: AuthSendEmailConfirmationPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthSendEmailConfirmationPost200Response> {
        const response = await this.authSendEmailConfirmationPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Redirects to provider login before being redirect to /auth/{provider}/callback
     * Login with a provider
     */
    async connectProviderGetRaw(requestParameters: ConnectProviderGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Error>> {
        if (requestParameters['provider'] == null) {
            throw new runtime.RequiredError(
                'provider',
                'Required parameter "provider" was null or undefined when calling connectProviderGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/connect/{provider}`.replace(`{${"provider"}}`, encodeURIComponent(String(requestParameters['provider']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<Error>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Redirects to provider login before being redirect to /auth/{provider}/callback
     * Login with a provider
     */
    async connectProviderGet(requestParameters: ConnectProviderGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Error> {
        const response = await this.connectProviderGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
