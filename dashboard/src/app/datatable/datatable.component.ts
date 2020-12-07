import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'datatables';

declare var $: any;

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#dataTable').DataTable();
    console.log("calling datatable from datatable");
  }

  ngAfterViewInit(): void {
  
  }


}
