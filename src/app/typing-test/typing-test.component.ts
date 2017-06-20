import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-typing-test',
  templateUrl: './typing-test.component.html',
  styleUrls: ['./typing-test.component.css']
})

export class TypingTestComponent implements OnInit {
  codeText: string;
  charsArray: string[];
  displayArray: string[];
  inputtedKey: string;
  successArray: string[] = [];
  hightlightColor: string = "#73d073";
  failureArray: string[] = [];
  totalKeys: number = 0;
  accuracy: number = 100;
  progress: number = 0;
  successCounter: number = 0;

  constructor() { }

  ngOnInit() {
    this.codeText = "animateToOverview: function(animationType) { for (let w = 0; w < this._workspaces.length; w++) { if (animationType == AnimationType.ZOOM)";
    this.charsArray = this.codeText.split('');
    this.displayArray = this.codeText.split('');
  }

  @HostListener('document:keypress', ['$event'])
  whatKey(event: KeyboardEvent) {
    this.inputtedKey = event.key;
    this.totalKeys += 1;
      if (this.charsArray[this.successCounter] === this.inputtedKey) {
        this.successArray.push(this.charsArray[this.successCounter]);
        this.hightlightColor = "#73d073";
        this.successCounter += 1;
      } else {
        this.failureArray.push(this.inputtedKey)
        this.hightlightColor = "#ff8787";
      }
    console.log(this.successCounter);
    console.log(this.failureArray);
    this.accuracy = (this.successArray.length / this.totalKeys) * 100;
    this.progress = (this.successArray.length / this.codeText.length) * 100;
    }

}
