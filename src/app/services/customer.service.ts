import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private urls: any = {
    get: 'http://localhost:3000/'
  };
  constructor(private httpClient: HttpClient) {}
  getCustomers(page: number, perPage: number): Observable<Customer[]> {
    const url = `${this.urls.get}?page=${page}&perpage=${perPage}`;
    return this.httpClient.get<Customer[]>(url);
  }
}
