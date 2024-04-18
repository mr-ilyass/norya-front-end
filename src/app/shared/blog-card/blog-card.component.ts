import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {

  @Input("image") image: string = "";
  @Input("title") title: string = "";
  @Input("description") description: string = "";
  @Input("user") user: string = "";
  @Input("imageUser") imageUser: string = "";


}
