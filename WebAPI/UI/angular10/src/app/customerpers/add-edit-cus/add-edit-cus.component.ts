import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cus',
  templateUrl: './add-edit-cus.component.html',
  styleUrls: ['./add-edit-cus.component.css']
})
export class AddEditCusComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cus:any;
  CustomerID:string="";
  CusName:string="";
  CusSurname:string="";
  IdentityNumber:string="";
  IsUnique:string="";

  ngOnInit(): void {
    this.CustomerID=this.CustomerID;
    this.CusName=this.CusName;
    this.CusSurname=this.CusSurname;
    this.IdentityNumber=this.IdentityNumber;
  }

  addCustomer(){
    var val = {CustomerID:this.CustomerID,
              CusName:this.CusName,
              CusSurname:this.CusSurname,
              IdentityNumber:this.IdentityNumber,
              IsUnique:this.IsUnique};
    this.service.addCustomer(val).subscribe(res=>{
      alert(res.toString());
    });      
  }
  updateCustomer(){
    var val = {CustomerID:this.CustomerID,
      CusName:this.CusName,
      CusSurname:this.CusSurname,
      IdentityNumber:this.IdentityNumber};
      this.service.updateCustomer(val).subscribe(res=>{
      alert(res.toString());
});      
  }

}
