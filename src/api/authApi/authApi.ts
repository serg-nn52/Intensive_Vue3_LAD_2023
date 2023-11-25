import { Api } from '../api';
import type { ILogin } from './authApi.type';

export class AuthApi extends Api {
  private readonly url;
  constructor(authUrl: string) {
    super();
    this.url = this.baseUrl + authUrl;
    this.sendLoginForm = (data: ILogin) => this.sendEntity<ILogin>(this.url, data);
    this.sendLogoutForm = () => this.sendEntity<ILogin>(this.url);
  }
  sendLoginForm;
  sendLogoutForm;
}
