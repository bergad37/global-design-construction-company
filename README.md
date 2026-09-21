# Global Design Consultancy and Construction Company Ltd — Website

A **React app built with Vite**, routed across a landing page, an About page
and a page for every project. The brand system (navy/orange, Montserrat +
Inter, the `PLAN · DESIGN · BUILD · GROW` spine) is unchanged from the original
static build.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
```

## Pages

| Route | What it is |
|---|---|
| `/` | the landing page — hero slideshow, about, services, projects, process, contact |
| `/about` | the full About page: the practice, what we hold to, disciplines, process |
| `/projects/:id` | one project — the facts, the write-up, the photography, next project |

`:id` is the project's `id` in `src/data/projects.js`, so
`/projects/riverside-business-court` is a real URL.

**Hosting note:** client-side routing means the server has to serve
`index.html` for any path it doesn't recognise, or a refresh on `/about` will
404. `public/_redirects` handles this on Netlify and Cloudflare Pages. On nginx
use `try_files $uri /index.html;`, on Apache an equivalent rewrite, and on
Vercel a catch-all rewrite to `/index.html`.

## Layout

```
index.html                  Vite entry — <head>, fonts, OG tags, hero preload
src/
  main.jsx                  React root + BrowserRouter
  App.jsx                   routes and the shell around them
  pages/
    Home.jsx                the landing page's section order
    AboutPage.jsx           /about
    ProjectPage.jsx         /projects/:id
    NotFound.jsx            anything else
  data/
    projects.js             ← every project, for both the hero and the grid
    site.js                 ← company details, services, process, testimonials
  components/
    hero/HeroSlider.jsx     the featured-project slideshow
    hero/HeroHeadline.jsx   tagline chips, line reveal, rotating verb
    hero/hero.css           hero styles (imported by the slider)
    Navbar.jsx  About.jsx  Services.jsx  Projects.jsx  Process.jsx
    Counters.jsx  Testimonials.jsx  CTA.jsx  Contact.jsx  Footer.jsx
    Preloader.jsx  Ribbon.jsx  ToTop.jsx  Cursor.jsx
    Reveal.jsx              scroll-reveal wrapper
    Counter.jsx             count-up statistic
    Icon.jsx                every inline SVG, by name
    RouteScroll.jsx         new route starts at the top; /#id scrolls to it
  hooks/
    useInView.js            one-shot IntersectionObserver
    useCountUp.js           eased number animation
    useInterval.js          pausable interval (`null` delay = paused)
    useScrollPosition.js    shared scroll y + direction
    usePrefersReducedMotion.js
  styles/
    tokens.css              brand palette, type scale, layout helpers
    base.css                buttons, nav, preloader, reveal system
    sections.css            the landing page's sections
    pages.css               the About and project pages
public/media/               all photography (see below)
docs/brand-guide.png        the supplied brand sheet, for reference
legacy/                     the original static HTML/CSS/JS build, kept for reference
```

## The hero slider

The hero is a full-bleed slideshow of the **featured projects**. It carries a
headline and one line of copy and nothing else — no calls to action, no
controls — so the photography has room to breathe and the whole hero fits one
screen at every size. The project on stage is named by a badge in the bottom
rail, which rebuilds on every slide and links to that project's page.

| | |
|---|---|
| Source | `projects` in `src/data/projects.js` where `featured: true`, in list order |
| Dwell | 6s per slide (`DWELL` in `HeroSlider.jsx`), drawn as the bar under the active thumbnail |
| Advance | runs itself; thumbnails, ← → keys and drag/swipe are there if wanted |
| Pause | while the pointer is over the hero, so a badge can be read |
| Transition | 1.1s crossfade with a slow push-in on the active frame |
| Badge | project name + category · location, above the thumbnail row |
| Reduced motion | autoplay, zoom and the progress bar all switch off; the thumbnails still work |

To change which projects appear, or their order, edit the `featured` flags in
`src/data/projects.js` — nothing in the component needs touching.

## Replacing the placeholder photography

**All images are stand-ins.** They live in `public/media/`, named after what
they are. Drop your own files over them keeping the same names and the site
picks them up with no code change:

```
public/media/
  hero/<project-id>.jpg          2400×1350  the full-bleed hero frame
  hero/<project-id>@sm.jpg        1280×720  the phone/tablet twin (srcset)
  projects/<project-id>.jpg       1100×850  the projects grid card + hero thumbnail
  projects/<project-id>-detail.jpg 1400×1050  second frame on the project page
  about/design-studio.jpg         1200×1500  tall frame in the About section
  about/site-supervision.jpg       900×700  the smaller overlapping frame
  about/practice.jpg              2000×900  banner across the top of /about
  services/<service-id>.jpg        900×700  revealed behind each service card on hover
  cta/aerial-plot.jpg             2000×900  behind the orange CTA band
