import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  //public name = new FormControl('');

  profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public updateName(){
    //this.name.setValue("Tam Bui");
  }

  public onSubmit(){
    console.log('onSubmit');
    console.log(this.profileForm);
  }

}
