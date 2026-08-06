import { useState } from "react";

const initialState = { name: "", email: "", contact: "", date: "" };

function BookingSection() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Booking submitted:", form);
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="booking" id="booking">
      <form className="booking-card" onSubmit={handleSubmit}>
        <h2>Book now</h2>
        <p className="booking-sub">
          Lorem ipsum dolor sit amet, consectetur, adipiscing elit.
          Pellentesque arcu.
        </p>

        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="form-row">
          <label htmlFor="contact">Contact No</label>
          <input
            id="contact"
            name="contact"
            type="tel"
            required
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone no"
          />
        </div>

        <div className="form-row">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Book now
        </button>

        {submitted && (
          <p className="confirm-msg">
            Thanks! Your booking request has been received.
          </p>
        )}
      </form>
    </section>
  );
}

export default BookingSection;
