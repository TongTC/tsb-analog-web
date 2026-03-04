import { Component } from '@angular/core';
import { MakerholderComponent } from '../../../components/makerholder.component';
import { Maker } from 'src/app/interface';


@Component({
  imports: [MakerholderComponent],
  styleUrl: 'index.page.css',
  template: `<div class="grid">
@for(maker of makers; track maker.name) {
  <app-makerholder
    [maker]="{
      description: maker.description,
      logo: maker.logo,
      name: maker.name,
      routerlink: maker.routerlink
    }"
  ></app-makerholder>}
`,
})
export default class SemiconproPage {

  makers:Maker[]=[
    {
      name: 'Renesas',
      logo: '/semicon/renesas-logo.png',
      description: 'MCU,Power Management ICs',
      routerlink: '/ourproducts/semiconpro/renesas'},
      {
      name: 'Isahaya',
      logo: '/semicon/idc-logo.png',
      description: 'Transistors, Diodes, Thyristors, Rectifier',
      },
      {
      name: 'Good Ark',
      logo: '/semicon/goodark.png',
      description: 'Diodes, Thyristors, Rectifiers, TVS',
      },
      {
      name: 'Mitsubishi Electric (Semiconductor)',
      logo: '/mitsubishi_elec_semi.svg',
      description: 'IPM, Power Modules, Driver IC ..',
    },
    {
      name: 'Silergy',
      logo: '/semicon/silergy_logo.png',
      description: 'AC LED-driver, AC-DC Regulator,..',
     
    },
    {
      name: 'Lelon',
      logo: '/semicon/lelon-logo.png',
      description: 'Aluminium Electrolytic Capacitors, Film Capacitors, Supercapacitors',
    },
    {
      name: 'Cenker',
      logo: '/semicon/cenker-logo.png',
      description: 'Inductors, Chokes, EMI Filters',
     
    } 
  ]
}