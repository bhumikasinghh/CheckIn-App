import { HttpClient } from '@angular/common/http';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {
  data: any;
  checkInResponse: any;
  noOfBags:any;

  constructor(private route:ActivatedRoute,private service:DataService,private router:Router) { }

  ngOnInit() {
    var id= Number.parseInt(this.route.snapshot.paramMap.get("id"));
    this.service.getReservation(id).subscribe(response=>{
      this.data=response;
    },
        (error) => {
            console.log(error.error);
        }
    );
}
  
checkin(noOfBags)
{
var checkInRequest:any=new Object();

checkInRequest.id=this.data.id;
console.log(checkInRequest.id);
checkInRequest.checkedIn=true;
console.log(checkInRequest.checkedIn);
checkInRequest.numberOfBags=noOfBags;
console.log(checkInRequest.numberOfBags);

this.service.checkin(checkInRequest).subscribe(res=>{
  this.checkInResponse=res;
})
this.router.navigate(['/confirm']);
}
}
