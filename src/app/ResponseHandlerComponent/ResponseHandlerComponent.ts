import { Component, Input, OnChanges } from '@angular/core';


declare var $:any;

@Component({
    selector: 'response-handler',
    templateUrl: 'ResponseHandlerComponent.html',
    styleUrls: ['ResponseHandlerComponent.css']
}) export class ResponseHandlerComponent implements OnChanges{
    @Input() public data;
    @Input() public control;
    @Input() public title;
    
    private eraseSpaces(inp):string{
        if(!inp)
            return '';
        return inp.split(' ').join('');
    }

    ngOnChanges():void{
        this.title = this.eraseSpaces(this.title);
    }

    public openCollapsible(){
        $(`#collapsible${this.title}`).collapsible('open', 0);
    }
}