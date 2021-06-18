import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeMenuMobile(){
    let menuOn;
    let menuMobileActive = document.querySelector(".menu-container-mobile")
    let menuMobile = document.querySelector(".menu-mobile")
    menuMobile?.classList.toggle("on", menuOn)
    menuMobileActive?.classList.toggle("on", menuOn)
    menuOn = !menuOn;
  }
}
