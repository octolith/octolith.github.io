import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from '../../../shared/img/img.component';
import { Project } from './project';

@Component({
  selector: 'web-projects',
  standalone: true,
  imports: [CommonModule, ImgComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      description: 'Angular template to start a personal website',
      imgSrc: 'assets/img/angular-template-my-website.jpg',
      demoUrl: 'https://octolith.github.io/angular-template-my-website/',
      codeUrl: 'https://github.com/octolith/angular-template-my-website'
    },
    {
      description: 'A fun app showing a random photo of me on every visit or refresh',
      imgSrc: 'assets/img/random-me.jpg',
      demoUrl: 'https://octolith.github.io/random-me/',
      codeUrl: 'https://github.com/octolith/random-me'
    },
    {
      description: 'A collection of creative and themed 404 pages',
      imgSrc: 'assets/img/404-pages.jpg',
      demoUrl: 'https://octolith.github.io/404-pages/',
      codeUrl: 'https://github.com/octolith/404-pages'
    }
  ];
}
