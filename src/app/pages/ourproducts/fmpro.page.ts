import { Component } from '@angular/core';

import { Product } from '../../interface';
import * as productholderComponent from '../../components/productholder.component';

@Component({
  selector: 'app-fmpro-page',
  imports: [productholderComponent.ProductholderComponent],
  template:`
  <div class="container p-2">
  @for(maker of makers; track maker.id){
  <div class="row row-cols-3 m-1">
    <div class="col border"><img src="{{ maker.photo_link }}" /></div>
    <div class="col border">{{ maker.name }}</div>
    <div class="col border">{{ maker.des }}</div>
  </div>
  }
  <div class="container">
    <div class="border bg-red rounded"><h4>FA Part Products</h4></div>
  </div>
  <div class="grid ">
 

    @for(product of products; track product.name ){

    <app-productholder [product]="{ 
      name: product.name, 
      description: product.description,
      image: product.image }" />
    }
  </div>
</div>

  `,
  styleUrl: './fmpro.page.css'
  
})
export default class FmproPage {
   products: Product[] = [{
    name: 'Wire-cut EDM',
    description: 'Wire-cut EDM',
    image: '/fm/wire_cut_edm.png',
  },
  {
    name: 'Laser Processing Machine-Fiber',
    description: 'Laser Processing Machine-Fiber',
    image: '/fm/Laser.jpg',
  },
  {
    name: 'Micro Laser Drilling Machine.',
    description: 'Micro Laser Drilling Machine.',
    image: '/fm/laser_drilling_machine.png',
  }

  ];

  makers = [
    { id: 1, name: "Mitsubishi Electric (Machine Equipment)", photo_link: "/mitsubishi_elec_semi.svg", des: 'Tachibana is authorized dealer of Mitsubishi Electric Industrial Machine (Thailand) Co., Ltd.' },
  ]

  products_pic = [
    { id: 1, pic_link: "../assets/fm/wire_cut_edm.png", des: "Wire-cut EDM" },
    { id: 2, pic_link: "../assets/fm/laser_mach1.png", des: "Laser Processing Machine-Fiber Laser 2-Dimentional-CO2 Laser 2D & 3D" },
    { id: 3, pic_link: "../assets/fm/laser_mach2.png", des: "Laser Processing Machine-Fiber Laser 2-Dimentional-CO2 Laser 2D & 3D" },
    { id: 4, pic_link: "../assets/fm/laser_mach3.jpg", des: "Micro Laser Drilling Machine." },
  ]
}