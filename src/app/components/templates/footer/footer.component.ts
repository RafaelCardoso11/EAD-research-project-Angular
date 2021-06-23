import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleFooter(el: number){
    let arrowRotate =  document.querySelector(".arrow-divs-container");
    let itemsHide = document.querySelector(".container-items");
    let titleclick = document.getElementsByClassName("footer-items").item(el)
    console.log(titleclick);
    if(titleclick){
      titleclick?.classList.toggle("on");
    }
  
  
}
}