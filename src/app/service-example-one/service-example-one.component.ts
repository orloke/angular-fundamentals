import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-service-example-one',
  templateUrl: './service-example-one.component.html',
  styleUrls: ['./service-example-one.component.css']
})
export class ServiceExampleOneComponent {

  constructor(private logger:LoggerService){}

  name = '';

  addName(){
    this.logger.logar(`O nome ${this.name} foi adicionado`)
  }
}
