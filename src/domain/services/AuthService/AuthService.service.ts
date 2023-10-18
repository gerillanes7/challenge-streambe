import { AuthDTO } from "../../entities";
import { httpClient } from "../../http/http";

export class AuthService {
  httpClient;

  constructor() {
    this.httpClient = httpClient;
  }

  async login(): Promise<AuthDTO | undefined> {
    try {
      const { data } = await this.httpClient.get<AuthDTO>("/login");
      
      return data;
    } catch (e) {
      throw new Error(e as string);
    }
  }
}
