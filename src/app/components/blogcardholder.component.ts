import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { Post } from '../interface';


@Component({
  selector: 'app-blogcardholder',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogcardholder.component.html',
  styleUrls: ['./blogcardholder.component.css']
})


export class BlogCardholderComponent {
  @Input() post: Post = {};

  get imageSrc(): string {
    return this.post.image || 'assets/placeholder.png';
  }

  get altText(): string {
    return this.post.title || 'Post image';
  }
}


