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
    let titleclick = document.getElementsByClassName("footer-items").item(el)
    if(titleclick){
      titleclick?.classList.toggle("on");
    }
  
  
}
}