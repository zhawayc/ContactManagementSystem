import { Component, OnInit } from '@angular/core';
import { getHtmlTagDefinition } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.css']
})
export class TagEditComponent implements OnInit {

  public tag={
    title:"",
    id:0
  }
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient
  ) { }

  ngOnInit() {
    const id=this.route.snapshot.params.id;
    this.getTagName(id);
  }

  getTagName(id){
    this.http.get(`http://localhost:3000/tags/${id}`)
    .toPromise()
    .then(
      (data:any)=>{
        console.log(data);
        this.tag=data;
        console.log(this.tag);
      }
    )
    .catch(
      err=>{
        console.log(err)
      }
    )
  }

  get tagName(){
    return this.tag.title;
  }

  set tagName(v){
    this.tag.title=v;
  }

  saveTag(){
    const id=this.tag.id;
    this.http.patch(`http://localhost:3000/tags/${id}`,this.tag)
    .toPromise()
    .then(
      data=>{
        this.router.navigate(['/tags']);
      }
    )
    .catch(
      err=>{
        console.log(err);
      }
    )
  }
}
