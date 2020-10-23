import { Component } from '@angular/core';
import { NewsFeedsService } from '../news-feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: any;

  constructor(private newsService: NewsFeedsService) {
    this.loadNews();
  }
  
  loadNews(){
    this.newsService.getNews("top-headlines?country=fr").subscribe(news => {
      this.articles = news["articles"];
      console.log(this.articles);
    })
  }

}
