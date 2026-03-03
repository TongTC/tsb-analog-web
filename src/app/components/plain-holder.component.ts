import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-plain-holder',
  standalone: true,
  imports: [],
  template: `<!-- ...existing code... -->
<div class="card">
  <div class="card-media">
    <img class="center frame" src="{{img}}" alt="Post image">
  </div>

  <div class="card-body">
    <h2 class="card-title"></h2>
    <p class="card-excerpt">
      
    </p>

    <div class="card-meta">
      <h2 class="card-title">{{title}}</h2>
    </div>
  </div>
</div>
<!-- ...existing code... -->`,
  styleUrl: './plain-holder.component.css'
})
export class PlainHolderComponent {
  @Input() img?:string;
  @Input() title?:string;
}
