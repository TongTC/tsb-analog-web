import { Component } from '@angular/core';

@Component({
  imports: [],
  template: `
    <div class="container  mb-1">
      <div class="row  p-1">
        <div class="col  m-1">
          <h3>HEAD OFFICE COMPANY PROFILE</h3>
          <table class="table table-bordered mt-2">
            <tbody>
              <tr>
                <th class="bg-red text-light">Company Name</th>
                <td>TACHIBANA ELETECH CO.,LTD</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Established</th>
                <td>Founded: September 1. 1921</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Capital</th>
                <td>5.874 Billion YEN</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Sales</th>
                <td>220,112 MJPY (2025/3) (1,528Million US$)</td>
              </tr>

              <tr>
                <th class="bg-red text-light">President, CEO&COO</th>
                <td>Hisanobu Nunoyama</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Number of Employees</th>
                <td>1,478 (Consolidated ) End of March .2025</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Listed Stocks</th>
                <td>First Section Tokyo Stock Exchange(March,2015)</td>
              </tr>
              <tr>
                <th class="bg-red text-light">ISO/ISMS</th>
                <td>ISO14001, ISO9001, ISO27001(ISMS)</td>
              </tr>
              <tr>
                <th class="bg-red text-light">Domestic Location</th>
                <td>
                  Osaka(Head Office),　Tokyo, Nagoya, Tohoku, North Kanto, East
                  Kanto, Kanagawa, Hokuriku, Tokai, Mie, Mikawa, Shiga, South
                  Osaka, Kobe, Himeji, Shikoku, Hiroshima, Okayama,　Kyushu,
                  Tokyo Distribution Center
                </td>
              </tr>
              <tr>
                <th class="bg-red text-light">Group Company</th>
                <td>
                  KENDEN INDUSTRY CO., LTD. TACHIBANA KOUWA System Service Co.,
                  Ltd. DAIDENSHA Co, Ltd. TACHIBANA DEVICE COMPONENT Co., Ltd.
                  TAKAGI CONNECT Corp. TACHIBANA ELECTRONIC SOLUTIONS CO., Ltd.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-5   m-1">
          <img src="/hq_building.png" width="100%" />
        </div>
      </div>
    </div>
    <div class="container border border-2 border-dark ">
      <h3>HEAD OFFICE COMPANY BUSINESS DOMAINS</h3>
      <div class="row">
        <div class="col  mb-1">
          <img src="/business_domain.png" width="100%" />
        </div>
        <div class="col  m-1">
          <div class="row  m-1">
            <h3>Sales by Business Segment Mar.2025</h3>
          </div>
          <img src="/percent_rev.png" width="100%" />
        </div>
      </div>
    </div>

    <div class="container ">
      <div class="row">
        <div class="col-2 border border-2 border-dark  m-1">
          <div class="row ">
            <img
              class=""
              src="/fas.png"
              alt="icon for fa"
              style="margin: auto; width: 65px; height: auto"
            />
          </div>
          <div class="row ">
            <p><b>Factory Automation Systems</b></p>
          </div>
        </div>

        <div class="col border border-2 border-dark m-1">
          <p>
            <u><b>FA Component Department</b></u> <br />
            Sells PLC, inverters, AC servos, power distribution control
            equipment and control devices, and a wide range of motors.
          </p>
          <p>
            <u><b>FA System Solution Department</b></u> <br />
            Builds systems and offers solutions for production equipment
            monitoring, measurement, and control. Also sells robot systems.
          </p>
          <p>
            <u><b>Industrial Mechatronics Department </b></u> <br />
            Sells a wide range of machine tools such as electric discharge
            machines, laser beam machines, machining centers, and 3D printers.
          </p>
          <p>
            <u><b>Industrial Device Component Department </b></u> <br />
            Sells input/output equipment such as digital connection devices and
            connectors, FA personal computers, and network devices.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2 border border-2 border-dark m-1">
          <div class="row ">
            <img
              class="mt-4 mb-4 img-fluid"
              src="/semicon_elec_device.png"
              style="margin: auto; width: 65px; height: auto"
            />
          </div>
          <div class="row ">
            <p><b>Semiconductors and Electronic Devices </b></p>
          </div>
        </div>
        <div class="col border border-2 border-dark m-1">
          <p>
            Proposes and sells semiconductors and electronic device products,
            Available as standard designs or customized to meet customer needs.
            Designs and develops microcomputers, ASICs, and custom LSIs
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-2 border border-2 border-dark m-1">
          <div class="row">
            <img
              class="mt-4 mb-4 img-fluid"
              src="/bd_service.png"
              style="margin: auto; width: 65px; height: auto"
            />
          </div>
          <div class="row">
            <p><b>Building Services Systems </b></p>
          </div>
        </div>
        <div class="col border border-2 border-dark m-1">
          <p>
            Sells lighting, air conditioning, elevators, and disaster
            preparedness equipment for factories, office buildings and stores.
            Also sells energy　efficient equipment for all-electric housing.
          </p>
        </div>
      </div>

      <div class="row ">
        <div class="col-2 border border-2 border-dark m-1">
          <div class="row">
            <img
              class="mt-4 mb-4 img-fluid"
              src="/manufac_service.png"
              style="margin: auto; width: 65px; height: auto"
            />
          </div>
          <div class="row "><b>Manufacturing Services </b></div>
        </div>
        <div class="col border border-2 border-dark m-1">
          <p>
            Provides Electronics Manufacturing Services (EMS) that covers the
            design and manufacturing contracts for the substrate for
            electronic　devices to finished products, as well as provides Metal
            Manufacturing　Services (MMS) used to process and manufacture metal
            components　for multi-level car parking towers and railway cars.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-2 border border-2 border-dark m-1">
          <div class="row ">
            <img
              class="mt-4 mb-4 img-fluid"
              src="/oversea_op.png"
              style="margin: auto; width: 65px; height: auto"
            />
          </div>
          <div class="row "><b>Overseas Operations </b></div>
        </div>

        <div class="col border border-2 border-dark m-1">
          <p>
            Sells industrial mechatronics products in Asia, mainly in China and
            ASEAN countries, including semiconductors, FA equipment, electric
            discharge machines, and laser beam machines.
          </p>
        </div>
      </div>
    </div>

    <div class="container border border-2 border-dark">
      <h4 class="m-1 p-2 ">Subsidiaries and Affiliates</h4>
      <div class="row p-2">
        <img src="/subsidiaries_aff.png" />
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
export default class HqprofilePage {}
