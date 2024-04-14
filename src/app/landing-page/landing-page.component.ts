import {Component, OnInit} from '@angular/core';
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
export class LandingPageComponent implements OnInit {
  idlePeriod = 100;
  animationDuration = 1000;
  lastAnimation = 0;
  index = 0;
  content: any;


  ngOnInit(): void {

  //   window.onload = () => {
  //     this.content[0].scrollIntoView({ behavior: 'smooth' });
  //   };
  //   this.content = document.querySelectorAll('.section');
  //   document.addEventListener('wheel', (event: any) => {
  //     var delta = event.deltaY || event.wheelDelta; // Use event.deltaY instead of event['wheelDelta']
  //     var timeNow = new Date().getTime();
  //     // Cancel scroll if currently animating or within quiet period
  //     if (timeNow - this.lastAnimation < this.idlePeriod + this.animationDuration) {
  //       return;
  //     }
  //
  //     console.log(this.index)
  //     if (delta < 0) {
  //       this.index--;
  //       if (this.index < 0) {
  //         this.index = 0;
  //       }
  //     } else {
  //       this.index++;
  //       if (this.index >= this.content.length) {
  //         this.index = this.content.length - 1;
  //       }
  //     }
  //
  //     this.content.forEach((section: any, i: any) => {
  //       if (i === this.index) {
  //         section.scrollIntoView({behavior: 'smooth'});
  //       }
  //     });
  //
  //     this.lastAnimation = timeNow;
  //   }, {passive: true}); // Add passive: true to make the event listener passive
  }

}
