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
      title:"Tetra.com",
      githubLink:"Github",
      websiteLink:"https://tetracom.ai/",
    },
    { 
      photo:"/assets/fanpriority.png",
      title:"Priority by FAN",
      githubLink:"Github",
      websiteLink:"https://fanpriority.web.app/",
    },
    {
      photo:"/assets/auditica.png",
      title:"Auditica (it's not responsive)",
      githubLink:"https://github.com/rusumarian88/auditica.git",
      websiteLink:"https://auditica.web.app/",
    },
    { 
      photo:"/assets/stripe.png",
      title:"Stripe",
      githubLink:"https://github.com/rusumarian88/stripe.git",
      websiteLink:"https://stripe1.web.app/",
    },
    {
      photo:"/assets/travel.png",
      title:"Travel Day.com",
      githubLink:"https://github.com/rusumarian88/travel.git",
      websiteLink:"https://sitetravel.web.app/",
    },
    {
      photo:"/assets/salon.png",
      title:"Lariss Beauty Salon",
      githubLink:"https://github.com/rusumarian88/salon-oradea.git",
      websiteLink:"https://larissbeauty.web.app/",
    },
    {
      photo:"/assets/brand.png",
      title:"Brand.tm",
      githubLink:"https://github.com/rusumarian88/brand.git",
      websiteLink:"https://brandd.web.app/",
    },
    {
      photo:"/assets/portfolio-marian.png",
      title:"My Portfolio",
      githubLink:"https://github.com/rusumarian88/marian.git",
      websiteLink:"https://marian-rusu.ro/portofoliu",
    },
    {
      photo:"/assets/nexcent.png",
      title:"Nexcent",
      githubLink:"https://github.com/rusumarian88/nexcent.git",
      websiteLink:"https://nexcent.web.app/",
    },
    {
      photo:"/assets/start.png",
      title:"Start",
      githubLink:"https://github.com/rusumarian88/start.git",
      websiteLink:"https://startt.web.app/",
    },
    {
      photo:"/assets/responsive.png",
      title:"Team.Flow",
      githubLink:"https://github.com/rusumarian88/responsive.git",
      websiteLink:"https://respons.web.app/",
    },
    {
      photo:"/assets/ozart.png",
      title:"Ozart",
      githubLink:"https://github.com/rusumarian88/ozart.git",
      websiteLink:"https://ozartt.web.app/",
    },
    {
      photo:"/assets/technology.png",
      title:"Technology",
      githubLink:"https://github.com/rusumarian88/technology.git",
      websiteLink:"https://portofoliu-marian.web.app/",
    },
    {
      photo:"/assets/tiam.png",
      title:"Tiam",
      githubLink:"Github",
      websiteLink:"https://columbian.web.app/",
    },
  ]

  constructor() { }
}
