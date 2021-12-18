import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cus',
  templateUrl: './show-cus.component.html',
  styleUrls: ['./show-cus.component.css']
})
export class ShowCusComponent implements OnInit {

  constructor(private service:SharedService) { }

 cus: any;

  CustomerList:any=[];

  ngOnInit(): void {
    this.refreshCusList();
  }

  ModalTitle:string="";
  ActivateAddEditCusComp:boolean=false;
  
  addClick(){
    this.cus={
      CustomerID:0,
      CusName:"",
      CusSurname:"",
      IdentityNumber:"",
      IsUnique:""
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCusComp=true;
  }

  closeClick(){
    this.ActivateAddEditCusComp=false;
    this.refreshCusList();
  }

  editClick(item: any){
    this.cus=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCusComp=true;
  }

  deleteClick(item: any){
    if (confirm('Sure?')){
      this.service.deleteCustomer(item.CustomerID).subscribe(data=>{
        alert(data.toString());
        this.refreshCusList();
      })
    }
  }

  refreshCusList(){
    this.service.getCusList().subscribe(data=>{
      this.CustomerList=data;
    });
  }

}
