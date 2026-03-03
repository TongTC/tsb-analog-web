import { Component } from '@angular/core';

import { Post } from '../../interface';
import { CardholderComponent } from '../../components/cardholder.component';

@Component({
  selector: 'app-fmpro-page',
  imports: [CardholderComponent],
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
 

    @for(post of posts; track post.title ){

    <app-cardholder [post]="{ title: post.title,excerpt:post.excerpt , image: post.image }" />
    }
  </div>
</div>

  `,
  styleUrl: './fmpro.page.css'
  
})
export default class FmproPage {
   posts: Post[] = [{
    title: 'Wire-cut EDM',
    excerpt: 'Induction Motor aluminium frame',
    image: '/fm/wire_cut_edm.png',
    author: 'TSB',
    date: 'Nov 3, 2025',
    link: '#'
  },
  {
    title: 'Laser Processing Machine-Fiber',
    excerpt: 'Laser Processing Machine-Fiber',
    image: '/fm/Laser.jpg',
  },
  {
    title: 'Micro Laser Drilling Machine.',
    excerpt: 'Micro Laser Drilling Machine.',
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