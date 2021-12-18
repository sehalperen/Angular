import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-det',
  templateUrl: './show-det.component.html',
  styleUrls: ['./show-det.component.css']
})
export class ShowDetComponent implements OnInit {

  constructor(private service:SharedService) { }



  DetsList:any=[];
  ModalTitle:string="";
  ActivateAddEditDetComp:boolean=false;
  det: any;

  ngOnInit(): void {
    this.refreshDetailsList();
  }
  
  addClick(){
    this.det={
      IdCus:0,
      CusName:"",
      CusPhone:"",
      CusAdress:"",
      CustomerID:""
    }
    this.ModalTitle="Add Details";
    this.ActivateAddEditDetComp=true;
  }

  closeClick(){
    this.ActivateAddEditDetComp=false;
    this.refreshDetailsList();
  }

  editClick(item: any){
    this.det=item;
    this.ModalTitle="Edit Details";
    this.ActivateAddEditDetComp=true;
  }

  deleteClick(item: any){
    if (confirm('Sure?')){
      this.service.deleteDetails(item.IdCus).subscribe(data=>{
        alert(data.toString());
        this.refreshDetailsList();
      })
    }
  }

  refreshDetailsList(){
    this.service.getDetailsList().subscribe(data=>{
      this.DetsList=data;
    });
  }

}
