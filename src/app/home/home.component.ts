import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isActive = true;

  @Input()
  srvElement!: { type: string; name: string; content: string; };
  public isPrimary = true;
  public name = 'Kajax KuKi';
  public age;
  public comments="";
  public posts="";
  public disabled=true;


  public vehicles = ['Toyota','Honda','Suzuki'];


  constructor(private common:CommonService, private serverHttp:ServerHttpService) {
    this.age = common.age;
  }

  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe(data => {console.log(data);
    this.name = data.name;
    this.age = data.age;  });
    console.log("init");

    this.serverHttp.getComments().subscribe((data) => {console.log('comments',data);
    this.comments = data;});

    this.serverHttp.getPosts().subscribe((data) => {console.log('posts',data);
    this.posts = data;});

  }

  public addPost(){
    const newData = {title: 'testing', author:'author testing'};
    this.serverHttp.addPosts(newData).subscribe((data) => {
      console.log('addPost',data);
    });
  }
   public tangtuoi(){
     this.common.age++;
     this.age = this.common.age;
   }

   public onClick(event:any){
     console.log(event.target.value);
   }

   public getName(event:any){
     console.log(event.target.value);
   }

}
