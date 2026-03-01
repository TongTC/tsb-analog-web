import { Component } from '@angular/core';
import ContentAttributes, { Post } from '../../interface';
import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { BlogCardholderComponent } from "../../components/blogcardholder.component";


@Component({
  selector: 'app-updated',
  standalone: true,
  imports: [NgFor, BlogCardholderComponent],
  template: `
  <h4>News and Updates</h4>
  <p>Stay up to date with the latest news and updates from our team. We share insights, project updates, and industry trends to keep you informed about our work and the world of technology.</p>
  <div class="grid">
    
      <ul *ngFor="let post of posts">
        <app-blogcardholder
          [post]="{
            title: post.attributes.title,
            id: post.attributes.slug,
            excerpt: post.attributes.description,
            image: post.attributes.coverImage
          }"
        />
      </ul>
    
</div>`,
  styleUrl: './index.page.css'
})
export default class UpdatedComponent {

  posts = injectContentFiles<ContentAttributes>();
}