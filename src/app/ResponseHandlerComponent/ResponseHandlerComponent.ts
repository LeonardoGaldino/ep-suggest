import { Component, OnChanges, Input } from '@angular/core'

@Component({
    selector: 'response-handler',
    templateUrl: 'ResponseHandlerComponent.html',
    styleUrls: ['ResponseHandlerComponent.css']
}) export class ResponseHandlerComponent implements OnChanges{
    @Input() public data;
    @Input() public control;

    ngOnChanges():void{
        console.log(this.data);
        console.log(this.control);
    }
}