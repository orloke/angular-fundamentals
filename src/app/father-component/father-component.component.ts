import { Component } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.css']
})
export class FatherComponentComponent {
  lastName = "Dering de Lima"

  showFullName(fullName:any){
    alert(`O nome completo é ${fullName}`)
  }
}
