import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Cancelled(){
    console.log('To-Do item Cancelled')
  }

  Saved(){
    console.log('Your work has been saved successfully!')
  }
  constructor() {}

}
