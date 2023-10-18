export interface AuthDTO {
  username: string;
  name: string;
  lastname: string;
  roles: string[];
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
}