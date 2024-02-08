import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    const id = this.route.snapshot.params['id'];
    this.dataService.getEmployeeByID(id).subscribe(
      (data) => {
        this.employee = data as Employee;
      },
      (error) => {
        console.error('Error fetching employee details:', error);
      }
    );
  }

  updateEmployee() {
    const id = this.route.snapshot.params['id'];
    this.dataService.updateData(id, this.employee).subscribe(
      () => {
        console.log('Employee updated successfully');
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }
}
