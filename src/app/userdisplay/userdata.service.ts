import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserdataService {
  url: string = "https://nodejsapidemo.herokuapp.com/users/";
  constructor(private _http: HttpClient) {}

  getAllUsers() {
    return this._http.get(this.url);
  }
  deleteUser(user_email) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.url + user_email, { headers: head });
  }
}
