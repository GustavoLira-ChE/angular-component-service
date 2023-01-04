import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  imgDefault = "";
  //@Input() is used to pass values from parent to child components
  @Input() value: string = "";
  //@Output and EventEmitter are used to pass values from child to parent components
  @Output() loaded = new EventEmitter<string>();

  //Component lifecycle
  //Constructor
  constructor(){
    //before render
    //Don't run async calls
    //Run one time
    console.log("constructor", "img url value: " + this.value);
  }
  ngOnChanges():void {
    //before render and during
    // changes inputs
    //Run many times
    console.log("ngOnChanges" , "img url value: " + this.value);
  }
  ngOnInit(): void {
    //before render
    // Can run async calls
    //Run one time
    console.log("ngOnInit" , "img url value: " + this.value);
  }
  ngAfterViewInit(): void {
    //before render
    //handle children components
    console.log("ngAfterViewInit");
  }
  ngOnDestroy(): void {
    //delete
    console.log("ngOnDestroy");
  }


  //Methods
  imgError () {
    this.value = this.imgDefault;
  }

  imgLoaded() {
    console.log("child log");
    this.loaded.emit(this.value);
  }

}
