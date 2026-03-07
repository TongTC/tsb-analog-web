import { Component } from '@angular/core';
import { PlainHolderComponent } from '../components/plain-holder.component';
import UpdatedComponent from './updates/index.page';


@Component({
  selector: 'app-home',
  imports: [PlainHolderComponent, UpdatedComponent],
  styleUrl: './index.page.css',
  template: ` <div class="container-fluid p-1 m-1">
  <div class="col-12 border rounded">
    <h2>Welcome to Tachibana Sales Bangkok</h2>
    <p>
      ggi Au technology-driven trading company dealing in electrical, mechanical,
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
  <app-plain-holder [img]="'/home/Laser.jpg'" [title]="'Industrial Machines'" />

</div>

<div>
  <app-updated/>
</div>
`,
})
export default class Home {}
