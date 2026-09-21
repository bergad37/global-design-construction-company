/**
 * Every project on the site lives here. The hero slider, the projects grid and
 * the single-project pages all read from this one list, so a project is only
 * ever written once.
 *
 * SAMPLE CONTENT. Replace the names, categories, locations, dates and copy with
 * real ones, then drop your photographs over the files in `public/media/`
 * keeping the same filenames — nothing else needs to change.
 *
 *   id         → also the page URL: /projects/<id>
 *   featured   → true puts the project in the hero slider, in this order
 *   hero       → 2400×1350 landscape frame (with an @sm 1280×720 twin)
 *   image      → 1100×850 frame used by the grid and the hero thumbnails
 *   detail     → 1400×1050 second frame; also the banner on non-featured
 *                project pages, which have no wide `hero` of their own
 *   duration   → how long the project took on site
 *   facts      → the spec table on the project page; add or drop rows freely
 */

/**
 * Two kinds of filter sit in one row on purpose: the first group is the kind of
 * building, the second is the discipline we were engaged for. A visitor looking
 * for an electrician and a visitor looking for a contractor both find a way in.
 *
 * Every project's `category` must match an id here, or it will only ever be
 * reachable under All.
 */
export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'design', label: 'Design & Consultancy' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'residential', label: 'Residential' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'electrical', label: 'Electrical' },
]

