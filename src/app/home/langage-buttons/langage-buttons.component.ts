import { Component, OnInit } from '@angular/core';
import { NewsFeedsService } from '../../news-feeds.service';
 
@Component({
  selector: 'app-langage-buttons',
  templateUrl: './langage-buttons.component.html',
  styleUrls: ['./langage-buttons.component.scss'],
})
export class LangageButtonsComponent implements OnInit {
  articles: any;

  constructor( private newsService: NewsFeedsService) {
    this.loadNewsFr();
   }

  ngOnInit() {}
    
  loadNewsFr(){
    this.newsService.getNews("top-headlines?country=fr").subscribe(news => {
      this.articles = news["articles"];
      console.log(this.articles);
    })
  }
  
  loadNewsUs(){
    this.newsService.getNews("top-headlines?country=us").subscribe(news=>{
      this.articles = news["articles"];
    })
  }

  loadNewsDe(){
    this.newsService.getNews("top-headlines?country=de").subscribe(news=>{
      this.articles = news["articles"];
    })
  }

}
