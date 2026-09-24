import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import { useScrollPosition } from "../hooks/useScrollPosition.js";
import { navLinks, site } from "../data/site.js";

// Renders a link's label, with its `highlight` word (if any) in light orange.
function Label({ link }) {
  if (!link.highlight) return link.label;
  const [before, after] = link.label.split(link.highlight);
  return (
    <>
      {before}
      <span className="nav__highlight">{link.highlight}</span>
      {after}
    </>
  );
}

export default function Navbar() {
  const { y, direction } = useScrollPosition();
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("");

  const onHome = pathname === "/";

  // Lock the page behind the drawer, and let Escape close it.
  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // close the drawer whenever the route changes under it
  useEffect(() => setOpen(false), [pathname, hash]);

  // Scroll-spy underlines the link for whichever home section is on screen.
  useEffect(() => {
    if (!onHome || !("IntersectionObserver" in window)) {
      setSection("");
      return;
    }

    const targets = navLinks
      .filter((l) => l.section)
      .map((l) => document.getElementById(l.section))
      .filter(Boolean);
    if (!targets.length) return;

    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) setSection(en.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => spy.observe(t));
    return () => spy.disconnect();
  }, [onHome]);

  const isActive = (link) =>
    link.section ? onHome && section === link.section : pathname === link.to;

  const stuck = y > 40;
  const hidden = !open && y > 520 && direction === "down";

  const className = [
    "nav",
    stuck ? "is-stuck" : "",
    hidden ? "is-hidden" : "",
    open ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <div className="nav__inner">
        {/* Two lockups, cross-faded: the white one reads over the hero and the
            page banners, the colour one over the opaque bar once you scroll. */}
        <Link className="nav__logo" to="/" aria-label={`${site.name} — home`}>
          <img className="nav__logo-light" src="/logo-white.png" alt={site.name} />
          <img className="nav__logo-dark" src="/logo-no-background.png" alt="" aria-hidden="true" />
        </Link>

        <nav className="nav__menu" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className={`nav__link ${isActive(link) ? "is-active" : ""}`}
              to={link.to}
            >
              <Label link={link} />
            </Link>
          ))}
          <Link className="btn btn--primary nav__cta" to="/contact">
            Start a project
            <Icon name="arrowUpRight" strokeWidth={2.4} />
          </Link>
        </nav>

        <button
          className="nav__burger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="drawer"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav__drawer" id="drawer" aria-label="Mobile">
          {navLinks.map(
            (link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${0.18 + i * 0.07}s` : "0s" }}
              >
                <Label link={link} />
              </Link>
            ),
          )}
          <div className="tag">{site.tagline.join(" · ")}</div>
        </nav>
      </div>
    </header>
  );
}
