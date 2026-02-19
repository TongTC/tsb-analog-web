import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-plain-holder',
  standalone: true,
  imports: [],
  templateUrl: './plain-holder.component.html',
  styleUrl: './plain-holder.component.css'
})
export class PlainHolderComponent {
  @Input() img?:string;
  @Input() title?:string;
}
