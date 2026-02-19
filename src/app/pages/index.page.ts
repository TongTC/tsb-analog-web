import { Component } from '@angular/core';

import { AnalogWelcome } from './analog-welcome';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { PlainHolderComponent } from '../components/plain-holder/plain-holder.component';

@Component({
  selector: 'app-home',
  imports: [PlainHolderComponent],
  styles: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  align-items: start;
  width: 100%;
}`,
  template: `
   <div class="container-fluid p-1 m-1">
  <div class="col-12 border rounded">
    <h2>Welcome to Tachibana Sales Bangkok</h2>
    <p>
      A technology-driven trading company dealing in electrical, mechanical,
      electronic, and information products to contribute to the development
      of society through the delivery of superior products together with the
      latest technologies to our industrial customers.
      <br />We are tradding company that involve electronics semiconductor
      component , Factory Automation Part and Factory Machine.
    </p>
  </div>
</div>

<div class="grid">
  <app-plain-holder [img]="'/home/semicon.jpg'" [title]="'Semiconductors'" />
  <app-plain-holder [img]="'/home/mitsu_plc.png'" [title]="'Factory Automation'" />
  <app-plain-holder [img]="'/home/milling_mach.jpg'" [title]="'Industrial Machines'" />

</div>

  `,
})
export default class Home {}
