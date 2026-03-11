import { Component, Input } from '@angular/core';
import { Product } from '../interface';
import { ProductholderComponent } from "./productholder.component";


@Component({
  selector: 'app-promote',
  imports: [ProductholderComponent],
  standalone: true,
  styleUrl: './promoted.component.css',
  template: `
    <div class="container p-2">
      <div class="container">
        <div class="border bg-red rounded">
          <h4>Recommended Products</h4>
        </div>
      </div>
      <div class="grid ">
        @for (product of promote; track product.name) {
          <app-productholder
            [product]="{
              name: product.name,
              description: product.description,
              image: product.image,
              link: product.link
            }"
          />
        }
      </div>
    </div>
  `,
  
//   styleUrl: './promoted.component.css',
})
export class Promote {
  @Input() promote: Product[] =[ {
      name: 'PLC',
      description: 'Programmable Logic Controller',
      image: '/fap/plc1.png',
    link: '/ourproducts/details/plc',
  },
  {
     name: 'Induction Motor',
     description: 'Induction Motor aluminium frame',
     image: '/fap/motor_induc.png', 
       link: '/ourproducts/details/induction-motor',
  },
  {
        name: 'Induction Motor',
        description: 'Induction Motor aluminium frame',
        image: '/fap/motor_induc.png',
      link: '/ourproducts/details/induction-motor',
  }


];

              
}
