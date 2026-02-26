import { MarkdownComponent,injectContent } from "@analogjs/content";
import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import ContentAttributes from "../../interface";

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  template:`<div>
            @if (post$ | async; as post) {
              <h1>{{ post.attributes.title }}</h1>
              <img [src]="post.attributes.coverImage" alt="{{ post.attributes.title }} cover image" class="cover-image">
              <analog-markdown [content]="post.content" class="post-content"></analog-markdown>
            }
           </div>`,})
export default class BlogPostPage {
    post$ = injectContent<ContentAttributes>();
}