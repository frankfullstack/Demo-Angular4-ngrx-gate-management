import { Injectable } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginToken, ILoginToken } from './login.model';
import * as moment from 'moment'

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

const credentialsKey = 'credentials';

/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {

  private _credentials: ILoginToken;
  private userCredential: LoginToken;

  constructor(private http: Http) {
    this._credentials = JSON.parse(sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey));
  }

  /**
   * Authenticates the user.
   * @param {LoginContext} context The login parameters.
   * @return {Observable<Credentials>} The user credentials.
   */
  login(context: LoginContext): Observable<ILoginToken> {
    // Replace by proper authentication call
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const option = new RequestOptions({headers: headers});
    option.url = 'http://localhost:3166/api/User/login';
    return this.http.post('http://localhost:3166/api/User/login',
        JSON.stringify({'UserName': context.username, 'Password': context.password}), option)
             .map((res: Response) => res.json())
             .map((body: any) =>  { this.setCredentials(body, context.remember); return body; } )
             .catch(() => Observable.of({}));
  }

  /**
   * Logs out the user and clear credentials.
   * @return {Observable<boolean>} True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return Observable.of(true);
  }

  /**
   * Checks is the user is authenticated.
   * @return {boolean} True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    let isExpired: boolean;
    if (this.credentials) {
      isExpired = moment(this.credentials.expiration).diff(moment(), 'seconds') <= 0;
    }

    // return this.credentials.token && !isExpired;
    return true;
  }

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): ILoginToken {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param {Credentials=} credentials The user credentials.
   * @param {boolean=} remember True to remember credentials across sessions.
   */
  private setCredentials(credentials?: ILoginToken, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

}
