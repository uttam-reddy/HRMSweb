
export class Employee {
  id: number=0
  name: string=""
  address: string=""
  salary: number=0
  dateCreated: string=""
  dateDeleted: any;
  dateUpdated: string=""
  isDeleted: boolean=false
  status: boolean=false
  departmentName: string=""
  departmentId: number=0
}

export class Department {
  id: number=0
  name: string=""
  
  dateCreated: string=""
  dateDeleted: any;
  dateUpdated: string=""
  isDeleted: boolean=false
  status: boolean=false
  
}

export class EmployeeActivity {
  activityId: number=0
  employeeActivityId: number=0
  activityName: string=""
  employeeName: string=""
}



