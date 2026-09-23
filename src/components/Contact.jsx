import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import LocationMap from './LocationMap.jsx'
import { services, site } from '../data/site.js'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const EMPTY = { name: '', email: '', phone: '', service: '', message: '' }

/** Mirrors the rules the old vanilla form used. Returns '' when a field is fine. */
function validate(field, raw) {
  const value = raw.trim()
  const required = field !== 'phone'
  if (required && !value) return 'This field is required.'
  if (field === 'email' && value && !EMAIL.test(value)) return 'Enter a valid email address.'
  if (field === 'message' && value && value.length < 12) return 'Please add a little more detail.'
  return ''
}

const INFO = [
  { icon: 'pin', label: 'Office', value: site.contact.address },
  { icon: 'phone', label: 'Phone', value: site.contact.phone },
  { icon: 'mail', label: 'Email', value: site.contact.email },
  { icon: 'clock', label: 'Hours', value: site.contact.hours },
]

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      {children}
      <label htmlFor={id}>{label}</label>
      <small className="err">{error}</small>
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (field) => (e) => {
    const value = e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    // Only re-check while a field is already showing an error, as before.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: validate(field, value) } : prev))
  }

  const blur = (field) => () =>
    setErrors((prev) => ({ ...prev, [field]: validate(field, values[field]) }))

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    Object.keys(EMPTY).forEach((field) => { next[field] = validate(field, values[field]) })
    setErrors(next)

    if (Object.values(next).some(Boolean)) {
      const first = Object.keys(next).find((k) => next[k])
      document.getElementById(first)?.focus()
      return
    }

    // No backend yet — see README for wiring this to a form endpoint.
    setSent(true)
    setValues(EMPTY)
  }

  return (
    <section className="section" id="contact">
      <div className="container contact__grid">

        <Reveal variant="left">
          <span className="eyebrow">Get in touch</span>
          <h2>Let&rsquo;s talk about your project.</h2>
          <p className="lead">
            Tell us the location, the intended use and roughly when you want to start.
            We will take it from there.
          </p>

          {/* TODO: replace the placeholder contact details in src/data/site.js */}
          <div className="info">
            {INFO.map((row, i) => (
              <Reveal key={row.label} className="info__row" delay={i * 0.1}>
                <i><Icon name={row.icon} /></i>
                <div>
                  <b>{row.label}</b>
                  <span>{row.value}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <LocationMap />
        </Reveal>

        <Reveal as="form" variant="right" className="form" onSubmit={onSubmit} noValidate>
          <div className="form__row">
            <Field id="name" label="Full name" error={errors.name}>
              <input
                type="text" id="name" name="name" placeholder=" " autoComplete="name"
                value={values.name} onChange={set('name')} onBlur={blur('name')}
              />
            </Field>
            <Field id="email" label="Email address" error={errors.email}>
              <input
                type="email" id="email" name="email" placeholder=" " autoComplete="email"
                value={values.email} onChange={set('email')} onBlur={blur('email')}
              />
            </Field>
          </div>

          <div className="form__row">
            <Field id="phone" label="Phone (optional)" error={errors.phone}>
              <input
                type="tel" id="phone" name="phone" placeholder=" " autoComplete="tel"
                value={values.phone} onChange={set('phone')} onBlur={blur('phone')}
              />
            </Field>
            <Field id="service" label="Service needed" error={errors.service}>
              <select
                id="service" name="service"
                className={values.service ? 'has-value' : ''}
                value={values.service} onChange={set('service')} onBlur={blur('service')}
              >
                <option value="" />
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </Field>
          </div>

          <Field id="message" label="Tell us about the project" error={errors.message}>
            <textarea
              id="message" name="message" placeholder=" "
              value={values.message} onChange={set('message')} onBlur={blur('message')}
            />
          </Field>

          <button className="btn btn--primary" type="submit">
            Send enquiry
            <Icon name="arrowUpRight" strokeWidth={2.4} />
          </button>

          <p className="form__note">We reply to every enquiry within one working day.</p>

          <div className={`form__ok ${sent ? 'is-on' : ''}`} role="status">
            {sent && 'Thank you — your enquiry has been captured. Connect a form endpoint to start receiving it by email.'}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
