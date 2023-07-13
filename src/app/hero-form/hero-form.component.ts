import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

interface Food {
  value: string;
  viewValue: string;
}

interface Color {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  constructor() { }
  
  submitted = false;
  model = new Hero('yourName', 'www@gmail.com');
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  colors: Color[] = [
    {value: '#000000', viewValue: 'black'},
    {value: '#ffffff', viewValue: 'white'}
  ];


  messages: Hero[] = [];
  onSubmit(form: any) {
    this.submitted = true;
    let name = form.controls.name.value;
    let email = form.controls.email.value;
    console.log(form.controls.email.value);
    if(!name.trim() && !email.trim()){
      return;
    }
    const message = new Hero(name, email);
    this.messages.push(message);  //this.messages = [message, ...this.messages];
    form.controls.name.value = 'yourName'
    form.controls.email.value = '';
  }

  ngOnInit(): void {
  }

}
