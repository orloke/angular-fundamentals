import { Component } from '@angular/core';
import { CellPhone } from '../types/cellPhone';

@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css']
})
export class RenderListComponent {
  cellPhones: CellPhone[] = [
    {id: 1, name: 'realme 8', description:'muito bom', soldOff: false},
    {id: 2, name: 'motorola', description:'já foi muito bom', soldOff: false},
    {id: 3, name: 'Samsung', soldOff: true},
  ]
}
