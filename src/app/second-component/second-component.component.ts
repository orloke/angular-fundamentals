import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent {
  nome = 'Júnior Dering';
  dataNascimento = '1995-01-19';
  imgUrl = '/assets/praia.jpg'

  showBirthDate(){
    alert(`A data de nascimento é: ${this.dataNascimento}`)
  }
}
