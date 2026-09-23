import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { services, site } from "../data/site.js";

const COMPANY = [
  { to: "/about", label: "About us" },
  { to: "/story", label: "Our story" },
  { to: "/#projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/logo-white.png" alt={site.name} />
            </Link>
            <p>
              Consultancy and contracting under one roof — planning, designing,
              building and growing the spaces our clients depend on.
            </p>
            <div className="socials">
              {site.socials.map((social) => (
                <a key={social.id} href={social.href} aria-label={social.label}>
                  <Icon name={social.id} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {COMPANY.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <Link to="/#services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={site.contact.phoneHref}>{site.contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </li>
              <li>Kigali, Rwanda</li>
              <li>{site.contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <span>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="tag">{site.tagline.join(" · ")}</span>
        </div>
      </div>
    </footer>
  );
}
