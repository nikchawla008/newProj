import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  textVisible = true
  constructor() { }


  @Output() collapsedEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.collapsedEvent.emit(this.textVisible)
  }

  menuButton(){
    this.textVisible = !this.textVisible
    this.collapsedEvent.emit(this.textVisible)
  }

}
