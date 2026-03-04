import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Maker} from 'src/app/interface';

@Component({
  selector: 'app-makerholder',
  imports: [RouterLink],
  standalone: true,
  template: ` 
  
  <div class="card">
    <div class="card-media">
                          <a [routerLink]="maker.routerlink">
                        <img [src]="maker.logo" class="card-img-top" alt="...">
                    </a>
    </div>

    <div class="card-body">
      <h2 class="card-title">{{ maker.name }}</h2>
      <p class="card-excerpt">{{ maker.description }}.</p>
    </div>
  </div>`,
  
  styleUrl: './makerholder.component.css',
})
export class MakerholderComponent {
  BlogId: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.BlogId = this.route.snapshot.paramMap.get('Id') || '';
  }

  @Input() maker: Maker = { name: '', 
                            logo: '',
                            description: '',
                            routerlink: '' 
                          };
}
