import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service-example-two',
  templateUrl: './service-example-two.component.html',
  styleUrls: ['./service-example-two.component.css']
})
export class ServiceExampleTwoComponent {

  constructor(public logger: LoggerService){}
  description = '';

}
