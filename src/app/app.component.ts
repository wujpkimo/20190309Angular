import { Component, OnInit } from '@angular/core';
import { PostList2 } from './postlist2';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


  benner1 = 'Conduit';
  subTitle = 'A place to share your <u>knowledge.</u>';

  title = 'demo';


  get list() {
    return this.articlesService.list;
  }
  // list: PostList2[];

  constructor(public articlesService: ArticlesService) {
    // this.list = this.articlesService.list;
  }

  ngOnInit() {
    this.articlesService.loadArticles();
  }
}
