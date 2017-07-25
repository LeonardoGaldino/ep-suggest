import { Component, Input } from '@angular/core';


declare var $:any;

@Component({
    selector: 'response-handler',
    templateUrl: 'ResponseHandlerComponent.html',
    styleUrls: ['ResponseHandlerComponent.css']
}) export class ResponseHandlerComponent {
    @Input() public data;
    @Input() public control;
    @Input() public title;
    

    public openCollapsible(){
        $(`#collapsible${this.title}`).collapsible('open', 0);
    }
}