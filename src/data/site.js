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
   * degrees: smaller is more zoomed in.
   */
  map: {
    lat: -1.9441,
    lng: 30.0619,
    span: 0.012,
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
  { to: '/about', label: 'About' },
  { to: '/#services', label: 'Services', section: 'services' },
  { to: '/#projects', label: 'Projects', section: 'projects' },
  { to: '/#process', label: 'Process', section: 'process' },
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
 * Leadership and team, shown on the About page.
 *
 * SAMPLE CONTENT — replace every name, role and biography below with the real
 * people. Drop headshots into `public/media/team/` and point `photo` at them;
 * a portrait crop around 800x1000 matches the frame. Leave `photo` unset and
 * the card falls back to the person's initials, so the section still reads
 * properly before any photographs exist.
 *
 *   lead → true puts the person in the leadership row above the wider team
 */
export const team = [
  {
    id: 'managing-director',
    name: 'Name Surname',
    role: 'Managing Director',
    lead: true,
    bio: 'Sets the direction of the practice and stays close to the projects that carry the most risk.',
  },
  {
    id: 'head-of-design',
    name: 'Name Surname',
    role: 'Head of Design',
    lead: true,
    bio: 'Leads the architecture and consultancy side, from first sketch through to approvals.',
  },
  {
    id: 'construction-director',
    name: 'Name Surname',
    role: 'Construction Director',
    lead: true,
    bio: 'Owns delivery on site — programme, subcontractors, quality and handover.',
  },
  {
    id: 'project-manager',
    name: 'Name Surname',
    role: 'Senior Project Manager',
    bio: 'Runs the programme and the reporting clients see every week.',
  },
  {
    id: 'structural-engineer',
    name: 'Name Surname',
    role: 'Structural Engineer',
    bio: 'Frames, foundations and the numbers underneath them.',
  },
  {
    id: 'services-engineer',
    name: 'Name Surname',
    role: 'Services Engineer',
    bio: 'Electrical and mechanical design, installation and testing.',
  },
  {
    id: 'quantity-surveyor',
    name: 'Name Surname',
    role: 'Quantity Surveyor',
    bio: 'Costs the work up front and keeps it honest as the job moves.',
  },
  {
    id: 'site-supervisor',
    name: 'Name Surname',
    role: 'Site Supervisor',
    bio: 'On site daily, holding the standard the drawings set.',
  },
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
