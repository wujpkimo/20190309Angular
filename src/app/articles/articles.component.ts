import { Component, OnInit, Input } from '@angular/core';
import { PostList2 } from '../postlist2';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() list: PostList2[];


  constructor() { }

  ngOnInit() {
  }

}
