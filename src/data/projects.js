/**
 * Every project on the site lives here. The hero slider, the projects grid and
 * the single-project pages all read from this one list, so a project is only
 * ever written once.
 *
 * The photographs are the company's own. Every source frame is 16:9, and the
 * web copies keep that ratio — the cards crop with `object-fit:cover` in CSS,
 * so no frame needs to be cut to a particular shape here.
 *
 *   id         → also the page URL: /projects/<id>
 *   featured   → true puts the project in the hero slider, in this order.
 *                A featured project needs a 2400px-wide `hero` and its @sm
 *                twin; without those it should stay out of the slider.
 *   hero       → 2400x1351 landscape frame (with an @sm 1280x720 twin)
 *   image      → the frame used by the grid cards and the hero thumbnails
 *   detail     → second frame; also the banner on non-featured project pages
 *   design     → the architect's render, shown on the project page between the
 *                write-up and the photographs. `width`/`height` are the file's
 *                own pixel dimensions: the layout caps the frame at them so a
 *                render is only ever shown at or below its native size. These
 *                files are small, and upscaling them is what would make them
 *                look poor. Optional — a project without one skips the band.
 *   gallery    → every other frame worth showing, in order, for the grid on
 *                the project page. Add or remove entries freely — the layout
 *                adapts to the count and does not care how many there are.
 *   facts      → the spec table on the project page; add or drop rows freely
 *
 * STILL TO CONFIRM: the dates, durations, clients, floor areas and the numbers
 * in `metric` and `facts` are estimates written against the photographs. The
 * names, locations, categories and images are real. Correct the figures before
 * this goes in front of a client.
 */

export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'institutional', label: 'Education & Institutional' },
  // Not a kind of building but a kind of job: schemes we designed and
  // documented without also building them.
  { id: 'design', label: 'Designs' },
]

