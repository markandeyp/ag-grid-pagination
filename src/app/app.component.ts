import { Component, OnInit } from '@angular/core';
import { ColumnDef } from './models/ColumnDef';
import { Customer } from './models/Customer';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private columns: ColumnDef[] = [
    {
      headerName: 'ID',
      field: 'id'
    },
    {
      headerName: 'Customer Name',
      field: 'name'
    },
    {
      headerName: 'Email',
      field: 'email'
    }
  ];
  private customers: Customer[] = [];
  private currentPage: number = 1;
  private recordsPerPage: number = 10;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomers(this.currentPage, this.recordsPerPage);
  }

  loadPage(pageNumber) {
    this.getCustomers(pageNumber, this.recordsPerPage);
  }

  getCustomers(page: number, recordsPerPage: number) {
    this.customerService.getCustomers(page, recordsPerPage).subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
        this.currentPage = page;
      },
      (error) => console.log('Error while fetching customers', error)
    );
  }
}
