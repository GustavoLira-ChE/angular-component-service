import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit{
  ngOnInit(): void {

  }

  imgDefault = "";
  //@Input() is used to pass values from parent to child components
  @Input() value: string = "";

  //@Output and EventEmitter are used to pass values from child to parent components
  @Output() loaded = new EventEmitter<string>();

  imgError () {
    this.value = this.imgDefault;
  }

  imgLoaded() {
    console.log("child log");
    this.loaded.emit(this.value);
  }

}
