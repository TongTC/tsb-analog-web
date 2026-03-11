import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/interface';

@Component({
  selector: 'app-productholder',
  imports: [RouterLink],
  standalone: true,
  template: ` 
  
  <div class="card">
    <div class="card-media">
                          <a [routerLink]="product.link">
                        <img [src]="product.image" class="card-img-top" alt="...">
                    </a>
    </div>

    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <p class="card-excerpt">{{ product.description }}.</p>
    </div>
  </div>`,
  
  styleUrl: './productholder.component.css',
})
export class ProductholderComponent {
  @Input() product: Product = { name: '',
                                description: '',
                                image: '',
                                link: '',
                              }
              
}
