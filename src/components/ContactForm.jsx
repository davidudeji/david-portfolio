import { useState } from 'react';

const initialValues = { name: '', email: '', message: '' };
const initialErrors = { name: '', email: '', message: '' };

function validateField(field, value) {
  const trimmed = value.trim();

  if (!trimmed) return 'This field is required.';
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return 'Please enter a valid email address.';
  }
  if (field === 'name' && trimmed.length < 2) {
    return 'Please enter your full name.';
  }
  if (field === 'message' && trimmed.length < 12) {
    return 'Tell me a bit more about the project.';
  }

  return '';
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {
      name: validateField('name', values.name),
      email: validateField('email', values.email),
      message: validateField('message', values.message),
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitted(true);
    setValues(initialValues);
    setErrors(initialErrors);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate data-reveal style={{ '--reveal-delay': '100ms' }}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name) || undefined}
        />
        <span className="field-error" role="alert" aria-live="polite">
          {errors.name}
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email) || undefined}
        />
        <span className="field-error" role="alert" aria-live="polite">
          {errors.email}
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell me about your project — timeline, stack, and what you need."
          aria-invalid={Boolean(errors.message) || undefined}
        />
        <span className="field-error" role="alert" aria-live="polite">
          {errors.message}
        </span>
      </div>

      <div className="form-submit-row">
        <button type="submit" className="btn btn-primary" disabled={isSubmitted}>
          {isSubmitted ? 'Message sent ✓' : 'Send message'}
        </button>
        <p className="form-note">Ready for backend integration.</p>
      </div>
    </form>
  );
}
