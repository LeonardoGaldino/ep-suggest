import { Component, Input } from '@angular/core'

declare var $:any;

@Component({
    selector: 'response-handler',
    templateUrl: 'ResponseHandlerComponent.html',
    styleUrls: ['ResponseHandlerComponent.css']
}) export class ResponseHandlerComponent {
    @Input() public data;
    @Input() public control;
}