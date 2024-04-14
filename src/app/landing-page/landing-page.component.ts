import { Component } from '@angular/core';
import {HeroComponent} from "./hero/hero.component";
import {SolutionSectionComponent} from "./solution-section/solution-section.component";
import {ExpertiseSectionComponent} from "./expertise-section/expertise-section.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroComponent,
    SolutionSectionComponent,
    ExpertiseSectionComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
