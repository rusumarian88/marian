import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { SectionWithTitleComponent } from './components/section-with-title/section-with-title.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutMePageComponent,
    SectionWithTitleComponent,
    PortfolioPageComponent,
    ContactPageComponent,
    PortfolioCardComponent,
    SkillsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
