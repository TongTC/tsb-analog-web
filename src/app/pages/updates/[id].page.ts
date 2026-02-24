import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../../interface';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  template: `
    @if (post$ | async; as post) {
      <h1>{{ post.attributes.title }}</h1>
      <analog-markdown [content]="post.content"></analog-markdown>
    }
  `,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<Post>({
    param: 'id',
    subdirectory: 'updates',
  });
}
