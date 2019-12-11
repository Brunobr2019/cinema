import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public lista:Array<string> = ['teste', 'teste 1', 'teste 2', 'teste 3', 'teste 4'];

  constructor() {}

}
