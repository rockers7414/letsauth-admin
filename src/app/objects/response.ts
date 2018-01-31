// XXX: Deprecated
export interface Response {
  result: boolean;
  data: any;
}

export interface Result {
  data: any;
  error: any;
  type: string;
}

export interface Collection extends Result {
  index: number;
  offset: number;
  total: number;
}

export interface AccessTokenResult {
  access_token: string;
  token_type: string;
  expires_in: number;
  scopes: string;
  refresh_token?: string;
}
