import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Post } from 'src/app/interface';



@Component({
  selector: 'app-cardholder',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cardholder.component.html',
  styleUrl: './cardholder.component.css'
})


export class CardholderComponent {
   BlogId:string='';
   constructor(private route:ActivatedRoute) {}

   ngOnInit(){
    this.BlogId=this.route.snapshot.paramMap.get('Id') || '';
   }

   
   @Input() post: Post={};

}


