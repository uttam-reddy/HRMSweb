export class ResponseModel {
  entity: any;
  token: string="";
  status: boolean=false;
  returnMessage: any[]=[];
  totalPages: number=0;
  totalRows: number=0;
  pageSize: number=0;
  isAuthenticated: boolean=false;
  errors: Errors={};
}

export interface Errors {}
