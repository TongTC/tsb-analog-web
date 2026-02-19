import { Component } from '@angular/core';
import { Post } from '../../interface';
import { CardholderComponent } from '../../components/cardholder/cardholder.component';

@Component({
  imports: [CardholderComponent],
  templateUrl: './fapart.page.html',
  styleUrl: './fapart.page.css'
 
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
      image: '/fap/plc1.jpg',
      author: 'TSB',
      date: 'Nov 3, 2025',
      link: '#',
    },
    {
      title:
        'Module Processing',
      excerpt: 'One module realizes processing',
      image: '/fap/mel_pc.jpg',
      author: 'TSB',
      date: 'Nov 3, 2025',
      link: '#',
    },
    {
      title:
        'High-resolution LCD monitor',
      excerpt: 'High-resolution LCD',
      image: '/fap/lcd_monitor.jpg',
      author: 'TSB',
      date: 'Nov 3, 2025',
      link: '#',
    },
     {
      title:
        'Hi-Resolution LCD Monitor',
      excerpt: 'High-resolution LCD',
      image: '/fap/lcd_monitor.jpg',
      author: 'TSB',
      date: 'Nov 3, 2025',
      link: '#',
    },

  ];

}