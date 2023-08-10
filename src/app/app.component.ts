import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marian';

  private tema:number=0

  schimba(){
    if(this.tema==0){
      document.body.style.setProperty("--body-color","black")
      document.body.style.setProperty("--primary-color","aliceblue")
      document.body.style.setProperty("--secondary-color","blue")
      document.body.style.setProperty("--color-btns-controls","#a0abb8")
      document.body.style.setProperty("--bg-color-btns-controls","#4d4c4c")
      document.body.style.setProperty("--bg-color-nav-bar","#18191c")
      this.tema=1
    }
    else if(this.tema==1){
      document.body.style.setProperty("--body-color","white")
      document.body.style.setProperty("--primary-color","#454e56")
      document.body.style.setProperty("--secondary-color","")
      document.body.style.setProperty("--color-btns-controls","#6c7983")
      document.body.style.setProperty("--bg-color-btns-controls","#dde2e7")
      document.body.style.setProperty("--bg-color-nav-bar"," #f8f8f8")
    
      this.tema=0
    }

  }
}
