import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test', }];
  public name ="";
  public password="";

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log('On Submit')
  }

  onServerAdded(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({type:'server', name:serverData.serverName, content:serverData.serverContent})
  }

  onBluePrintAdded(bluePrintData:{serverName:string, serverContent:string}){
    this.serverElements.push({type:'blueprint', name: bluePrintData.serverName, content:bluePrintData.serverContent})
  }

}
