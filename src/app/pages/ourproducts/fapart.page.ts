import { Component } from '@angular/core';
import { Post } from '../../interface';
import { CardholderComponent } from '../../components/cardholder.component';

@Component({
  selector: 'app-fapart-page',
  imports: [CardholderComponent],
  template: `
    <div class="container p-2">
      @for (maker of makers; track maker.id) {
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
        @for (post of posts; track post.title) {
          <app-cardholder
            [post]="{
              title: post.title,
              excerpt: post.excerpt,
              image: post.image,
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

  posts: Post[] = [
    {
      title: 'Induction Motor',
      excerpt: 'Induction Motor aluminium frame',
      image: '/fap/motor_induc.png',
      author: 'TSB',
      date: 'Nov 3, 2025',
      link: '#',
    },
    {
      title: 'PLC',
      excerpt: 'Programmable Logic Controller',
      image: '/fap/plc1.png',
      author: 'TSB',
      date: 'Nov 3, 2025',
      link: '#',
    },
    {
      title: 'Module Processing',
      excerpt: 'One module realizes processing',
      image: '/fap/mel_pc.jpg',
      author: 'TSB',
      date: 'Nov 3, 2025',
      link: '#',
    },
    {
      title: 'High-resolution LCD monitor',
      excerpt: 'High-resolution LCD',
      image: '/fap/lcd_monitor.jpg',
      author: 'TSB',
      date: 'Nov 3, 2025',
      link: '#',
    }
  ];
}
