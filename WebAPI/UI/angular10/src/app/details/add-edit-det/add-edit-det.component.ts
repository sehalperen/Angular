import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-det',
  templateUrl: './add-edit-det.component.html',
  styleUrls: ['./add-edit-det.component.css']
})
export class AddEditDetComponent implements OnInit {

  constructor(private service:SharedService){}
  @Input() det:any;

  CustomerID:string="";
  CustomerName:string="";
  CustomerSurname:string="";
  IdCus:string="";
  IdentityNumber:string="";
  CusPhone:string="";
  CusAdress:string="";

  CusList:any=[];

  CusList2:any=[];

  ngOnInit(): void {
    this.loadCusList();
    this.getCusList();
  }

  loadCusList(){
    this.service.getAllCustomerPerNames().subscribe((data:any)=>{
        this.CusList=data;

        this.CustomerSurname=this.CustomerSurname;
        this.IdCus=this.det.IdCus;
        this.CusPhone=this.det.CusPhone;
        this.CusAdress=this.det.CusAdress;
    
    });
  }

  getCusList(){
    this.service.getCusList().subscribe((data:any)=>{
        this.CusList2=data;
        this.IdentityNumber=this.IdentityNumber;
        this.CustomerID=this.CustomerID;
        this.CustomerName=this.CustomerName;
        this.CustomerSurname=this.CustomerSurname;
    
    });
  }

  addDetails(){
    var val = {IdCus:this.IdCus,
              Customer_ID:this.CustomerID,
              CusPhone:this.CusPhone,
              CusAdress:this.CusAdress,
            };
    this.service.addDetails(val).subscribe(res=>{
      alert(res.toString());
    });      
  }
  updateDetails(){
    var val = {IdCus:this.IdCus,
      CustomerID:this.CustomerID,
      CusSurname:this.CustomerSurname,
      CusPhone:this.CusPhone,
      CusAdress:this.CusAdress,
    };
    this.service.addDetails(val).subscribe(res=>{
    alert(res.toString());
    });      
  }

}
