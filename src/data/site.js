/**
 * Company-wide content. Everything a visitor reads outside the projects list
 * starts here.
 *
 * TODO: replace the placeholder phone, email and street address below.
 */

export const site = {
  name: 'Global Design Consultancy and Construction Company Ltd',
  shortName: 'Global Design',
  tagline: ['Plan', 'Design', 'Build', 'Grow'],
  // kept short on purpose: the hero should breathe, not sell twice
  heroIntro:
    'Architecture, engineering, construction and project management — one accountable team, from first sketch to final handover.',
  contact: {
    address: 'Kigali, Rwanda — add full street address',
    phone: '+250 788 583 246',
    phoneHref: 'tel:+250788583246',
    email: 'kdjados0@gmail.com',
    hours: 'Mon – Sat, 08:00 – 18:00',
  },
  /**
   * Where the office pin drops on the contact map.
   *
   * TODO: replace with the office's real coordinates — these are Kigali city
   * centre, not the actual address. Right-click the spot in any map and copy
   * the latitude/longitude. `span` is how much ground the frame shows, in
   * degrees: smaller is more zoomed in. 0.004 is roughly 450m across, close
   * enough to read the street the office is on.
   */
  map: {
    lat: -1.9441,
    lng: 30.0619,
    span: 0.004,
    label: 'Kigali, Rwanda',
  },
  socials: [
    { id: 'facebook', label: 'Facebook', href: '#' },
    { id: 'linkedin', label: 'LinkedIn', href: '#' },
    { id: 'instagram', label: 'Instagram', href: '#' },
  ],
}

/**
 * `to` is a router path. A `/#id` link lands on the home page and scrolls to
 * that section; `section` is the element id the scroll-spy watches for it.
 */
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/#services', label: 'Services', section: 'services' },
  { to: '/#projects', label: 'Projects', section: 'projects' },
  { to: '/story', label: 'Our story' },
  { to: '/contact', label: 'Contact' },
]

export const heroRotator = ['confidence.', 'landmarks.', 'communities.', 'legacy.']

export const stats = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 45, suffix: '+', label: 'Specialists' },
  { value: 98, suffix: '%', label: 'On-time handover' },
  { value: 14, suffix: 'yrs', label: 'Combined practice' },
]

export const pillars = [
  {
    id: 'design-led',
    icon: 'home',
    title: 'Design-led thinking',
    body: 'Every brief starts with how the building will actually be used, not how fast it can be drawn.',
  },
  {
    id: 'build-quality',
    icon: 'box',
    title: 'Build quality that holds',
    body: 'Specified materials, documented workmanship and inspections recorded at every stage.',
  },
  {
    id: 'reporting',
    icon: 'chart',
    title: 'Transparent reporting',
    body: 'Cost, programme and risk in one monthly report — no surprises at practical completion.',
  },
]

export const services = [
  {
    id: 'architecture',
    num: '01',
    icon: 'architecture',
    title: 'Architecture & Design',
    body: 'Concept design, detailed drawings, 3D visualisation and authority approvals — resolved before anyone breaks ground.',
    image: '/media/services/architecture.jpg',
    alt: 'Faceted white and glass civic building against a clear sky',
  },
  {
    id: 'construction',
    num: '02',
    icon: 'construction',
    title: 'Construction & Build',
    body: 'Main contracting, civil works, finishes and MEP installation delivered by supervised in-house crews and vetted subcontractors.',
    image: '/media/services/construction.jpg',
    alt: 'Welder joining steelwork, sparks flying',
  },
  {
    id: 'project-management',
    num: '03',
    icon: 'calendar',
    title: 'Project Management',
    body: 'Programme control, procurement, cost management and contract administration — with one reporting line back to you.',
    image: '/media/services/project-management.jpg',
    alt: 'Project team reviewing drawings around a table',
  },
  {
    id: 'master-planning',
    num: '04',
    icon: 'plan',
    title: 'Master Planning',
    body: 'Site analysis, feasibility studies, phasing strategy and infrastructure planning for estates, campuses and mixed-use sites.',
    image: '/media/services/master-planning.jpg',
    alt: 'Aerial view of a planned residential estate',
  },
]

export const processSteps = [
  { num: '01', title: 'Plan', body: 'Brief, site appraisal, feasibility and a budget you can take to a lender.' },
  { num: '02', title: 'Design', body: 'Concept through to construction drawings, approvals and tender documents.' },
  { num: '03', title: 'Build', body: 'Mobilisation, construction and quality control against a tracked programme.' },
  { num: '04', title: 'Grow', body: 'Handover, defects liability, maintenance guidance and future phasing.' },
]

/**
 * The founder, and the story of the practice, shown on the About page.
 *
 * TODO — to confirm before this goes out: the founding year is given here as
 * 2009; the site's `stats` still says "14 yrs Combined practice", which does
 * not agree with it. Fix whichever is wrong.
 *
 * `photo` is empty on purpose. Drop a portrait into `public/media/team/`
 * (a 4:5 crop, around 800x1000) and point `photo` at it; until then the frame
 * holds his initials, so the section reads as finished rather than broken.
 */
export const leadership = {
  name: 'Kwitonda Jean De Dieu',
  role: 'Founder & CEO',
  photo: '',
  story: [
    'Kwitonda Jean De Dieu trained as an architect at the University of Rwanda, and spent the years after graduating working through a succession of firms — drawing, detailing and supervising buildings for other people, on the projects that taught him how a scheme survives contact with a site.',
    'He founded Global Design Consultancy and Construction Company Ltd in 2009, to keep the designing and the building in the same hands rather than handing drawings over at the site gate. The practice has grown from single houses into university faculties, commercial blocks and multi-unit housing — larger work, run the same way.',
  ],
}

/**
 * The wider team, shown beneath the founder.
 *
 * Empty on purpose: the section hides itself while there is nobody in here, so
 * no placeholder names ever reach the site. Add entries and it appears —
 *
 *   { id: 'site-manager', name: 'Name Surname', role: 'Site Manager',
 *     bio: 'One line on what they hold.', photo: '/media/team/name.jpg' }
 *
 * `bio` and `photo` are both optional.
 */
export const team = []

/* SAMPLE CONTENT: replace with approved client quotes. */
export const testimonials = [
  {
    id: 't1',
    quote:
      'They carried the drawings all the way onto the site. Having the designers and the builders in one accountable team removed every argument we expected to have.',
    name: 'Client Name',
    role: 'Managing Director, Company Ltd',
  },
  {
    id: 't2',
    quote:
      'The monthly cost and programme report was the most useful document of the whole project. We always knew exactly where we stood.',
    name: 'Client Name',
    role: 'Project Sponsor, Organisation',
  },
  {
    id: 't3',
    quote:
      'Handover happened on the date they gave us at mobilisation. In this industry, that alone is worth saying out loud.',
    name: 'Client Name',
    role: 'Estates Manager, Institution',
  },
]

export const ribbonWords = [
  'Plan', 'Design', 'Build', 'Grow',
  'Architecture', 'Engineering', 'Construction', 'Supervision',
]
