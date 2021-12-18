import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:50010/api";

  constructor(private http:HttpClient) { }

  getCusList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Customer');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/Customer',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/Customer',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/Customer/'+val);
  }


  getDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Details');
  }

  addDetails(val:any){
    return this.http.post(this.APIUrl+'/Details',val);
  }

  updateDetails(val:any){
    return this.http.put(this.APIUrl+'/Details',val);
  }

  deleteDetails(val:any){
    return this.http.delete(this.APIUrl+'/Details/'+val);
  }


  getAllCustomerPerNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Details/GetAllCustomerPerNames');
  }

  getAllCustomerNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Details/GetAllCustomerNames');
  }
}
