import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable}  from 'rxjs';
import {ActivatedRoute} from '@angular/router'
import { Source } from 'webpack-sources';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    mArticles:object
    mSources:object
  constructor(private data:DataService,private route:ActivatedRoute) { 
    this.route.params.subscribe(
      params=>this.mArticles=params.id
    )
  }

  ngOnInit() {
    this.data.initArticles().subscribe(
      data => this.mArticles = data['articles']
    )
  }

}
