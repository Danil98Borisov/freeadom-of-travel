import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Hotel } from 'src/hotel/hotel';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class EditHotelService {

  constructor(private http: HttpClient) {
  }
}
