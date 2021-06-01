import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent implements OnInit {
 
  buttonClick = true;
  constructor() { }

  ngOnInit(): void {
  }
  menuShow(): void{
    const menu = document.querySelector(".menu-button-hamburguer");
    const navContainer = document.querySelector(".nav-container")
    const minMenuBottomEnd = document.querySelector(".backgroud-tradeColor")
    menu?.classList.toggle("on", this.buttonClick)
    navContainer?.classList.toggle("on", this.buttonClick)
    minMenuBottomEnd?.classList.toggle("on", this.buttonClick)
    this.buttonClick = !this.buttonClick
  }
}
