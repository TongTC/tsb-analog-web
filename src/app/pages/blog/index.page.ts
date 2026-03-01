import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import {Component} from '@angular/core';
import { BlogCardholderComponent } from 'src/app/components/blogcardholder.component';
import ContentAttributes from '../../interface';

@Component({
    standalone: true,
    imports:[NgFor, BlogCardholderComponent],
    template: `
    <h2>Posts</h2>
        <div>
            <div *ngFor="let post of posts">
                <app-blogcardholder
                    [post]="{
                        title: post.attributes.title,
                        id: post.attributes.slug,
                        excerpt: post.attributes.description,
                        image: post.attributes.coverImage
                    }"
                />
            </div>
        </div>
    `
})
export default class IndexPage{
    posts = injectContentFiles<ContentAttributes>();
}

