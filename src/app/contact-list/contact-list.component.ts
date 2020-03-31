import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:any;

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(){
    this.http.get("http://localhost:3000/contacts")
    .toPromise()
    .then(
      data=>{
        this.contacts=data;
        console.log(data);
      }
    )
    .catch(
      err=>{
        console.log(err);
      }
    )
  }

  deleteContact(id,e){
    console.log(id);
    e.preventDefault();
    this.http.delete(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then(
      data=>{
        console.log(data);
        this.getContacts();
      }
    )
    .catch(
      err=>{
        console.log(err)
      }
    )
  }

}
