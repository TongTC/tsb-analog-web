import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div  class="container-fluid">

   <header class="border   rounded mb-0">
    
   
      <div class="container-fluid  rounded bg-red">
        <div class="row">
        <div class="col-sm-2 col-md-2 col-lg-2">
          <img 
            src="/tsb_logo.png"
            alt="Tachibana Sales Bangkok logo"
            style="width: 100%; height: auto;"
          />
        </div>
        <div class="col-sm-10 col-md-10 col-lg-10 text-light">
          <h1 class=" my-4" >TACHIABANA SALES (BANGKOK)</h1>
        </div>
      </div>
      </div>
  </header>
  <main>
  <app-navbar/>
  <router-outlet/>
      <div class="text-center border bg-red rounded m-2 p-2">
      <h5>Tachibana Sales (Bangkok) Co., Ltd.</h5>
    </div>
  </main>
  </div>
  `,
  styleUrl: './app.css'  ,
 
})
export class App { }
