import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Maker, Product} from 'src/app/interface';

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
  BlogId: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.BlogId = this.route.snapshot.paramMap.get('Id') || '';
  }

  @Input() product: Product = { name: '',
                                description: '',
                                image: '',
                                link: '',
                              }
              
}
