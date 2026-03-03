import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import ContentAttributes, { Post } from '../interface';

@Component({
  selector: 'app-blogcardholder',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="card">
    <a class="card-media" [routerLink]="['/updates', post.slug]">
      <img class="center frame" [src]="imageSrc" [alt]="altText" />
    </a>

    <div class="card-body">
      <h2 class="card-title">{{ post.title }}</h2>
      <p class="card-excerpt">{{ post.description }}.</p>
      <!-- @if (post.author || post.date) {
        <div class="card-meta">
          @if (post.author) {
            <span class="author">By {{ post.author }}</span>
          }
          @if (post.date) {
            <span class="date">{{ post.date }}</span>
          }
        </div>
      } -->

      <a class="read-more" [routerLink]="['/updates', post.slug]" role="button"
        >Read More</a
      >
    </div>
  </div>`,
  styleUrls: ['./blogcardholder.component.css'],
})
export class BlogCardholderComponent {
  @Input() post: ContentAttributes = {
    title: '',
    slug: '',
    description: '',
    coverImage: '',
  };

  get imageSrc(): string {
    return this.post.coverImage || '';
  }

  get altText(): string {
    return this.post.title || 'Post image';
  }
}
