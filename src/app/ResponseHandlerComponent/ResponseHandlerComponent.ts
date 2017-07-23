import { Component, OnChanges, Input, AfterViewInit } from '@angular/core'

declare var $:any;

@Component({
    selector: 'response-handler',
    templateUrl: 'ResponseHandlerComponent.html',
    styleUrls: ['ResponseHandlerComponent.css']
}) export class ResponseHandlerComponent implements OnChanges, AfterViewInit{
    @Input() public data;
    @Input() public control;

    ngAfterViewInit():void{
        $('.collapsible').collapsible();
    }

    ngOnChanges():void{
    }
}