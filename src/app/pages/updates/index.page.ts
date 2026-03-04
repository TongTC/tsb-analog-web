import { Component } from '@angular/core';
import ContentAttributes, { Post } from '../../interface';
import { injectContentFiles } from '@analogjs/content';
import { BlogCardholderComponent } from "../../components/blogcardholder.component";


@Component({
  selector: 'app-updated',
  standalone: true,
  imports: [ BlogCardholderComponent],
  template: `
  <div class="mt-3">
  <h3><b>News and Updates</b></h3>
  <p style="text-align:left">Stay up to date with the latest news and updates from our team. We share insights, project updates, and industry trends to keep you informed about our work and the world of technology.</p>
  <div class="grid">
    @for(post of posts; track post){
      <ul>
        <app-blogcardholder
          [post]="{
            slug: post.slug,
            title: post.attributes.title,
            description: post.attributes.description,
            coverImage: post.attributes.coverImage
          }"
        />
      </ul>
    }

    
</div>
  </div>`,
  styleUrl: './index.page.css'
})
export default class UpdatedComponent {

  posts = injectContentFiles<ContentAttributes>();
}