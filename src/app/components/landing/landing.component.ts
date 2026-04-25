import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { SeriesComponent } from '../series/series.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SeriesComponent,
    BenefitsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {}