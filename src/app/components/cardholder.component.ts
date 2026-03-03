import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from 'src/app/interface';

@Component({
  selector: 'app-cardholder',
  standalone: true,
  template: ` 
  
  <div class="card">
    <div class="card-media">
      <img class="center frame" src="{{ post.image }}" alt="Post image" />
    </div>

    <div class="card-body">
      <h2 class="card-title">{{ post.title }}</h2>
      <p class="card-excerpt">{{ post.excerpt }}.</p>
    </div>
  </div>`,
  
  styleUrl: './cardholder.component.css',
})
export class CardholderComponent {
  BlogId: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.BlogId = this.route.snapshot.paramMap.get('Id') || '';
  }

  @Input() post: Post = {};
}
