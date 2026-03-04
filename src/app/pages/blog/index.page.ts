import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import {Component} from '@angular/core';
import { BlogCardholderComponent } from '../../components/blogcardholder.component';
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
                        slug: post.attributes.slug,
                        description: post.attributes.description,
                        coverImage: post.attributes.coverImage
                    }"
                />
            </div>
        </div>
    `
})
export default class IndexPage{
    posts = injectContentFiles<ContentAttributes>();
}

