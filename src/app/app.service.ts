import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class AppService{
    constructor(private http: Http) { }

    getSerie(serie_name): Promise<any> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('serie_name', serie_name);
        return this.http.get('http://api.episodios.net/random2', { search: params } )
        .toPromise().then((res)=>{ return res; }).catch(err => { return err; });
    }
}

