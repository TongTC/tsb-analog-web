import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../../interface';

type ProductDetail = Product & {
  slug: string;
  category: string;
  details: string[];
};

@Component({
  standalone: true,
  imports: [RouterLink],
  styleUrl: './[slug].page.css',
  template: `
    @if (product) {
      <div class="container p-3">
        <a routerLink="/" class="back-link">Back to home</a>
        <div class="detail-card mt-2">
          <div class="detail-media">
            <img [src]="product.image" [alt]="product.name" />
          </div>
          <div class="detail-body">
            <p class="detail-category">{{ product.category }}</p>
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <ul>
              @for (point of product.details; track point) {
                <li>{{ point }}</li>
              }
            </ul>
          </div>
        </div>
      </div>
    } @else {
      <div class="container p-3">
        <h3>Product not found</h3>
        <a routerLink="/" class="back-link">Return to home</a>
      </div>
    }
  `,
})
export default class ProductDetailPage {
  private readonly products: ProductDetail[] = [
    {
      slug: 'induction-motor',
      category: 'Factory Automation Parts',
      name: 'Induction Motor',
      description: 'Induction Motor aluminium frame',
      image: '/fap/motor_induc.png',
      link: '/ourproducts/details/induction-motor',
      details: [
        'Durable aluminium frame for industrial environments',
        'Stable operation for continuous production lines',
        'Suitable for general FA machine drive systems',
      ],
    },
    {
      slug: 'plc',
      category: 'Factory Automation Parts',
      name: 'PLC',
      description: 'Programmable Logic Controller',
      image: '/fap/plc1.png',
      link: '/ourproducts/details/plc',
      details: [
        'Flexible logic control for process automation',
        'Reliable operation with low maintenance needs',
        'Easy integration with HMI and control modules',
      ],
    },
    {
      slug: 'module-processing',
      category: 'Factory Automation Parts',
      name: 'Module Processing',
      description: 'One module realizes processing',
      image: '/fap/mel_pc.jpg',
      link: '/ourproducts/details/module-processing',
      details: [
        'Compact processing architecture in one module',
        'Reduced wiring and cabinet complexity',
        'Designed for scalable FA systems',
      ],
    },
    {
      slug: 'high-resolution-lcd-monitor',
      category: 'Factory Automation Parts',
      name: 'High-resolution LCD monitor',
      description: 'High-resolution LCD',
      image: '/fap/lcd_monitor.jpg',
      link: '/ourproducts/details/high-resolution-lcd-monitor',
      details: [
        'Sharp display for machine status and diagnostics',
        'Improved readability in factory operation',
        'Supports clear visualization for operators',
      ],
    },
    {
      slug: 'wire-cut-edm',
      category: 'Factory Machines',
      name: 'Wire-cut EDM',
      description: 'Wire-cut EDM',
      image: '/fm/wire_cut_edm.png',
      link: '/ourproducts/details/wire-cut-edm',
      details: [
        'High precision cutting for metal workpieces',
        'Stable dimensional accuracy for fine patterns',
        'Suitable for tooling and die production',
      ],
    },
    {
      slug: 'laser-processing-machine-fiber',
      category: 'Factory Machines',
      name: 'Laser Processing Machine-Fiber',
      description: 'Laser Processing Machine-Fiber',
      image: '/fm/Laser.jpg',
      link: '/ourproducts/details/laser-processing-machine-fiber',
      details: [
        'Efficient fiber laser processing for production',
        'Clean cutting and high repeatability',
        'Supports modern smart factory workflows',
      ],
    },
    {
      slug: 'micro-laser-drilling-machine',
      category: 'Factory Machines',
      name: 'Micro Laser Drilling Machine.',
      description: 'Micro Laser Drilling Machine.',
      image: '/fm/laser_drilling_machine.png',
      link: '/ourproducts/details/micro-laser-drilling-machine',
      details: [
        'Micro-hole drilling with fine beam control',
        'Designed for precision electronics applications',
        'Consistent quality for high-volume processes',
      ],
    },
  ];

  readonly slug: string;
  readonly product?: ProductDetail;

  constructor(private readonly route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.product = this.products.find((item) => item.slug === this.slug);
  }
}
