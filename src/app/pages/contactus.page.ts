import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  template: ` <div class="container border m-1 contact-wrapper">
    <div class="row border m-1">
      <div class="col-lg-7">
        <div class="bg-red text-light rounded">
          <h4>Semiconductor Department</h4>
        </div>

        <h5>Sales Person (Thai)</h5>
        <p>Mr.Nataphong Thipkham (Sales Engineer)</p>
        <div class="bg-red text-light rounded">
          <h4>Factory Automation Department</h4>
        </div>
        <h5>Sales Person (Japanese)</h5>
        <p>Mr.Jumpei Kanata</p>
        <div class="bg-red text-light rounded">
          <h4>Industrial Mechatronics</h4>
        </div>
        <h5>Sales Person (Japanese)</h5>
        <p>Mr.Sueahisa san</p>

        <div class="bg-secondary rounded text-light">
          <h4>Location</h4>
        </div>

        <p>
          Thaniya Building 8th Fl.,Room No.803-804, Silom Road Suriyawong
          Bangrak, Bangkok 10500
        </p>
      </div>

      <div class="col-lg-5">
        <div class="support-card border rounded p-3 bg-light mb-3">
          <h4 class="mb-2">Request Support</h4>
          <p class="small text-muted mb-3">
            Fill out this form and our team will get back to you.
          </p>

          <form #supportForm="ngForm" (ngSubmit)="submitSupportRequest(!!supportForm.valid)">
            <div class="mb-2">
              <label class="form-label" for="supportName">Full Name</label>
              <input
                id="supportName"
                type="text"
                class="form-control"
                name="fullName"
                [(ngModel)]="supportRequest.fullName"
                required
              />
            </div>

            <div class="mb-2">
              <label class="form-label" for="supportCompany">Company</label>
              <input
                id="supportCompany"
                type="text"
                class="form-control"
                name="company"
                [(ngModel)]="supportRequest.company"
                required
              />
            </div>

            <div class="mb-2">
              <label class="form-label" for="supportEmail">Email</label>
              <input
                id="supportEmail"
                type="email"
                class="form-control"
                name="email"
                [(ngModel)]="supportRequest.email"
                required
              />
            </div>

            <div class="mb-2">
              <label class="form-label" for="supportPhone">Phone (Optional)</label>
              <input
                id="supportPhone"
                type="tel"
                class="form-control"
                name="phone"
                [(ngModel)]="supportRequest.phone"
              />
            </div>

            <div class="mb-2">
              <label class="form-label" for="supportDept">Department</label>
              <select
                id="supportDept"
                class="form-select"
                name="department"
                [(ngModel)]="supportRequest.department"
                required
              >
                <option value="" disabled>Select a department</option>
                <option value="Semiconductor">Semiconductor</option>
                <option value="Factory Automation">Factory Automation</option>
                <option value="Industrial Mechatronics">Industrial Mechatronics</option>
              </select>
            </div>

            <div class="mb-2">
              <label class="form-label" for="supportSubject">Subject</label>
              <input
                id="supportSubject"
                type="text"
                class="form-control"
                name="subject"
                [(ngModel)]="supportRequest.subject"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label" for="supportMessage">Message</label>
              <textarea
                id="supportMessage"
                class="form-control"
                name="message"
                [(ngModel)]="supportRequest.message"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-danger w-100"
              [disabled]="isSubmitting || !supportForm.form.valid"
            >
              {{ isSubmitting ? 'Submitting...' : 'Send Support Request' }}
            </button>
          </form>

          <div class="alert alert-success mt-3 mb-0" [class.d-none]="!submitSuccess">
            Your support request has been submitted. We will contact you soon.
          </div>

          <div class="alert alert-danger mt-3 mb-0" [class.d-none]="submitSuccess || !showSubmitState">
            Please complete all required fields before submitting.
          </div>
        </div>

        <div class="bg-secondary rounded text-light">
          <h4>Thaniya Building</h4>
        </div>

        <div>
          <img src="/thaniya_bd.jpg" alt="Thaniya Building" width="100%" />
        </div>

        <img src="/map.png" width="100%" />
      </div>
    </div>
  </div>`,
  styleUrls: ['./contactus.page.css'],
})
export default class ContactUsPage {
  isSubmitting = false;
  submitSuccess = false;
  showSubmitState = false;

  supportRequest = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: '',
  };

  submitSupportRequest(isFormValid: boolean): void {
    this.showSubmitState = true;

    if (!isFormValid) {
      this.submitSuccess = false;
      return;
    }

    this.isSubmitting = true;

    // Simulate a quick submit response until a backend endpoint is available.
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.supportRequest = {
        fullName: '',
        company: '',
        email: '',
        phone: '',
        department: '',
        subject: '',
        message: '',
      };
    }, 600);
  }
}
