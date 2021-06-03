import { Component, OnInit } from '@angular/core';
import * as Cookies from 'js-cookie';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  buttonClick =  true;
  constructor() { }

  ngOnInit(): void {
  }
  showModelGroup(){
    const modelShow = document.querySelector(".model-group-container")
    modelShow?.classList.add("on")
  }
  buttonTradeColor(){
    const buttonTradeColorView = document.querySelector(".buttonTradeColor")
    buttonTradeColorView?.classList.toggle("on", this.buttonClick)
    this.buttonClick = !this.buttonClick
  }
 
}
