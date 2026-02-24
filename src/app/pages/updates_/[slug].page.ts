import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import ContentAttributes, { Post } from '../../interface';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  templateUrl: './[slug].page.html',
  styleUrl: './[slug].page.css'
})
export default class BlogPostComponent {
  readonly post$ = injectContent<ContentAttributes>('slug');
}
