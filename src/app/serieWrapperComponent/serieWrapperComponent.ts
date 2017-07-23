import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';

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
    public control = 0;
    public data = {
      title_serie: '',
      episode: '',
      season: '',
      spoiler: '',
      awards: '',
      year: '',
      time: '',
      grade: '',
      more: '',
      poster: '',
      netflixId: ''
    };


    error_handling(err):void{
      this.control = 2;
      console.log(err);
    }

    randomize():void{
      if(this.title === ''){
        alert('Nome da série em branco!');
        return;
      }
      this.control = 0;
      $('#modalEpisode'+this.index).modal('open');
      this.service.getSerie(this.title).then(el => {
        el = el.json();
        if(el.Response)
          this.update_attrs(el);
        else
          this.error_handling(el);
      }).catch(err => this.error_handling(err));
    }

    randomize_again():void{
      this.control = 0;
      this.service.getSerie(this.title).then(el => {
        el = el.json();
        if(el.Response)
          this.update_attrs(el);
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
    
}