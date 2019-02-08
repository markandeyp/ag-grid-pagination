import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [AppComponent, PaginationComponent],
  imports: [BrowserModule, AgGridModule.withComponents([]), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
