import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe,NgIf } from '@angular/common';
import { Component } from '@angular/core';
import ContentAttributes, { Post } from '../../interface';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf],
  template: `
  
  <div *ngIf="post$ | async as post">
  <h2>{{ post.attributes.title }}</h2>
  <analog-markdown [content]="post.content" class="markdown-content" />
</div>`,
  styleUrl: './[slug].page.css' 
})
export default class BlogPostComponent {
  post$ = injectContent<ContentAttributes>('slug');
}
