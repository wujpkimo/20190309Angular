import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() keywordChange = new EventEmitter<string>();
  label = '';

  keyword = '';

  highLight = false;

  fontSize = 12;

  constructor(public articlesService: ArticlesService) { }

  ngOnInit() {
  }

  action($event: MouseEvent) {
    // this.highLight = true;
    // this.label = 'get action click!!';
    // this.fontSize++;
    this.keywordChange.emit(this.keyword);
    // this.articlesService.searchAlticles(this.keyword);
    // this.articlesService.keyword = this.keyword;
    console.log(this.keyword);
  }

}
