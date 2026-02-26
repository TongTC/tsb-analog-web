import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import ContentAttributes from '../interface';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>My Blog</h1>
    <router-outlet/>
  `,
})
export default class BlogPage {}