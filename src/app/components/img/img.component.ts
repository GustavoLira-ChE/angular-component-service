import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  imgDefault = "/assets/image/no_image.png";
  counter = new Date();
  counterFunctionClean: number | undefined;

  value: string = "";
  //@Input() is used to pass values from parent to child components
  @Input("value")
  set changeValue(newValue: string){
    this.value = newValue;
    //add more code
  }
  //@Output and EventEmitter are used to pass values from child to parent components
  @Output() loaded = new EventEmitter<string>();

  //Input test
  @Input() myString: string = "";



  //Component lifecycle
  //Constructor
  constructor(){
    //before render
    //Don't run async calls
    //Run one time
    console.log("constructor", "img url value: " + this.value);
  }
  ngOnChanges(changes: SimpleChanges):void {
    //before render and during
    // changes inputs
    //Run many times
    console.log("ngOnChanges" , "img url value: " + this.value);
    console.log(changes);
  }
  ngOnInit(): void {
    //before render
    // Can run async calls
    //Run one time
    console.log("ngOnInit" , "img url value: " + this.value);

    this.counterFunctionClean =  window.setInterval(() => {
      this.counter = new Date();
      //console.log(this.counter.toLocaleTimeString());
    }, 1000);
  }
  ngAfterViewInit(): void {
    //before render
    //handle children components
    console.log("ngAfterViewInit");
  }
  ngOnDestroy(): void {
    //delete
    console.log("ngOnDestroy");
    window.clearInterval(this.counterFunctionClean);
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
