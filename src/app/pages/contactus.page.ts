import { Component } from '@angular/core';

@Component({
  imports: [],
  template: `
    
    <div class="container mt-5">
      <h1 class="text-center mb-4">Contact Us</h1>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Get in Touch</h5>
              <p class="card-text">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Your Name">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="your.email@example.com">
                </div>
                <div class="mb-3">
                  <label for="subject" class="form-label">Subject</label>
                  <input type="text" class="form-control" id="subject" placeholder="Subject">
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" id="message" rows="5" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .btn-primary {
      background-color: #e60012;
      border-color: #e60012;
    }
    .btn-primary:hover {
      background-color: #cc0010;
      border-color: #cc0010;
    }
  `]
})
export default class ContactUsPage {}