import React from "react";

export default function Problem(data: any) {
  return (
    <div className="col-md-8 contact-form">
      <h3>{ data }</h3>
      <form className="ajax-form" id="contactForm" method="post" action="assets/php/contact.php">
          <div className="form-group">
              <input type="text" className="form-control" id="name" name="name" placeholder="Your Name..." value="" required />
          </div>
          <div className="form-group">
              <input type="email" className="form-control" id="email" name="email" placeholder="Your email..." value="" required />
          </div>
          <div className="form-group">
              <input type="phone" className="form-control" id="phone" name="phone" placeholder="Your phone..." value="" required />
          </div>
          <div className="form-group">
              <textarea className="form-control" name="message" placeholder="Your message..." required></textarea>
          </div>
          <div className="form-group">
              <button type="submit" name="submit" className="btn btn-default"><i className="fa fa-paper-plane fa-fw"></i> Send</button>
          </div>
      </form>
    </div>
  )
}