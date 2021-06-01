import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-group-admin',
  templateUrl: './model-group-admin.component.html',
  styleUrls: ['./model-group-admin.component.scss']
})
export class ModelGroupAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closeModel(){
    const model = document.querySelector(".model-group-container")
    model?.classList.remove("on")
  }
}
