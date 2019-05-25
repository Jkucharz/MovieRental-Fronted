import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  inputText = 'Pole tekstowe';

  inputText2Way = '';

  button = true;
  showClick = 'Nie ma nic ustawione :)';

  userLogin = false;

  jakosInaczej(){
    this.showClick = 'Przycisk aktywny';
    this.button = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
