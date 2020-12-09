import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsFeedsService } from '../news-feeds.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  articles: any;

  constructor(private newsService: NewsFeedsService) {
    this.loadNewsFr();
  }

  ngOnInit(): void {
  }
  
  @ViewChild(IonContent) content: IonContent;
  
  gotToTop() {
    this.content.scrollToTop(1000);
  }

  loadNewsFr(){
    this.newsService.getNews("top-headlines?country=fr").subscribe(news => {
      this.articles = news["articles"];
      this.gotToTop();
    })
  }
  
  loadNewsUk(){
    this.newsService.getNews("top-headlines?country=gb").subscribe(news=>{
      this.articles = news["articles"];
      this.gotToTop();
    })
    
  }
  
  loadNewsDe(){
    this.newsService.getNews("top-headlines?country=de").subscribe(news=>{
      this.articles = news["articles"];
      this.gotToTop();
    })
    
  }

  loadNewsUs(){
    this.newsService.getNews("top-headlines?country=us").subscribe(news=>{
      this.articles = news["articles"];
      this.gotToTop();
    })
  }

  loadNewsRu(){
    this.newsService.getNews("top-headlines?country=ru").subscribe(news => {
      this.articles = news["articles"];
      console.log(this.articles);
      this.gotToTop();
    })
  }

  loadNewsJp(){
    this.newsService.getNews("top-headlines?country=jp").subscribe(news=>{
      this.articles = news["articles"];
      this.gotToTop();
    })
  }

  // toogleLangage(){
  //   this.chooseLanguage = !this.chooseLanguage;
  // }

}
