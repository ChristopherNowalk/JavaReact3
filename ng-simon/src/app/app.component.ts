import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-simon';

  hid: boolean = true;
  hid0: boolean = false;
  hid1: boolean = true;
  hid2: boolean = true;
  hid3: boolean = true;
  hid4: boolean = true;

  player: string[] = [];
  game: string[] = [];

  playAudio1(){
    let audio = new Audio();
    audio.src = "../assets/btn1a.wav";
    audio.load();
    audio.play();
  }
  

  playAudio2(){
    let audio = new Audio();
    audio.src = "../assets/btn2a.wav";
    audio.load();
    audio.play();
  }
  

  playAudio3(){
    let audio = new Audio();
    audio.src = "../assets/btn3a.wav";
    audio.load();
    audio.play();
  }
  

  playAudio4(){
    let audio = new Audio();
    audio.src = "../assets/btn4a.wav";
    audio.load();
    audio.play();
  }
 

  onPress(cat: any){

    if(cat == 'imc1'){
      this.hid = false;
      this.hid1 = true;
      this.hid2 = false;
      this.hid3 = false;
      this.hid4 = false; 
      this.player.push("blue");
      this.playAudio1();
      window.setTimeout(()=>{
        this.hid = true;
        this.hid1 = false;
        this.gameCheck();
     }, 500);
    }
    if(cat == 'imc2'){
      this.hid = false;
      this.hid1 = false;
      this.hid2 = true; 
      this.hid3 = false;
      this.hid4 = false;
      this.player.push("green");
      this.playAudio2();
      window.setTimeout(()=>{
        this.hid = true;
        this.hid2 = false;
        this.gameCheck();
     }, 500);
    }
    if(cat == 'imc3'){
      this.hid = false;
      this.hid1 = false;
      this.hid2 = false;
      this.hid3 = true;
      this.hid4 = false;
      this.player.push("red");
      this.playAudio3(); 
      window.setTimeout(()=>{
        this.hid = true;
        this.hid3 = false;
        this.gameCheck();
     }, 500);
    }
    if(cat == 'imc4'){
      this.hid = false;
      this.hid1 = false;
      this.hid2 = false;
      this.hid3 = false;
      this.hid4 = true;
      this.player.push("yellow");
      this.playAudio4(); 
      window.setTimeout(()=>{
        this.hid = true;
        this.hid4 = false;
        this.gameCheck();
     }, 500);
    }
  }

  ngOnInit(){
    this.game.push(this.randomColor());
  }

  randomColor(){
    const colors = ["blue","green","red","yellow"];
    return colors[Math.floor(Math.random() * 4)]
  }

  gameCheck(){
    console.log(this.player);
    console.log(this.game);
    if (this.game === this.player){
      alert("Game Over!");
      this.player = [];
      this.game = [];
      this.game.push(this.randomColor());
    }else {
      this.game.push(this.randomColor());
      this.simonGenerator();
    }
  }

  simonGenerator(){
    let i = 0;
    while (i < this.game.length){
      console.log(i);
      console.log(this.game[i]);
      switch(this.game[i]){
        case "blue":
          this.hid = false;
          this.hid1 = true;
          this.hid2 = false;
          this.hid3 = false;
          this.hid4 = false; 
          this.playAudio1();
          window.setTimeout(()=>{
            this.hid = true;
            this.hid1 = false;
        }, 500);
          break;
        case "green":
          this.hid = false;
          this.hid1 = false;
          this.hid2 = true; 
          this.hid3 = false;
          this.hid4 = false;
          this.playAudio2();
          window.setTimeout(()=>{
            this.hid = true;
            this.hid2 = false;
         }, 500);
          break;
        case "red":
          this.hid = false;
          this.hid1 = false;
          this.hid2 = false;
          this.hid3 = true;
          this.hid4 = false;
          this.playAudio3(); 
          window.setTimeout(()=>{
            this.hid = true;
            this.hid3 = false;
        }, 500);
          break;
        case "yellow":
          this.hid = false;
          this.hid1 = false;
          this.hid2 = false;
          this.hid3 = false;
          this.hid4 = true;
          this.playAudio4(); 
          window.setTimeout(()=>{
            this.hid = true;
            this.hid4 = false;
         }, 1500);
          break;
      }
      console.log(this.game[i]);
      i++;
    }
  }

  gameRunning(){
    this.player = [];
    this.game = [];
    this.game.push(this.randomColor());
    this.simonGenerator();
  }
}




