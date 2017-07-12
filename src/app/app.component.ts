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
    public control = 0;
    public data = {
      title_serie: '',
      episode: '',
      season: '',
      awards: '',
      spoiler: '',
      grade: '',
      year: '',
      time: '',
      poster: '',
      more: '',
      netflixId: ''
    };


    error_handling(el):void{
      this.control = 2;
    }

    randomize(serie_name):void{
      if(serie_name === ''){
        alert('Nome da série em branco!');
        return;
      }
      $('#modalEpisode').modal('open');
      this.control = 0;
      this.service.getSerie(serie_name).then(el => {
        if(el.ok){
          el = el.json();
          this.update_attrs(el);
        }
        else
          this.error_handling(el);
      }).catch(err => this.error_handling(err));
    }

    randomize_again(serie_name):void{
      this.control = 0;
      this.service.getSerie(serie_name).then(el => {
        if(el.ok){
          el = el.json();
          this.update_attrs(el);
        }
        else
          this.error_handling(el);
      }).catch(err => this.error_handling(err));
    }

    update_attrs(el):void{
      this.data.title_serie = el.title;
      this.data.episode = el.ep;
      this.data.season = el.season;
      this.data.awards = el.awards;
      this.data.spoiler = el.spoiler;
      this.data.year = el.year;
      this.data.time = el.time;
      this.data.grade = el.grade;
      this.data.more = el.more;
      this.data.poster = el.poster;
      this.data.netflixId = el.netflixId;
      this.control = 1;
    }

    ngAfterViewChecked(){
      $('.collapsible').collapsible();
    }

}
