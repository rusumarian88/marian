import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  
  @Input() icon:string=""
  @Input() photo:string=""
  @Input() title:string=""
  @Input() githubLink:string=""
  @Input() websiteLink:string=""


  constructor() { }

  ngOnInit(): void {
  }

}
