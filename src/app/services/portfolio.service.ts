import { Injectable } from '@angular/core';

export interface Portfolio{
  photo?:string;
  title?:string;
  githubLink?:string;
  websiteLink?:string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  
  portfolios=[
    { 
      photo:"/assets/tetracom.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://tetracom.ai/",
    },
    { 
      photo:"/assets/fanpriority.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://fanpriority.web.app/",
    },
    { 
      photo:"/assets/stripe.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://stripe1.web.app/",
    },
    {
      photo:"/assets/auditica.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://auditica.web.app/",
    },
    {
      photo:"/assets/brand.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://brandd.web.app/",
    },
    {
      photo:"/assets/besnik.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://besnik.web.app/",
    },
    {
      photo:"/assets/salon.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://larissbeauty.web.app/",
    },
    {
      photo:"/assets/travel.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://sitetravel.web.app/",
    },
    {
      photo:"/assets/nexcent.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://nexcent.web.app/",
    },
    {
      photo:"/assets/technology.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://portofoliu-marian.web.app/",
    },
    {
      photo:"/assets/start.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://startt.web.app/",
    },
    {
      photo:"/assets/ozart.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://ozartt.web.app/",
    },
    {
      photo:"/assets/responsive.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://respons.web.app/",
    },
      {
      photo:"/assets/tiam.png",
      title:"Portfolio Website",
      githubLink:"Github",
      websiteLink:"https://columbian.web.app/",
    },
  ]

  constructor() { }
}
