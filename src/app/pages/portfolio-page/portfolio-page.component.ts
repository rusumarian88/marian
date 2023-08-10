import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
// import {BreakpointObserver,BreakpointState} from '@angular/cdk/layout';


@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  nrportfolios=12

  constructor(
    public portfolioService:PortfolioService
  ) { 

    // BreakpointObserver.observe("(max-width:640px)").subscribe((result:BreakpointState)=>{
    //   if(result.matches){
    //     this.nrportfolios=6
    //   }else{
    //     this.nrportfolios=this.portfolioService.portfolios.length
    //   }
    // })
    

  }

  ngOnInit(): void {
  }

  
  getPortfolios():any{
    return this.portfolioService.portfolios.slice(0,this.nrportfolios)
  }

  viewMore(){
    this.nrportfolios=this.portfolioService.portfolios.length
  }


}
