import { Component } from '@angular/core';
import { Post, Product } from '../../interface';
import { ProductholderComponent } from '../../components/productholder.component';

@Component({
  selector: 'app-fapart-page',
  imports: [ProductholderComponent],
  template: `
    <div class="container p-2">
      @for (maker of makers; track maker.name) {
        <div class="row row-cols-3 m-1">
          <div class="col border"><img src="{{ maker.photo_link }}" /></div>
          <div class="col border">{{ maker.name }}</div>
          <div class="col border">{{ maker.des }}</div>
        </div>
      }
      <div class="container">
        <div class="border bg-red rounded">
          <h4>FA Part Products</h4>
        </div>
      </div>
      <div class="grid ">
        @for (product of products; track product.name) {
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
  styleUrl: './fapart.page.css',
})
export default class FapartPage {
  
  makers = [
    {
      id: 1,
      name: 'Mitsubishi Electric (Factory Automation Parts)',
      photo_link: '/mitsubishi_elec_semi.svg',
      des: 'Tachibana is authorized dealer of Mitsubishi Electric Factory Automation (Thailand) Co., Ltd.',
    },
  ];

  products: Product[] = [
    {
      name: 'Induction Motor',
      description: 'Induction Motor aluminium frame',
      image: '/fap/motor_induc.png',
      link: '#',
    },
    {
      name: 'PLC',
      description: 'Programmable Logic Controller',
      image: '/fap/plc1.png',
      link: '#',
    },
    {
      name: 'Module Processing',
      description: 'One module realizes processing',
      image: '/fap/mel_pc.jpg',
      link: '#',
    },
    {
      name: 'High-resolution LCD monitor',
      description: 'High-resolution LCD',
      image: '/fap/lcd_monitor.jpg',
      link: '#',
    }
  ];
}
