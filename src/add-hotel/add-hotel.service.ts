import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Hotel } from 'src/delete/hotel';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class AddHotelService {

  constructor(private http: HttpClient) {
  }
}