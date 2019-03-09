import { Component, OnInit } from '@angular/core';
import { PostList2 } from './postlist2';
import { ArticlesService } from './articles.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


  benner1 = 'Conduit';
  subTitle = 'A place to share your <u>knowledge.</u>';

  title = 'demo';

  list$: Observable<PostList2[]>;

  get list() {
    return this.articlesService.list;
  }
  // list: PostList2[];

  constructor(public articlesService: ArticlesService) {
    // this.list = this.articlesService.list;
  }

  ngOnInit() {
    // this.articlesService.loadArticles();
    this.list$ = this.articlesService.getArticles();
  }

  searchAlticles($event) {
    console.log($event);
    if ($event) {
      this.list$ = this.list$.pipe(map(response => response.filter(alticle => alticle.title.indexOf($event) !== -1)));
    } else {
      this.list$ = this.articlesService.getArticles();
    }
  }
}
