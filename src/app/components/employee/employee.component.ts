import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: any;
  employee = new Employee();

  constructor(public route: ActivatedRoute, public dataService: DataService) {}

  ngOnInit() {
    this.getEmployeesdata();
  }

  getEmployeesdata() {
    this.dataService.getData().subscribe(res => {
      this.employees = res;
    });
  }

  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe(res => {
      this.getEmployeesdata();
    });
  }

  insertData() {
    this.dataService.insertData(this.employee).subscribe(res => {
      this.getEmployeesdata();
    });
  }
}
