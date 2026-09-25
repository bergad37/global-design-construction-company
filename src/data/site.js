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
    phone: '+250 788 304 018',
    phoneHref: 'tel:+250788304018',
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
 * `highlight` is a word of the label picked out in light orange.
 */
export const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/#services', label: 'Services', section: 'services' },
  { to: '/#projects', label: 'Projects', section: 'projects' },
  { to: '/story', label: 'GDCC Story', highlight: 'GDCC' },
  { to: '/contact', label: 'Contact' },
]

export const heroRotator = ['confidence.', 'landmarks.', 'communities.', 'legacy.']

export const stats = [
  { value: 10, suffix: '+', label: 'Completed projects' },
  { value: 8, suffix: '+', label: 'Specialists' },
  { value: 99, suffix: '%', label: 'On-time handover' },
  { value: 11, suffix: '+', label: 'Years combined practice' },
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
    image: '/media/services/architecture-r02.jpg',
    alt: 'Render of a residential block with glazed balconies and planted terraces',
  },
  {
    id: 'construction',
    num: '02',
    icon: 'construction',
    title: 'Construction & Build',
    body: 'Main contracting, civil works, finishes and MEP installation delivered by supervised in-house crews and vetted subcontractors.',
    image: '/media/projects/gallery/rebero-3.jpg',
    alt: 'Rebero Villa frame under construction with the crew on site',
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
 * Founded in 2015, which is what the "11+ Years combined practice" figure in
 * `stats` counts from; change the two together.
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
    'He founded Global Design Consultancy and Construction Company Ltd in 2015, to keep the designing and the building in the same hands rather than handing drawings over at the site gate. The practice has grown from single houses into university faculties, commercial blocks and multi-unit housing — larger work, run the same way.',
  ],
}

/**
 * The wider team, shown beneath the founder on the GDCC Story page.
 *
 * `photo` is empty for everyone for now, so each card shows the person's
 * initials in a small frame. Drop a square headshot (around 300x300) into
 * `public/media/team/` and point `photo` at it — for example
 * photo: '/media/team/itangishaka-eliezer.jpg'. `bio` is optional too.
 */
export const team = [
  { id: 'itangishaka-eliezer', name: 'ITANGISHAKA Eliezer', role: 'Project Manager', photo: '' },
  { id: 'kayiranga-jean-felix', name: 'KAYIRANGA Jean Felix', role: 'Senior Engineer', photo: '' },
  { id: 'kaburame-leandre', name: 'KABURAME Leandre', role: 'Procurement', photo: '' },
  { id: 'hategekimana-innocent', name: 'HATEGEKIMANA Innocent', role: 'Foreman', photo: '' },
  { id: 'ingabire-regis', name: 'INGABIRE Regis', role: 'Electrician', photo: '' },
  { id: 'karuhanga-bernard', name: 'KARUHANGA Bernard', role: 'Mechanical', photo: '' },
]

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
