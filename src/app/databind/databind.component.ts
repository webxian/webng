import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent{
  flag:boolean = true;
  show(){
    this.flag = !this.flag;
  }
  constructor() { }

  ngOnInit() {
  }
  show1:string;
  doinput(e){
    this.show1 = e.target.value;
  }

}
