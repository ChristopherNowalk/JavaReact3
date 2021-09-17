import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'q')
    {
      console.log("q");
      this.onPress('imc1');
    }
    if(event.key === 'w')
    {
      console.log("w");
      this.onPress('imc2');
    }
    if(event.key === 'a')
    {
      console.log("a");
      this.onPress('imc3');
    }
    if(event.key === 's')
    {
      console.log("s");
      this.onPress('imc4');
    }
  }


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


  randomNum : number = 0;
  //array for the players input to check agains the computers
  playerInput : number[] = [];
  //array which the player needs to match with their inputs
  pattern : number[] = [];

  ngOnInit() {
    //on init we should reset the game
    this.playerInput = [];
    this.pattern = [];
  }

  //we should have a button to start the game so the player is ready to start memorizing the pattern
  startGame() {

  }

  sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  computerPattern: string[] = []
  async playBack() {
    this.computerPattern = []
    // right now the size range is 2-4 so make it easier to test can really be any range.
    var randomSize = this.generateRandomNumGeneric(2, 4);

    for (let i=0;i<randomSize;i++) {
      var randomColor = this.generateRandomNumGeneric(1, 4)
      this.computerPattern.push('imc'+randomColor);
    }

    for (var s of this.computerPattern) {
      this.onPress(s);
      await this.sleep(800);
    }

    }

  playPattern(arr : number[]) {
    //run through the pattern array and light up each button that corresponds to the number in the array
  }

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
      this.playAudio1();
      console.log('1');
      //when the player presses this button, 1 will be put into their array
      this.playerInput.push(1);
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
      this.playAudio2();
      console.log('2');
      //when the player presses this button, 2 will be put into their array
      this.playerInput.push(2);
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
      this.playAudio3(); 
      console.log('3');
      //when the player presses this button, 3 will be put into their array
      this.playerInput.push(3);
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
      this.playAudio4(); 
      console.log('4');
      //when the player presses this button, 4 will be put into their array
      this.playerInput.push(4);
      window.setTimeout(()=>{
        this.hid = true;
        this.hid4 = false;
     }, 500);
    }

   
  }

  //for the random number generation
  generateRandomNum(min: number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(this.randomNum);
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

  generateRandomNumGeneric(min: number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}




