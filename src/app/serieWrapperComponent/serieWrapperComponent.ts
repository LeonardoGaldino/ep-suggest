import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';

declare var Materialize:any;
declare var $:any;

@Component({
    selector: 'serie-wrapper',
    templateUrl: 'serieWrapperComponent.html',
    styleUrls: ['serieWrapperComponent.css'],
    providers: [AppService]
}) export class SerieWrapper{
    constructor(private service: AppService) { }
    @Input() public title;
    @Input() public picName;
    @Input() public index;
    fetched = false;
    title_serie = '';
    episode = '';
    season = '';
    spoiler = '';
    awards = '';
    year = '';
    time = '';
    grade = '';
    more = '';
    poster = '';

    randomize():any{
      if(this.title === ''){
        alert('Nome da série em branco!');
        return;
      }
      this.fetched = false;
      $('#modalEpisode'+this.index).modal('open');
      this.service.getSerie(this.title).then(el => {
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
    
}