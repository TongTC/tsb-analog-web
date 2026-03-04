import { Component } from '@angular/core';

@Component({
  imports: [],
  template: `
    <div class="container  mb-1">
      <div class="row  p-1">
        <div class="col  m-1">
          <h3>BANGKOK OFFICE COMPANY PROFILE</h3>
          <table class="table table-bordered mt-2">
            <tbody>
              <tr>
                <th class="bg-danger text-light">Company Name</th>
                <td>Tachibana Sales (Bangkok) Co.,Ltd.</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Established</th>
                <td>1st March 2007</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Capital</th>
                <td>THB 105,000,000 (3.5Million US$)</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Sales</th>
                <td>THB 1,092,000,000 (2024) (34Million US$)</td>
              </tr>

              <tr>
                <th class="bg-red text-light">Manager Director</th>
                <td>Chiaki Iwatsubo</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Number of Employees</th>
                <td>21 (Japanese 5, Thai 16)</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Business</th>
                <td>Sales of Semiconductors. Electronic Components</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Warehouse</th>
                <td>Nippon Express NEC Logistics Center (A/C Room 24hours)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-4">
          <div class="row">
            <img src="/tsb_office.JPEG" style="margin: auto" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    h3 {
      text-align: left;
      font-weight: bold;
    }

    .bg-red {
      background-color: #e60012;
    }
  `,
})
export default class BkkprofilePage {}
