import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  formData={
    name:"",
    email:"",
    phone:"",
    id:0
  };

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    const contactId=this.route.snapshot.params.id;
    this.getContactById(contactId);
  }

  getContactById(id){
    this.http.get(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then(
      (data:any)=>{
        this.formData=data;
        console.log(data);
      }
    )
    .catch(
      err=>{
        console.log(err);
      }
    )
  }

  saveContact(){
    const id=this.formData.id;
    this.http.patch(`http://localhost:3000/contacts/${id}`,this.formData)
    .toPromise()
    .then(
      data=>{
        this.router.navigate(['/contacts']);
      }
    )
    .catch(
      err=>{
        console.log(err);
      }
    )
  }

  get formName(){
    return this.formData.name;
  }

  get formEmail(){
    return this.formData.email;
  }

  get formPhone(){
    return this.formData.phone;
  }

  set formName(v){
    this.formData.name=v;
  }

  set formEmail(v){
    this.formData.email=v;
  }

  set formPhone(v){
    this.formData.phone=v;
  }

}