```

Export at roughly those sizes — the hero frames are the ones worth keeping
large. If you add a project, add its entry to `src/data/projects.js` and put
its images at the matching paths.

## Still to replace

- Contact details — `site.contact` in `src/data/site.js` (phone, email, address)
- The hero's one-line intro — `site.heroIntro` in `src/data/site.js`
- Testimonials — `testimonials` in `src/data/site.js`, currently sample quotes
- Project names, locations, years, durations, facts and write-ups — `src/data/projects.js`
- The About page copy — `src/pages/AboutPage.jsx`
- Social links — `site.socials` in `src/data/site.js`, currently `#`

## The contact form

`Contact.jsx` validates in the browser and then shows a confirmation. **There is
no backend** — nothing is sent anywhere yet. To start receiving enquiries, post
the form values in `onSubmit` to a form endpoint (Formspree, Basin, a Netlify
function, or your own API) before the `setSent(true)` call.

## Brand

| Token | Value | Role |
|---|---|---|
| `--navy` | `#123B5D` | Primary — headings, dark sections |
| `--orange` | `#F28C28` | Accent — CTAs, highlights, active states |
| `--charcoal` | `#2B2F33` | Body text |
| `--steel` | `#71808C` | Secondary text, borders |
| `--offwhite` | `#F5F5F2` | Page background |

Defined once at the top of `src/styles/tokens.css`.

Buttons, filters, icon tiles and the process markers are all square-edged —
`--radius` and `--radius-lg` in the same file are down to a hairline, so panels
keep a crisp corner rather than a rounded one. Section headings are set from
the `h1`/`h2`/`h3` scale at the top of `tokens.css`.

### The header logo

The nav carries two lockups, stacked and cross-faded in `src/styles/base.css`:

| File | When it shows |
|---|---|
| `public/logo-white.png` | at the top of every route, where the bar is transparent over a dark hero or page banner |
| `public/logo.png` | once you scroll and the bar turns opaque |

The sticky bar is pure white rather than off-white on purpose: `logo.png` has a
white plate baked in, and a white bar makes that plate disappear without any
blend-mode trickery. If you later export the colour lockup with a transparent
background, the bar can go back to `var(--offwhite)`.

**Resizing it** is one value in `src/styles/tokens.css`:

```css
--logo-h: clamp(46px, 5vw, 60px);   /* phone min · fluid · desktop max */
```

The logo is the input and the header follows it, not the other way round:

- `--nav-h` is `max(84px, --logo-h + 24px)`, so the bar grows rather than
  cramping the lockup. Everything that clears the bar — the hero, the page
  banners, the sticky project spec — reads `--nav-h` and re-spaces itself.
- The width is never hardcoded. The white lockup stays in normal flow and the
  colour one is layered over it, so the link takes whatever width the image's
  own proportions give it at that height. Swapping in a squarer or wider file
  needs no CSS change.
- `--logo-h-stuck` (the smaller size once you scroll) defaults to 78% of
  `--logo-h`, so it follows along. Override it if you want a different ratio,
  or set it equal to `--logo-h` to stop the shrink-on-scroll entirely.

Set it to a flat value like `72px` if you don't want it to scale with the
viewport. Measured headroom: the bar and the phone layout are fine to at least
160px; the first thing to give is the hero's one-screen fit on a short laptop
(1280x720), which holds to 96px.

Because the transparent bar relies on a dark surface behind it, **every route
needs a dark banner at the top** — that is why the 404 page has one too. A new
page with a light top would need `.nav` forced into its opaque state instead.

`public/logo-symbol.png` (the square mark on transparency) is not used anywhere
yet. It would suit the `apple-touch-icon` in `index.html`, which currently
points at the wide lockup.

## Accessibility

- Skip link, visible focus rings, labelled controls throughout
- The slider exposes `aria-current` on thumbnails and live labels on pause/resume
- `prefers-reduced-motion` disables the preloader, autoplay, the Ken Burns zoom,
  scroll reveals and the custom cursor
