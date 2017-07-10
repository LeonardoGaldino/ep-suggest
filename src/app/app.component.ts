import { Component, AfterViewChecked } from '@angular/core';
import { AppService } from './app.service';

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements AfterViewChecked {
    constructor(private service: AppService) { }
    series = [{
      title: 'Dexter',
      picName: 'dexter.png'
    },{
      title: 'How I met your mother',
      picName: 'HIMYM.png'
    },{
      title: "Two and a half men",
      picName: "2HM.png"
    },{
      title: 'Friends',
      picName: 'friends.png'
    },{
      title: 'Rick and Morty',
      picName: 'rickandmorty.png'
    },{
      title: 'Modern Family',
      picName: 'modernfamily.png'
    },{
      title: 'Family guy',
      picName: 'familyguy.png'
    }];
    fetched = false;
    title_serie = '';
    episode = '';
    season = '';
    awards = '';
    spoiler = '';
    grade = '';
    year = '';
    time = '';
    poster = '';
    more = '';

    randomize(serie_name):any{
      if(serie_name === ''){
        alert('Nome da série em branco!');
        return;
      }
      $('#modalEpisode').modal('open');
      this.fetched = false;
      this.service.getSerie(serie_name).then(el => {
        if(el.Response === 'True'){
          this.title_serie = el.title;
          this.episode = el.ep;
          this.season = el.season;
          this.awards = el.awards;
          this.spoiler = el.spoiler;
          this.year = el.year;
          this.time = el.time;
          this.grade = el.grade;
          this.more = el.more;
          this.poster = el.poster;
          this.fetched = true;
        }
        else
          alert(el.error);
      }).catch(err => console.log(err));
    }

    randomize_again(serie_name):any{
      this.fetched = false;
      this.service.getSerie(serie_name).then(el => {
        if(el.Response === 'True'){
          this.title_serie = el.title;
          this.episode = el.ep;
          this.season = el.season;
          this.awards = el.awards;
          this.spoiler = el.spoiler;
          this.year = el.year;
          this.time = el.time;
          this.grade = el.grade;
          this.more = el.more;
          this.poster = el.poster;
          this.fetched = true;
        }
        else
          alert(el.error);
      }).catch(err => console.log(err));
    }

    ngAfterViewChecked(){
      $('.collapsible').collapsible();
    }

}
