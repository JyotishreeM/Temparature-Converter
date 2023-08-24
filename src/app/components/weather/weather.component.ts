import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  temp:any;
  c:any;
  f:any;
  changed(value:any,type:any){
    if(value){
      if(type==='c'){
        let Farenheight = (value*9/5)+32;
        this.f = Farenheight.toFixed(1);
      }
      else{
        let cel = (value - 32)*(5/9);
        this.c = cel.toFixed(1);
      }
    }
    else{
      this.c=null;
      this.f=null;
    }
  }
}
