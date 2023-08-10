import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() icon:string=""

  nrBtns:number=0

    buttons:any[]=[
      
    ]

  cardClick(nr:number){
    this.nrBtns=nr
  }

  constructor() { }

  ngOnInit(): void {
  }

}
