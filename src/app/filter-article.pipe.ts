import { Pipe, PipeTransform } from '@angular/core';
import { PostList2 } from './postlist2';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  transform(articles: PostList2[], keyword?: string): any {
    if (articles && keyword) {
      return articles.filter(article => article.title.indexOf(keyword) !== -1);
    } else {
      return articles;
    }
  }

}
