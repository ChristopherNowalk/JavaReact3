import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  record:boolean = false;
  gameOver:boolean = false;
  userClicks:number[] = [];
  sequence:number[] =[];
  index:number = 0;

  title = 'ng-simon';

  hid: boolean = true;
  hid0: boolean = false;
  hid1: boolean = true;
  hid2: boolean = true;
  hid3: boolean = true;
  hid4: boolean = true;



  onPress(cat: any){

    if(cat == 'imc1'){
      this.hid = false;
      this.hid1 = true;
      this.hid2 = false;
      this.hid3 = false;
      this.hid4 = false; 
      window.setTimeout(()=>{
        this.hid = true;
        this.hid1 = false;
     }, 500);
    }
    if(cat == 'imc2'){
      this.hid = false;
      this.hid1 = false;
      this.hid2 = true; 
      this.hid3 = false;
      this.hid4 = false;
      window.setTimeout(()=>{
        this.hid = true;
        this.hid2 = false;
     }, 500);
    }
    if(cat == 'imc3'){
      this.hid = false;
      this.hid1 = false;
      this.hid2 = false;
      this.hid3 = true;
      this.hid4 = false; 
      window.setTimeout(()=>{
        this.hid = true;
        this.hid3 = false;
     }, 500);
    }
    if(cat == 'imc4'){
      this.hid = false;
      this.hid1 = false;
      this.hid2 = false;
      this.hid3 = false;
      this.hid4 = true; 
      window.setTimeout(()=>{
        this.hid = true;
        this.hid4 = false;
     }, 500);
    }

   
  }


  recordUser(button:number){
    if(this.record != false){
      this.userClicks.push(button)

      for(var i = 0; i<this.userClicks.length;i++){
        if(this.userClicks[i] != this.sequence[i]){
          this.record = false;
          this.gameOver = true;
          break;
        }
      }
  }
  }

}




