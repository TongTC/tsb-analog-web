import { Component } from '@angular/core';


import { PlainHolderComponent } from '../components/plain-holder.component';
import UpdatedComponent from './updates.page';


@Component({
  selector: 'app-home',
  imports: [PlainHolderComponent,UpdatedComponent],
  styleUrl: './index.page.css',
  templateUrl: './index.page.html',
})
export default class Home {}
