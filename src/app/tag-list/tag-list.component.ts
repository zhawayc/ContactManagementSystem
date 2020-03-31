import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  tags:any;

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.getTags();
  }

  getTags(){
    this.http.get("http://localhost:3000/tags")
    .toPromise()
    .then(
      data=>{
        this.tags=data;
        console.log(data);
      }
    )
    .catch(
      err=>{
        console.log(err);
      }
    )
  }

  deleteTag(id,e){
    console.log(id);
    e.preventDefault();
    this.http.delete(`http://localhost:3000/tags/${id}`)
    .toPromise()
    .then(
      data=>{
        console.log(data);
        this.getTags();
      }
    )
    .catch(
      err=>{
        console.log(err)
      }
    )
  }
}