export const projects = [
  {
    id: 'riverside-business-court',
    title: 'Riverside Business Court',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Kigali, Rwanda',
    year: '2024',
    duration: '18 months',
    client: 'Private developer',
    status: 'Completed',
    scope: 'Design · Build · Fit-out',
    summary: 'Six-storey office and retail block — design, build and fit-out.',
    metric: { value: '6', label: 'Storeys' },
    featured: true,
    hero: '/media/hero/riverside-business-court.jpg',
    heroSmall: '/media/hero/riverside-business-court@sm.jpg',
    image: '/media/projects/riverside-business-court.jpg',
    detail: '/media/projects/riverside-business-court-detail.jpg',
    alt: 'Glass and steel office towers rising against an overcast sky',
    facts: [
      { label: 'Floor area', value: '8,400 m²' },
      { label: 'Storeys', value: '6 plus basement parking' },
      { label: 'Contract', value: 'Design and build' },
      { label: 'Completed', value: 'March 2024' },
    ],
    body: [
      'A mixed commercial block on a tight river-edge plot, with ground-floor retail, five floors of lettable office space and two basement parking levels beneath.',
      'The site constrained everything. With no room for a laydown area, the programme was built around just-in-time deliveries and a tower crane positioned to serve both the basement excavation and the frame above it. We ran the structural design in parallel with the excavation so the substructure never waited on drawings.',
      'The building was handed over fully fitted, with the retail units serviced and ready for tenant fit-out on day one.',
    ],
  },
  {
    id: 'hillcrest-family-estate',
    title: 'Hillcrest Family Estate',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Kigali, Rwanda',
    year: '2023',
    duration: '14 months',
    client: 'Residential developer',
    status: 'Completed',
    scope: 'Architecture · Construction',
    summary: '24 serviced units with shared landscaped courtyards.',
    metric: { value: '24', label: 'Units' },
    featured: true,
    hero: '/media/hero/hillcrest-family-estate.jpg',
    heroSmall: '/media/hero/hillcrest-family-estate@sm.jpg',
    image: '/media/projects/hillcrest-family-estate.jpg',
    detail: '/media/projects/hillcrest-family-estate-detail.jpg',
    alt: 'Contemporary white villa with a terrace and swimming pool',
    facts: [
      { label: 'Units', value: '24 across three blocks' },
      { label: 'Plot', value: '1.6 hectares' },
      { label: 'Contract', value: 'Architecture and main contracting' },
      { label: 'Completed', value: 'November 2023' },
    ],
    body: [
      'Twenty-four family units arranged around two shared landscaped courtyards, built in three phases so the first residents could move in while the last block was still going up.',
      'Phasing drove the design. Each block was planned to be structurally and serviceably independent, with its own water storage and power distribution, so handover never waited on the whole estate being finished.',
      'The courtyards were laid out early and protected through construction, which meant the landscaping was mature rather than freshly planted by the time the final units were released.',
    ],
  },
  {
    id: 'civic-learning-centre',
    title: 'Civic Learning Centre',
    category: 'design',
    categoryLabel: 'Design & Consultancy',
    location: 'Musanze, Rwanda',
    year: '2023',
    duration: '11 months',
    client: 'District authority',
    status: 'Completed',
    scope: 'Full consultancy · Supervision',
    summary: 'Library and community hall — full consultancy and supervision.',
    metric: { value: '1.8k', label: 'm² floor area' },
    featured: true,
    hero: '/media/hero/civic-learning-centre.jpg',
    heroSmall: '/media/hero/civic-learning-centre@sm.jpg',
    image: '/media/projects/civic-learning-centre.jpg',
    detail: '/media/projects/civic-learning-centre-detail.jpg',
    alt: 'Curved timber reading gallery inside a public library',
    facts: [
      { label: 'Floor area', value: '1,800 m²' },
      { label: 'Capacity', value: '240-seat hall, 90-seat library' },
      { label: 'Contract', value: 'Consultancy and site supervision' },
      { label: 'Completed', value: 'August 2023' },
    ],
    body: [
      'A public library and community hall on one site, sharing an entrance court so the building stays useful outside library hours.',
      'We were engaged as consultants rather than contractors here: feasibility, full design, tender documentation, and then supervision of the appointed contractor through to practical completion.',
      'Acoustics set the plan. The hall and the reading rooms sit on opposite sides of a services spine, so a full-capacity event never reaches the library floor.',
    ],
  },
  {
    id: 'northgate-logistics-park',
    title: 'Northgate Logistics Park',
    category: 'industrial',
    categoryLabel: 'Industrial',
    location: 'Kigali Special Economic Zone',
    year: '2024',
    duration: '20 months',
    client: 'Logistics operator',
    status: 'Completed',
    scope: 'Civils · Warehousing · Yard works',
    summary: 'Warehousing, yard works and site-wide infrastructure.',
    metric: { value: '9', label: 'Hectares' },
    featured: true,
    hero: '/media/hero/northgate-logistics-park.jpg',
    heroSmall: '/media/hero/northgate-logistics-park@sm.jpg',
    image: '/media/projects/northgate-logistics-park.jpg',
    detail: '/media/projects/northgate-logistics-park-detail.jpg',
    alt: 'Distribution warehouse interior with racking and loading aisles',
    facts: [
      { label: 'Site area', value: '9 hectares' },
      { label: 'Warehousing', value: '22,000 m² across four units' },
      { label: 'Contract', value: 'Civils and main contracting' },
      { label: 'Completed', value: 'June 2024' },
    ],
    body: [
      'Four warehouse units, a heavy-duty vehicle yard and the site-wide infrastructure underneath it all — drainage, attenuation, power, water and the internal road network.',
      'The earthworks were the real project. Nine hectares of sloping ground had to be cut and filled into level terraces before a single foundation could be poured, and the drainage strategy had to handle a full season of runoff from paved yard surfaces.',
      'Units were released to the operator one at a time, so warehousing was earning while the last yard slab was still curing.',
    ],
  },
  {
    id: 'meridian-trade-tower',
    title: 'Meridian Trade Tower',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Kigali CBD, Rwanda',
    year: 'In progress',
    duration: '26 months (ongoing)',
    client: 'Commercial developer',
    status: 'On site',
    scope: 'Structural design · Construction management',
    summary: 'Structural design and construction management, 12 floors.',
    metric: { value: '12', label: 'Floors' },
    featured: true,
    hero: '/media/hero/meridian-trade-tower.jpg',
    heroSmall: '/media/hero/meridian-trade-tower@sm.jpg',
    image: '/media/projects/meridian-trade-tower.jpg',
    detail: '/media/projects/meridian-trade-tower-detail.jpg',
    alt: 'High-rise towers under construction with tower cranes in place',
    facts: [
      { label: 'Floors', value: '12 above ground' },
      { label: 'Floor area', value: '14,200 m²' },
      { label: 'Contract', value: 'Structural design and construction management' },
      { label: 'Status', value: 'Frame complete, envelope in progress' },
    ],
    body: [
      'A twelve-floor commercial tower in the central business district, where we hold the structural design and the construction management rather than the building contract.',
      'The frame is a post-tensioned flat slab, chosen to keep floor-to-floor heights down and give tenants an uninterrupted soffit. Coordinating the post-tensioning programme with the services routing took most of the design effort.',
      'The frame topped out on programme. The envelope and core fit-out are running now, with handover tracked against the date given at mobilisation.',
    ],
  },
  {
    id: 'unity-sports-pavilion',
    title: 'Unity Sports Pavilion',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Huye, Rwanda',
    year: '2022',
    duration: '13 months',
    client: 'Municipal client',
    status: 'Completed',
    scope: 'Long-span structure · Services',
    summary: 'Long-span roof structure with public concourse and services.',
    metric: { value: '42m', label: 'Clear span' },
    image: '/media/projects/unity-sports-pavilion.jpg',
    detail: '/media/projects/unity-sports-pavilion-detail.jpg',
    alt: 'Sweeping curved facade of a modern landmark building',
    facts: [
      { label: 'Clear span', value: '42 m, column-free' },
      { label: 'Capacity', value: '1,200 spectators' },
      { label: 'Contract', value: 'Design and build' },
      { label: 'Completed', value: 'October 2022' },
    ],
    body: [
      'A covered sports hall with a forty-two metre column-free span, a public concourse and full changing and officiating facilities beneath the stand.',
      'The span set the engineering. Steel trusses were fabricated off site in sections and lifted into place over three nights, which kept the adjacent road closed for hours rather than weeks.',
      'Ventilation is passive: the roof profile drives stack ventilation through high-level louvres, so the hall stays usable through the middle of the day without mechanical cooling.',
    ],
  },
  {
    id: 'lakeview-terrace-homes',
    title: 'Lakeview Terrace Homes',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Rubavu, Rwanda',
    year: '2022',
    duration: '10 months',
    client: 'Private client',
    status: 'Completed',
    scope: 'Architecture · Interiors',
    summary: 'Eight stepped townhouses cut into a lakeside slope.',
    metric: { value: '8', label: 'Townhouses' },
    image: '/media/projects/lakeview-terrace-homes.jpg',
    detail: '/media/projects/lakeview-terrace-homes-detail.jpg',
    alt: 'Dark-clad contemporary townhouse lit from within at dusk',
    facts: [
      { label: 'Units', value: '8 stepped townhouses' },
      { label: 'Slope', value: '1:4 lakeside gradient' },
      { label: 'Contract', value: 'Architecture and interiors' },
      { label: 'Completed', value: 'May 2022' },
    ],
    body: [
      'Eight townhouses stepped down a steep lakeside slope, each one turned so every living room holds the water view and no house looks into the one below it.',
      'Retaining the slope was the first job. A stepped retaining structure doubles as the rear wall of each house, which removed a whole line of foundations and paid for itself in excavation alone.',
      'Interiors were designed alongside the shells, so joinery, lighting and services were all set out before first fix rather than negotiated afterwards.',
    ],
  },
  {
    id: 'atrium-workspace-fitout',
    title: 'Atrium Workspace Fit-out',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Kigali, Rwanda',
    year: '2024',
    duration: '11 weeks',
    client: 'Corporate tenant',
    status: 'Completed',
    scope: 'Interiors · MEP · Handover',
    summary: 'Two floors stripped back and refitted while the building stayed open.',
    metric: { value: '11', label: 'Weeks on site' },
    image: '/media/projects/atrium-workspace-fitout.jpg',
    detail: '/media/projects/atrium-workspace-fitout-detail.jpg',
    alt: 'Open-plan office corridor with a tea point and glazed meeting rooms',
    facts: [
      { label: 'Floor area', value: '2,100 m² over two floors' },
      { label: 'Programme', value: '11 weeks, building occupied' },
      { label: 'Contract', value: 'Interiors and MEP' },
      { label: 'Completed', value: 'February 2024' },
    ],
    body: [
      'Two floors of an occupied office building stripped back to the slab and refitted — open-plan desking, glazed meeting rooms, tea points and a full services replacement.',
      'The constraint was the neighbours. The rest of the building stayed in use throughout, so demolition and any noisy work ran outside office hours and every delivery was booked through a single goods lift shared with working tenants.',
      'Eleven weeks from possession to handover, with the client moving in over a single weekend.',
    ],
  },
  {
    id: 'district-masterplan-consultancy',
    title: 'District Masterplan Consultancy',
    category: 'design',
    categoryLabel: 'Design & Consultancy',
    location: 'Eastern Province, Rwanda',
    year: '2023',
    duration: '9 months',
    client: 'District authority',
    status: 'Completed',
    scope: 'Feasibility \u00b7 Architecture \u00b7 Approvals',
    summary: 'Feasibility, concept architecture and approvals for a mixed-use district site.',
    metric: { value: '34', label: 'Hectares studied' },
    // PLACEHOLDER PHOTOGRAPHY \u2014 reusing a services frame until real photos land.
    image: '/media/services/architecture.jpg',
    detail: '/media/services/master-planning.jpg',
    alt: 'Architectural drawings and a scale model on a studio table',
    facts: [
      { label: 'Area', value: '34 hectares' },
      { label: 'Deliverables', value: 'Feasibility, concept design, tender pack' },
      { label: 'Contract', value: 'Consultancy only \u2014 no construction' },
      { label: 'Completed', value: 'December 2023' },
    ],
    body: [
      'A pure consultancy commission: site appraisal, options testing, concept architecture and the drawing set the client needed to take the scheme through approvals and out to tender.',
      'We were not building this one, which changed how we worked. Every option had to survive costing by a contractor we would never meet, so the drawings carried buildability notes rather than assumptions.',
      'The approved scheme went to tender within the fee programme, with three of the four phases costed inside the client\u2019s original envelope.',
    ],
  },
  {
    id: 'meridian-electrical-installation',
    title: 'Meridian Electrical Installation',
    category: 'electrical',
    categoryLabel: 'Electrical',
    location: 'Kigali, Rwanda',
    year: '2024',
    duration: '5 months',
    client: 'Commercial developer',
    status: 'Completed',
    scope: 'LV distribution \u00b7 Lighting \u00b7 Testing',
    summary: 'Full low-voltage distribution, lighting and testing across a live commercial block.',
    metric: { value: '9', label: 'Floors wired' },
    // PLACEHOLDER PHOTOGRAPHY \u2014 reusing an existing frame until real photos land.
    image: '/media/projects/atrium-workspace-fitout-detail.jpg',
    detail: '/media/projects/atrium-workspace-fitout.jpg',
    alt: 'Office interior with a run of recessed ceiling lighting',
    facts: [
      { label: 'Floors', value: '9, plus plant and basement' },
      { label: 'Scope', value: 'LV panels, sub-mains, lighting, small power' },
      { label: 'Certification', value: 'Full test, inspection and handover records' },
      { label: 'Completed', value: 'July 2024' },
    ],
    body: [
      'Low-voltage distribution for a nine-floor commercial block \u2014 main panels, sub-mains, floor boards, lighting, small power and the test records that go with them.',
      'Sequencing ran against the main contractor\u2019s programme rather than our own. First fix chased the slab pours floor by floor, which meant containment drawings had to be signed off weeks ahead of the concrete.',
      'Every circuit was tested, certified and logged before handover, so the client took over a building with a complete electrical record rather than a promise of one.',
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

/** How many projects sit under each filter id, keyed the same way as FILTERS. */
export const projectCounts = Object.fromEntries(
  FILTERS.map((f) => [
    f.id,
    f.id === 'all' ? projects.length : projects.filter((p) => p.category === f.id).length,
  ]),
)

/** Look a project up by its URL id. */
export const getProject = (id) => projects.find((p) => p.id === id)

/** The next project in the list, for the link at the foot of a project page. */
export const getNextProject = (id) => {
  const i = projects.findIndex((p) => p.id === id)
  return projects[(i + 1) % projects.length]
}
