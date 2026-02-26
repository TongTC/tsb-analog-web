import { injectContentFiles } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import {Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports:[RouterLink, AsyncPipe],
    template: `
    <h2>Posts</h2>
    <ul> 
        <li *ngFor="let post of posts">
            <a [routerLink]="post.attributes.slug">{{ post.attributes.title }}</a>
        </li>
    </ul>
    `
})
export default class IndexPage{
    posts = injectContentFiles<Blogpost>();
}

