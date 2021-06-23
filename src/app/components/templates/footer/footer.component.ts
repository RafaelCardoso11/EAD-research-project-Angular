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
  toggleFooter(){
    let arrowRotate =  document.querySelector(".arrow-divs-container");
    let itemsHide = document.querySelector(".container-items");
    
    arrowRotate?.classList.toggle("on");
    itemsHide?.classList.toggle("on");
}
}