export const projects = [
  {
    id: 'ur-cst-mining-geology',
    title: 'UR-CST Mining & Geology Building',
    category: 'institutional',
    categoryLabel: 'Education & Institutional',
    location: 'University of Rwanda, CST — Kigali',
    year: 'Completed',
    duration: 'Multi-phase',
    client: 'University of Rwanda',
    status: 'Completed',
    scope: 'Architecture · Construction · Supervision',
    summary: 'A faculty building set into the slope, its teaching wings facing a sunken court.',
    metric: { value: '2', label: 'Teaching wings' },
    featured: true,
    hero: '/media/hero/ur-cst-mining-geology.jpg',
    heroSmall: '/media/hero/ur-cst-mining-geology@sm.jpg',
    image: '/media/projects/ur-cst-mining-geology.jpg',
    detail: '/media/projects/ur-cst-mining-geology-detail.jpg',
    design: {
      src: '/media/projects/design/ur-cst-mining-geology.jpg',
      width: 719,
      height: 564,
      alt: 'Architect’s render of the faculty building, its wings around a sunken court',
    },
    alt: 'Concrete faculty building with a colonnaded facade under a clear sky',
    gallery: [
      { src: '/media/projects/gallery/ur-cst-1.jpg', alt: 'Colonnaded teaching block seen from the approach' },
      { src: '/media/projects/gallery/ur-cst-2.jpg', alt: 'The sunken court between the two wings, hills beyond' },
      { src: '/media/projects/gallery/ur-cst-3.jpg', alt: 'The court seen from the upper walkway' },
      { src: '/media/projects/gallery/ur-cst-4.jpg', alt: 'Stepped seating and planting in the central court' },
      { src: '/media/projects/gallery/ur-cst-5.jpg', alt: 'The long retaining wall carrying the ramp up to roof level' },
      { src: '/media/projects/gallery/ur-cst-6.jpg', alt: 'Planted roof meeting the timber-lined facade below' },
      { src: '/media/projects/gallery/ur-cst-7.jpg', alt: 'Boarded ramp running up onto the roof terrace' },
      { src: '/media/projects/gallery/ur-cst-8.jpg', alt: 'Concrete pump reaching over the deck during a pour' },
    ],
    facts: [
      { label: 'Client', value: 'University of Rwanda' },
      { label: 'Faculty', value: 'College of Science and Technology' },
      { label: 'Contract', value: 'Architecture, construction and supervision' },
      { label: 'Status', value: 'Completed and in use' },
    ],
    body: [
      'A faculty building for mining and geology, built into a falling site so that the teaching wings sit either side of a sunken central court rather than on top of the hill.',
      'The section does the work. Ramped walkways carry students down from the upper approach onto planted roofs and into the courtyard, which means the building can be entered at two levels without a lift core and without cutting a flat terrace out of the slope.',
      'The colonnaded blocks give every teaching room a shaded external walkway, so circulation runs outside the envelope and the rooms themselves stay quiet and cool.',
    ],
  },
  {
    id: 'isai-busogo-smart-classroom',
    title: 'ISAI Busogo Smart Classroom',
    category: 'institutional',
    categoryLabel: 'Education & Institutional',
    location: 'Busogo, Musanze — Rwanda',
    year: 'Completed',
    duration: 'To be confirmed',
    client: 'ISAI Busogo',
    status: 'Completed',
    scope: 'Architecture · Construction · ICT fit-out',
    summary: 'A brick-clad teaching block with a deep colonnade and a smart classroom fit-out.',
    metric: { value: '2', label: 'Storeys' },
    featured: true,
    hero: '/media/hero/isai-busogo-smart-classroom.jpg',
    heroSmall: '/media/hero/isai-busogo-smart-classroom@sm.jpg',
    image: '/media/projects/isai-busogo-smart-classroom.jpg',
    detail: '/media/projects/isai-busogo-smart-classroom-detail.jpg',
    design: {
      src: '/media/projects/design/isai-busogo-smart-classroom.jpg',
      width: 677,
      height: 259,
      alt: 'Architect’s render of the teaching block and its brick colonnade',
    },
    alt: 'Brick teaching building with a deep columned walkway and a white service wing',
    gallery: [
      { src: '/media/projects/gallery/isai-1.jpg', alt: 'The teaching block and its white service wing from the forecourt' },
      { src: '/media/projects/gallery/isai-2.jpg', alt: 'The brick colonnade and paved walkway along the classroom face' },
    ],
    facts: [
      { label: 'Client', value: 'ISAI Busogo' },
      { label: 'Location', value: 'Busogo, Musanze District' },
      { label: 'Contract', value: 'Architecture, construction and ICT fit-out' },
      { label: 'Status', value: 'Completed and in use' },
    ],
    body: [
      'A teaching building for ISAI Busogo, fitted out as a smart classroom — the room, its power and its data all designed together rather than the equipment being chased into a finished shell.',
      'The face of the building is a deep brick colonnade. It shades the glazing from the low sun, keeps the walkway dry through the rains that this part of the country gets reliably, and does both without a single mechanical part.',
      'Brick was chosen for what it costs over time rather than what it costs on day one: laid locally, it needs no coating, no repainting cycle and very little of anyone’s attention once it is up.',
    ],
  },
  {
    id: 'kimironko-apartment',
    title: 'Kimironko Apartment',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Kimironko, Kigali',
    year: 'Completed',
    duration: 'To be confirmed',
    client: 'Private client',
    status: 'Completed',
    scope: 'Architecture · Construction · Finishes',
    summary: 'Stacked living volumes on a stone plinth, turned to hold the valley view.',
    metric: { value: '3', label: 'Levels' },
    featured: true,
    hero: '/media/hero/kimironko-apartment.jpg',
    heroSmall: '/media/hero/kimironko-apartment@sm.jpg',
    image: '/media/projects/kimironko-apartment.jpg',
    detail: '/media/projects/kimironko-apartment-detail.jpg',
    alt: 'White apartment building on a stone plinth overlooking the Kigali hills',
    gallery: [
      { src: '/media/projects/gallery/kimironko-1.jpg', alt: 'The upper floors cantilevered over the stone plinth' },
      { src: '/media/projects/gallery/kimironko-2.jpg', alt: 'The building at night with the soffits lit' },
      { src: '/media/projects/gallery/kimironko-3.jpg', alt: 'The house on its slope, seen from the lower approach' },
    ],
    facts: [
      { label: 'Location', value: 'Kimironko, Kigali' },
      { label: 'Contract', value: 'Architecture, construction and finishes' },
      { label: 'Site', value: 'Sloping plot with a valley aspect' },
      { label: 'Status', value: 'Completed' },
    ],
    body: [
      'An apartment building in Kimironko, stepped up a sloping plot so that every level opens onto the valley rather than onto the road behind it.',
      'The stone plinth is structural, not decorative. It retains the slope and carries the terraces, which let the white volumes above sit clear of the ground and read as one composition rather than as a wall of storeys.',
      'Deep reveals and recessed balconies keep direct sun off the glazing through the middle of the day, so the rooms stay usable without relying on mechanical cooling.',
    ],
  },
  {
    id: 'rebero-villa',
    title: 'Rebero Villa',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Rebero, Kigali',
    year: 'In progress',
    duration: 'Ongoing',
    client: 'Private client',
    status: 'On site',
    scope: 'Architecture · Structure · Construction',
    summary: 'A hillside villa in frame, its stone-clad piers rising off a terraced plot.',
    metric: { value: '2', label: 'Levels' },
    featured: true,
    hero: '/media/hero/rebero-villa.jpg',
    heroSmall: '/media/hero/rebero-villa@sm.jpg',
    image: '/media/projects/rebero-villa.jpg',
    detail: '/media/projects/rebero-villa-detail.jpg',
    design: {
      src: '/media/projects/design/rebero-villa.jpg',
      width: 620,
      height: 330,
      alt: 'Architect’s render of the villa, planted terraces stepping down the slope',
    },
    alt: 'Villa under construction with stone-clad piers and a concrete frame on a hillside',
    gallery: [
      { src: '/media/projects/gallery/rebero-1.jpg', alt: 'Stone-clad piers and the cast concrete frame' },
      { src: '/media/projects/gallery/rebero-2.jpg', alt: 'Front elevation with the deep roof overhang cast' },
      { src: '/media/projects/gallery/rebero-3.jpg', alt: 'The frame under construction with the crew on site' },
      { src: '/media/projects/gallery/rebero-4.jpg', alt: 'The villa on its terraced plot, seen from below' },
    ],
    facts: [
      { label: 'Location', value: 'Rebero, Kigali' },
      { label: 'Contract', value: 'Architecture, structural design and construction' },
      { label: 'Site', value: 'Terraced hillside plot' },
      { label: 'Status', value: 'On site — structure and cladding' },
    ],
    body: [
      'A private villa on the Rebero ridge, currently on site. The frame is up, the stone cladding is going on and the deep roof overhangs are cast.',
      'The plot falls steeply, so the house is built off a terraced retaining structure that doubles as the lower floor’s rear wall — one structure doing two jobs, which took a whole line of foundations out of the job.',
      'Local stone is carried up the piers and the boundary walls so the built edge of the plot reads as one piece with the house rather than as a fence added afterwards.',
    ],
  },
  {
    id: 'lamar-retirement-house',
    title: 'Lamar Retirement House',
    category: 'design',
    categoryLabel: 'Design',
    location: 'Runda, Kamonyi \u2014 Rwanda',
    year: '2024',
    duration: 'Design stage',
    client: 'Private client',
    status: 'In design',
    scope: 'Design only \u00b7 Architecture \u00b7 Documentation',
    summary: 'Two pitched pavilions on a terraced garden plot, drawn for living on one level.',
    metric: { value: '2', label: 'Pavilions' },
    featured: true,
    hero: '/media/hero/lamar-retirement-house.jpg',
    heroSmall: '/media/hero/lamar-retirement-house@sm.jpg',
    image: '/media/projects/lamar-retirement-house.jpg',
    detail: '/media/projects/lamar-retirement-house-detail.jpg',
    alt: 'Render of the house from above, its pool, court and terraced garden laid out below',
    gallery: [
      { src: '/media/projects/gallery/lamar-1.jpg', alt: 'The garden front, with exposed timber trusses over the gable glazing' },
      { src: '/media/projects/gallery/lamar-2.jpg', alt: 'The solar array laid across the main pitched roof' },
      { src: '/media/projects/gallery/lamar-3.jpg', alt: 'Plan view of the plot: house, pool, court and stepped garden path' },
    ],
    facts: [
      { label: 'Location', value: 'Runda, Kamonyi District' },
      { label: 'Drawing set', value: 'Design documents, April 2024' },
      { label: 'Our role', value: 'Design only \u2014 architecture and the full drawing set' },
      { label: 'Status', value: 'In design \u2014 not yet on site' },
    ],
    body: [
      'A retirement house at Runda in Kamonyi. This one is design work: the architecture and the full drawing set are ours, and the building has not yet gone to site. It is drawn as two pitched pavilions with exposed timber trusses, linked by a lower flat-roofed middle section that holds the entrance.',
      'Who it is for shaped the plan. The design documents carry an instruction that the work comply with prevailing accessibility requirements, and the house is laid out to be lived in on one level, with the garden reached by ramped and stepped routes rather than a single flight.',
      'The plot is terraced rather than levelled. Pool, terrace and a hard court step down the slope below the house, and a solar array sits across the main roof pitch, which faces the right way for it.',
    ],
  },
  {
    id: 'nyamata-commercial-building',
    title: 'Nyamata Commercial Building',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Nyamata, Bugesera \u2014 Rwanda',
    year: 'In progress',
    duration: 'Ongoing',
    client: 'Private developer',
    status: 'On site',
    scope: 'Architecture \u00b7 Structure \u00b7 Construction',
    summary: 'Shopfronts at street level with balconied floors above, cut into a hillside plot.',
    metric: { value: '4', label: 'Levels' },
    // Still on site, so the covers are the renders rather than a half-built
    // shell: `image` is the angled view, `detail` the front elevation, and the
    // card cross-fades between the two. Every construction frame is in the
    // gallery below, in the order the job was built.
    image: '/media/projects/nyamata-commercial-building.jpg',
    detail: '/media/projects/nyamata-commercial-building-detail.jpg',
    design: {
      src: '/media/projects/design/nyamata-commercial-building.jpg',
      width: 1600,
      height: 900,
      alt: 'Architect\u2019s render of the commercial block seen from the street corner',
    },
    alt: 'Architect’s render of the commercial block, lit at dusk',
    gallery: [
      { src: '/media/projects/gallery/nyamata-1.jpg', alt: 'Foundations being dug out across the sloping plot' },
      { src: '/media/projects/gallery/nyamata-2.jpg', alt: 'Column starters cast and the pad foundations taking shape' },
      { src: '/media/projects/gallery/nyamata-3.jpg', alt: 'Slab formwork and reinforcement seen from above' },
      { src: '/media/projects/gallery/nyamata-4.jpg', alt: 'The deck cast, with the timber roof frame standing over it' },
      { src: '/media/projects/gallery/nyamata-5.jpg', alt: 'Brickwork going up behind timber scaffolding' },
      { src: '/media/projects/gallery/nyamata-6.jpg', alt: 'The frame and brick infill with the crew on site' },
      { src: '/media/projects/gallery/nyamata-7.jpg', alt: 'Brickwork rising behind the scaffolding on the rear elevation' },
      { src: '/media/projects/gallery/nyamata-8.jpg', alt: 'The steel roof frame going up over the finished brickwork' },
    ],
    facts: [
      { label: 'Location', value: 'Nyamata, Bugesera District' },
      { label: 'Use', value: 'Retail at street level, lettable floors above' },
      { label: 'Contract', value: 'Architecture, structural design and construction' },
      { label: 'Status', value: 'On site \u2014 frame and envelope' },
    ],
    body: [
      'A commercial block in Nyamata: shopfronts opening straight onto the street at the lower level, with balconied lettable floors stacked above them.',
      'The plot falls away sharply, so the building starts as a set of pad foundations stepped down the slope. Getting those levels right was most of the early work \u2014 the street frontage had to meet the road exactly while the rear of the building picked up the drop.',
      'The frame is concrete, the infill is local brick, and the roof structure was framed in timber on site. It is a straightforward way to build here, and it keeps the trades and the materials within reach of the town the building serves.',
    ],
  },
  {
    id: 'muyange-apartment',
    title: 'MUYANGE Apartment',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Muyange, Rwanda',
    year: 'In progress',
    duration: 'Ongoing',
    client: 'Private developer',
    status: 'On site',
    scope: 'Architecture · Construction',
    summary: 'Stepped apartment blocks with pergola-shaded terraces, structure complete.',
    metric: { value: '3', label: 'Blocks' },
    // Not featured: every Muyange frame is 1000px wide, too small for the
    // full-bleed hero. A larger original would let it join the slider.
    image: '/media/projects/muyange-apartment.jpg',
    detail: '/media/projects/muyange-apartment-detail.jpg',
    design: {
      src: '/media/projects/design/muyange-apartment.jpg',
      width: 727,
      height: 472,
      alt: 'Architect’s render of the apartment blocks and their shaded terraces',
    },
    alt: 'Cream apartment blocks with ribbed render panels behind a block boundary wall',
    gallery: [
      { src: '/media/projects/gallery/muyange-1.jpg', alt: 'Stacked terraces seen from the foot of the block' },
      { src: '/media/projects/gallery/muyange-2.jpg', alt: 'Cream volumes and pergola beams against the sky' },
      { src: '/media/projects/gallery/muyange-3.jpg', alt: 'The blocks stepping down the site' },
      { src: '/media/projects/gallery/muyange-4.jpg', alt: 'Frontal view of the upper terraces' },
      { src: '/media/projects/gallery/muyange-5.jpg', alt: 'The gated entrance front' },
      { src: '/media/projects/gallery/muyange-6.jpg', alt: 'The run of blocks behind the boundary wall' },
      { src: '/media/projects/gallery/muyange-7.jpg', alt: 'The development seen across the open site' },
    ],
    facts: [
      { label: 'Location', value: 'Muyange, Rwanda' },
      { label: 'Contract', value: 'Architecture and construction' },
      { label: 'Form', value: 'Stepped blocks with shaded terraces' },
      { label: 'Status', value: 'On site — structure complete' },
    ],
    body: [
      'A residential development of stepped apartment blocks, photographed with the structure complete and the finishes still to come.',
      'Concrete pergola beams run over the upper terraces. They are cast with the frame rather than added later, so the shading is part of the structure and there is nothing bolted on to fail or need repainting.',
      'The blocks are set apart and staggered, which gives every unit a private outlook and lets air move between them instead of trapping heat in a single continuous slab of building.',
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
