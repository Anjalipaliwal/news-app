import { Component } from '@angular/core';
import {DataService} from './data.service';
import {Observable}  from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*This is the component for main parent page*/ 
  /*2 objects for source and main article of news*/ 
  mArticles:object;
  mSources:object;
  title = 'news-app';
  constructor(private data:DataService,private http: HttpClient ){}
  /* this has 2 functions which implememnts to retriwve data and  display by binding with HTML using iur Service*/ 
  ngOnInit(){
    this.data.initArticles().subscribe(data => this.mArticles = data['articles']);

    //load news sources
    this.data.initSources().subscribe(data=> this.mSources = data['sources']);  
  }
  searchArticles(source){
    console.log("selected source   is: "+source);
    this.data.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
