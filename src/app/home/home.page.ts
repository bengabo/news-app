import { Component, OnInit } from '@angular/core';
import { NewsFeedsService } from '../news-feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  articles: any;
  // chooseLanguage: boolean = true;
  // chooseFr: boolean = false;
  // chooseUs: boolean = false;

  constructor(private newsService: NewsFeedsService) {
    this.loadNewsFr();
  }

  ngOnInit(): void {
  }
  
  loadNewsFr(){
    this.newsService.getNews("top-headlines?country=fr").subscribe(news => {
      this.articles = news["articles"];
      // console.log(this.articles);
    })
  }
  
  loadNewsDe(){
    this.newsService.getNews("top-headlines?country=de").subscribe(news=>{
      this.articles = news["articles"];
    })
    
  }

  loadNewsUs(){
    this.newsService.getNews("top-headlines?country=us").subscribe(news=>{
      this.articles = news["articles"];
    })
  }

  loadNewsRu(){
    this.newsService.getNews("top-headlines?country=ru").subscribe(news => {
      this.articles = news["articles"];
      console.log(this.articles);
    })
  }

  loadNewsJp(){
    this.newsService.getNews("top-headlines?country=jp").subscribe(news=>{
      this.articles = news["articles"];
    })
  }

  // toogleLangage(){
  //   this.chooseLanguage = !this.chooseLanguage;
  // }

}
