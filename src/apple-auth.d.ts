declare module "apple-auth" {
  export interface AppleAuthConfig {
    client_id: string;
    team_id: string;
    redirect_uri: string;
    key_id: string;
  }
  // https://developer.apple.com/documentation/signinwithapplerestapi/tokenresponse
  export interface AppleAuthAccessToken {
    access_token: string;
    expires_in: number;
    id_token: string;
    refresh_token: string;
    token_type: "bearer";
  }
  // https://developer.apple.com/documentation/signinwithapplerestapi/errorresponse
  export interface AppleAuthError {
    error: "invalid_request" | "invalid_client" | "invalid_grant" | "unauthorized_client" | "unsupported_grant_type" | "invalid_scope";
  }
  export default class AppleAuth {
    constructor(config: AppleAuthConfig, privateKeyLocation: string)
    loginURL(): string;
    accessToken(code: string): Promise<AppleAuthAccessToken>;
    refreshToken(code: string): Promise<AppleAuthAccessToken>;
  }
}
