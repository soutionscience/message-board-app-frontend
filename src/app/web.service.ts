import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}

  getMessages() {
    this.http.get('http://localhost:3000/messages').toPromise();
  }
}
