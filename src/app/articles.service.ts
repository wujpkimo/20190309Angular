import { Injectable } from '@angular/core';
import { PostList2 } from './postlist2';
import { HttpClient } from '@angular/common/http';
import { Articles } from './articles';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  originalList: PostList2[] = [{
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    slug: 'zp7yqc',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    createdAt: '2018-05-11T21:58:27.358Z',
    updatedAt: '2018-05-11T21:58:27.358Z',
    tagList: [],
    description: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    author: {
      username: 'Eliseo@gardner.biz',
      bio: 'Eliseo',
      image: 'http://placekitten.com/200/300',
      following: false
    },
    favorited: false,
    favoritesCount: 1
  },
  {
    title: 'quo vero reiciendis velit similique earum',
    slug: 'p3vcsw',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    createdAt: '2018-05-11T21:55:00.722Z',
    updatedAt: '2018-05-11T21:55:00.722Z',
    tagList: [],
    description: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    author: {
      username: 'Jayne_Kuhic@sydney.com',
      bio: 'Jayne_Kuhic',
      image: 'http://placekitten.com/200/300',
      following: false
    },
    favorited: false,
    favoritesCount: 3
  },
  {
    title: 'odio adipisci rerum aut animi',
    slug: '3c69lg',
    body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    createdAt: '2018-05-11T19:49:35.917Z',
    updatedAt: '2018-05-11T19:49:35.917Z',
    tagList: [],
    description: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    author: {
      username: 'Lew@alysha.tv',
      bio: 'Lew',
      image: 'http://placekitten.com/200/300',
      following: false
    },
    favorited: false,
    favoritesCount: 5
  }];

  list = this.originalList;

  keyword: string;
  constructor(private httpClient: HttpClient) { }

  loadArticles() {
    this.httpClient.get('https://conduit.productionready.io/api/articles').subscribe((response: Articles) => {
      this.list = response.articles;
    });
  }

  getArticles(): Observable<PostList2[]> {
    return this.httpClient.get('https://conduit.productionready.io/api/articles').pipe(
      map((response: Articles) => response.articles)
    );
    // of('').pipe() {
    //   debounceTime(1000),
    //   filter(keyword => keyword.lens >= 3),
    //   distince()
    // };
  }
  searchAlticles($event: string) {
    console.log($event);
    if ($event) {
      this.list = this.list.filter(alticle => alticle.title.indexOf($event) !== -1);
    } else {
      this.loadArticles();
    }
  }

  searchArticles(keyword: string) {
    this.keyword = keyword;
  }


}
