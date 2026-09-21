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
    phone: '+250 000 000 000',
    phoneHref: 'tel:+250000000000',
    email: 'info@example.com',
    hours: 'Mon – Fri, 08:00 – 17:00',
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
