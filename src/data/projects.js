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
 *   heroThumb  → optional; the hero thumbnail when it should match a `hero`
 *                that is a different picture from `image`
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
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "institutional", label: "Education & Institutional" },
  // Not a kind of building but a kind of job: schemes we designed and
  // documented without also building them.
  { id: "design", label: "Designs" },
];

export const projects = [
  {
    id: "kagugu-apartment",
    title: "Kagugu Apartment",
    category: "residential",
    categoryLabel: "Residential",
    location: "Kagugu, Gasabo — Kigali",
    year: "In progress",
    duration: "Ongoing",
    client: "Private developer",
    status: "On site",
    scope: "Architecture · Structure · Construction",
    summary:
      "An apartment block of glazed balconies and planted terraces, with a rooftop pool.",
    metric: { value: "6", label: "Storeys" },
    // Still on site, so the hero and the covers are the renders: R02 at street
    // level for the hero and the card, R05 from above as the second frame.
    // The site photographs are in the gallery.
    featured: true,
    hero: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579855/kagugu-apartment.jpg",
    heroSmall:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579855/kagugu-apartment.jpg",
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579855/kagugu-apartment.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579855/kagugu-apartment-detail.jpg",
    design: {
      src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579867/kagugu-apartment-detail.jpg",
      width: 1600,
      height: 1052,
      alt: "Architect’s aerial render of the block, its rooftop pool and the parking court",
    },
    alt: "Architect’s render of the apartment block with glazed balconies and planted terraces",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579886/kagugu-1.jpg",
        alt: "Raft reinforcement and column cages laid out across the excavated plot",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579888/kagugu-2.jpg",
        alt: "The stone retaining walls around the basement dig, with the crew fixing steel",
      },
    ],
    facts: [
      { label: "Location", value: "Kagugu, Gasabo District" },
      { label: "Use", value: "Residential apartments" },
      {
        label: "Contract",
        value: "Architecture, structural design and construction",
      },
      { label: "Status", value: "On site — foundations" },
    ],
    body: [
      "An apartment block in Kagugu: stacked floors of glazed balconies stepping in and out of the facade, planting hung from the slab edges, and a rooftop terrace with a pool looking out over the city.",
      "The plot was dug out for a lower level and retained on three sides with stone walls. The raft and the column starters are going in now, and the frame will rise from there.",
      "The balconies do more than add floor area. Their deep slab edges shade the glazing below them, so every apartment gets an outdoor room and a cooler interior from the same piece of structure.",
    ],
  },
  {
    id: "ur-cst-mining-geology",
    title: "UR-CST Mining & Geology Building",
    category: "institutional",
    categoryLabel: "Education & Institutional",
    location: "University of Rwanda, CST — Kigali",
    year: "Completed",
    duration: "Multi-phase",
    client: "University of Rwanda",
    status: "Completed",
    scope: "Architecture · Construction · Supervision",
    summary:
      "A faculty building set into the slope, its teaching wings facing a sunken court.",
    metric: { value: "2", label: "Teaching wings" },
    featured: true,
    hero: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083807/UR-CST-5.jpg",
    heroSmall:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083807/UR-CST-5.jpg",
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083807/UR-CST-5.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083806/UR-CST-6.jpg",
    design: {
      src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083806/UR-CST-10.jpg",
      width: 719,
      height: 564,
      alt: "Architect’s render of the faculty building, its wings around a sunken court",
    },
    alt: "Concrete faculty building with a colonnaded facade under a clear sky",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083806/UR-CST-10.jpg",
        alt: "Colonnaded teaching block seen from the approach",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083805/UR-CST-13.jpg",
        alt: "The sunken court between the two wings, hills beyond",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083805/UR-CST-11.jpg",
        alt: "The court seen from the upper walkway",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083762/UR-CST-9.jpg",
        alt: "Stepped seating and planting in the central court",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083806/UR-CST-6.jpg",
        alt: "The long retaining wall carrying the ramp up to roof level",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083803/UR-CST-7.jpg",
        alt: "Planted roof meeting the timber-lined facade below",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083761/UR-CST-4.jpg",
        alt: "Boarded ramp running up onto the roof terrace",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790580623/ur-cst-8.jpg",
        alt: "Concrete pump reaching over the deck during a pour",
      },
    ],
    facts: [
      { label: "Client", value: "University of Rwanda" },
      { label: "Faculty", value: "College of Science and Technology" },
      {
        label: "Contract",
        value: "Architecture, construction and supervision",
      },
      { label: "Status", value: "Completed and in use" },
    ],
    body: [
      "A faculty building for mining and geology, built into a falling site so that the teaching wings sit either side of a sunken central court rather than on top of the hill.",
      "The section does the work. Ramped walkways carry students down from the upper approach onto planted roofs and into the courtyard, which means the building can be entered at two levels without a lift core and without cutting a flat terrace out of the slope.",
      "The colonnaded blocks give every teaching room a shaded external walkway, so circulation runs outside the envelope and the rooms themselves stay quiet and cool.",
    ],
  },
  {
    id: "ur-cavm-busogo-smart-classroom",
    title: "UR-CAVM Busogo Smart Classroom",
    category: "institutional",
    categoryLabel: "Education & Institutional",
    location: "Busogo, Musanze — Rwanda",
    year: "Completed",
    duration: "To be confirmed",
    client: "UR-CAVM Busogo",
    status: "Completed",
    scope: "Architecture · Construction · ICT fit-out",
    summary:
      "A brick-clad teaching block with a deep colonnade and a smart classroom fit-out.",
    metric: { value: "2", label: "Storeys" },
    featured: true,
    hero: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083716/ISAI-BUSOGO.jpg",
    heroSmall:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083716/ISAI-BUSOGO.jpg",
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083716/ISAI-BUSOGO.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083716/ISAI-BUSOGO-2.jpg",
    design: {
      src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083716/ISAI-BUSOGO.jpg",
      width: 677,
      height: 259,
      alt: "Architect’s render of the teaching block and its brick colonnade",
    },
    alt: "Brick teaching building with a deep columned walkway and a white service wing",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083716/ISAI-BUSOGO.jpg",
        alt: "The teaching block and its white service wing from the forecourt",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083716/ISAI-BUSOGO-2.jpg",
        alt: "The brick colonnade and paved walkway along the classroom face",
      },
    ],
    facts: [
      { label: "Client", value: "UR-CAVM Busogo" },
      { label: "Location", value: "Busogo, Musanze District" },
      {
        label: "Contract",
        value: "Architecture, construction and ICT fit-out",
      },
      { label: "Status", value: "Completed and in use" },
    ],
    body: [
      "A teaching building for UR-CAVM Busogo, fitted out as a smart classroom — the room, its power and its data all designed together rather than the equipment being chased into a finished shell.",
      "The face of the building is a deep brick colonnade. It shades the glazing from the low sun, keeps the walkway dry through the rains that this part of the country gets reliably, and does both without a single mechanical part.",
      "Brick was chosen for what it costs over time rather than what it costs on day one: laid locally, it needs no coating, no repainting cycle and very little of anyone’s attention once it is up.",
    ],
  },
  {
    id: "kimironko-apartment",
    title: "Kimironko Apartment",
    category: "residential",
    categoryLabel: "Residential",
    location: "Kimironko, Kigali",
    year: "Completed",
    duration: "To be confirmed",
    client: "Private client",
    status: "Completed",
    scope: "Architecture · Construction · Finishes",
    summary:
      "Stacked living volumes on a stone plinth, turned to hold the valley view.",
    metric: { value: "3", label: "Levels" },
    featured: true,
    hero: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084657/KIMIRONGO-3.jpg",
    heroSmall:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084657/KIMIRONGO-3.jpg",
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084657/KIMIRONGO-3.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084619/KIMIRONKO-2.jpg",
    alt: "White apartment building on a stone plinth overlooking the Kigali hills",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084621/KIMIRONKO.jpg",
        alt: "The upper floors cantilevered over the stone plinth",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084618/KIMIRONKO-1.jpg",
        alt: "The building at night with the soffits lit",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084656/KIMIRNKO-2.jpg",
        alt: "The house on its slope, seen from the lower approach",
      },
    ],
    facts: [
      { label: "Location", value: "Kimironko, Kigali" },
      { label: "Contract", value: "Architecture, construction and finishes" },
      { label: "Site", value: "Sloping plot with a valley aspect" },
      { label: "Status", value: "Completed" },
    ],
    body: [
      "An apartment building in Kimironko, stepped up a sloping plot so that every level opens onto the valley rather than onto the road behind it.",
      "The stone plinth is structural, not decorative. It retains the slope and carries the terraces, which let the white volumes above sit clear of the ground and read as one composition rather than as a wall of storeys.",
      "Deep reveals and recessed balconies keep direct sun off the glazing through the middle of the day, so the rooms stay usable without relying on mechanical cooling.",
    ],
  },
  {
    id: "rebero-villa",
    title: "Rebero Villa",
    category: "residential",
    categoryLabel: "Residential",
    location: "Rebero, Kigali",
    year: "In progress",
    duration: "Ongoing",
    client: "Private client",
    status: "On site",
    scope: "Architecture · Structure · Construction",
    summary:
      "A hillside villa in frame, its stone-clad piers rising off a terraced plot.",
    metric: { value: "2", label: "Levels" },
    featured: true,
    hero: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083871/REBERO-VILLA-5.jpg",
    heroSmall:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083871/REBERO-VILLA-5.jpg",
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083871/REBERO-VILLA-5.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083871/REBERO-VILLA-5.jpg",
    design: {
      src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083871/REBERO-VILLA-5.jpg",
      width: 620,
      height: 330,
      alt: "Architect’s render of the villa, planted terraces stepping down the slope",
    },
    alt: "Villa under construction with stone-clad piers and a concrete frame on a hillside",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084485/REBERO-VILLA-11.jpg",
        alt: "Stone-clad piers and the cast concrete frame",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083869/REBERO-VILLA-3.jpg",
        alt: "Front elevation with the deep roof overhang cast",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083870/REBERO-VILLA.jpg",
        alt: "The frame under construction with the crew on site",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790083870/REBERO-VILLA-4.jpg",
        alt: "The villa on its terraced plot, seen from below",
      },
    ],
    facts: [
      { label: "Location", value: "Rebero, Kigali" },
      {
        label: "Contract",
        value: "Architecture, structural design and construction",
      },
      { label: "Site", value: "Terraced hillside plot" },
      { label: "Status", value: "On site — structure and cladding" },
    ],
    body: [
      "A private villa on the Rebero ridge, currently on site. The frame is up, the stone cladding is going on and the deep roof overhangs are cast.",
      "The plot falls steeply, so the house is built off a terraced retaining structure that doubles as the lower floor’s rear wall — one structure doing two jobs, which took a whole line of foundations out of the job.",
      "Local stone is carried up the piers and the boundary walls so the built edge of the plot reads as one piece with the house rather than as a fence added afterwards.",
    ],
  },
  {
    id: "lamar-retirement-house",
    title: "Lamar Retirement House",
    category: "design",
    categoryLabel: "Design",
    location: "Runda, Kamonyi \u2014 Rwanda",
    year: "2024",
    duration: "Design stage",
    client: "Private client",
    status: "In design",
    scope: "Design only \u00b7 Architecture \u00b7 Documentation",
    summary:
      "Two pitched pavilions on a terraced garden plot, drawn for living on one level.",
    metric: { value: "2", label: "Pavilions" },
    featured: true,
    hero: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790171921/lamar-retirement-house-runda-front-view.jpg",
    heroSmall:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790171921/lamar-retirement-house-runda-front-view.jpg",
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790171918/lamar-retirement-house-runda-aerial-view.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790171925/lamar-retirement-house-runda-street-view.jpg",
    alt: "Render of the house from above, its pool, court and terraced garden laid out below",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790171921/lamar-retirement-house-runda-front-view.jpg",
        alt: "The garden front, with exposed timber trusses over the gable glazing",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790171915/lamar-retirement-house-runda-aerial-roof-solar.jpg",
        alt: "The solar array laid across the main pitched roof",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790171926/lamar-retirement-house-runda-top-view.jpg",
        alt: "Plan view of the plot: house, pool, court and stepped garden path",
      },
    ],
    facts: [
      { label: "Location", value: "Runda, Kamonyi District" },
      { label: "Drawing set", value: "Design documents, April 2024" },
      {
        label: "Our role",
        value: "Design only \u2014 architecture and the full drawing set",
      },
      { label: "Status", value: "In design \u2014 not yet on site" },
    ],
    body: [
      "A retirement house at Runda in Kamonyi. This one is design work: the architecture and the full drawing set are ours, and the building has not yet gone to site. It is drawn as two pitched pavilions with exposed timber trusses, linked by a lower flat-roofed middle section that holds the entrance.",
      "Who it is for shaped the plan. The design documents carry an instruction that the work comply with prevailing accessibility requirements, and the house is laid out to be lived in on one level, with the garden reached by ramped and stepped routes rather than a single flight.",
      "The plot is terraced rather than levelled. Pool, terrace and a hard court step down the slope below the house, and a solar array sits across the main roof pitch, which faces the right way for it.",
    ],
  },
  {
    id: "nyamata-commercial-building",
    title: "Nyamata Commercial Building",
    category: "commercial",
    categoryLabel: "Commercial",
    location: "Nyamata, Bugesera \u2014 Rwanda",
    year: "In progress",
    duration: "Ongoing",
    client: "Private developer",
    status: "On site",
    scope: "Architecture \u00b7 Structure \u00b7 Construction",
    summary:
      "Shopfronts at street level with balconied floors above, cut into a hillside plot.",
    metric: { value: "4", label: "Levels" },
    // Still on site, so the covers are the renders rather than a half-built
    // shell: `image` is the angled view, `detail` the front elevation, and the
    // card cross-fades between the two. Every construction frame is in the
    // gallery below, in the order the job was built.
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583268/nyamata-commercial-building.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583268/nyamata-commercial-building-detail.jpg",
    design: {
      src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583268/nyamata-commercial-building.jpg",
      width: 1600,
      height: 900,
      alt: "Architect\u2019s render of the commercial block seen from the street corner",
    },
    alt: "Architect’s render of the commercial block, lit at dusk",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583251/nyamata-1.jpg",
        alt: "Foundations being dug out across the sloping plot",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583251/nyamata-2.jpg",
        alt: "Column starters cast and the pad foundations taking shape",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583253/nyamata-3.jpg",
        alt: "Slab formwork and reinforcement seen from above",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583252/nyamata-4.jpg",
        alt: "Brickwork going up behind timber scaffolding",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583252/nyamata-5.jpg",
        alt: "The frame and brick infill with the crew on site",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583252/nyamata-6.jpg",
        alt: "Brickwork rising behind the scaffolding on the rear elevation",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583254/nyamata-7.jpg",
        alt: "The steel roof frame going up over the finished brickwork",
      },
    ],
    facts: [
      { label: "Location", value: "Nyamata, Bugesera District" },
      { label: "Use", value: "Retail at street level, lettable floors above" },
      {
        label: "Contract",
        value: "Architecture, structural design and construction",
      },
      { label: "Status", value: "On site \u2014 frame and envelope" },
    ],
    body: [
      "A commercial block in Nyamata: shopfronts opening straight onto the street at the lower level, with balconied lettable floors stacked above them.",
      "The plot falls away sharply, so the building starts as a set of pad foundations stepped down the slope. Getting those levels right was most of the early work \u2014 the street frontage had to meet the road exactly while the rear of the building picked up the drop.",
      "The frame is concrete, the infill is local brick, and the roof structure was framed in timber on site. It is a straightforward way to build here, and it keeps the trades and the materials within reach of the town the building serves.",
    ],
  },
  {
    id: "muyange-apartment",
    title: "MUYANGE Apartment",
    category: "residential",
    categoryLabel: "Residential",
    location: "Muyange, Rwanda",
    year: "In progress",
    duration: "Ongoing",
    client: "Private developer",
    status: "On site",
    scope: "Architecture · Construction",
    summary:
      "Stepped apartment blocks with pergola-shaded terraces, structure complete.",
    metric: { value: "3", label: "Blocks" },
    // Not featured: every Muyange frame is 1000px wide, too small for the
    // full-bleed hero. A larger original would let it join the slider.
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084587/MYANGE-3.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084584/MUYANGE-15.jpg",
    design: {
      src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084575/MUYANGE-6.jpg",
      width: 727,
      height: 472,
      alt: "Architect’s render of the apartment blocks and their shaded terraces",
    },
    alt: "Cream apartment blocks with ribbed render panels behind a block boundary wall",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084573/MUYANGE-1.jpg",
        alt: "Stacked terraces seen from the foot of the block",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084508/MUYANGE-13.jpg",
        alt: "Cream volumes and pergola beams against the sky",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084582/MUYANGE-12.jpg",
        alt: "The blocks stepping down the site",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084580/MUYANGE-10.jpg",
        alt: "Frontal view of the upper terraces",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084587/MYANGE-3.jpg",
        alt: "The gated entrance front",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084575/MUYANGE-6.jpg",
        alt: "The run of blocks behind the boundary wall",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790084573/MUYANGE-1.jpg",
        alt: "The development seen across the open site",
      },
    ],
    facts: [
      { label: "Location", value: "Muyange, Rwanda" },
      { label: "Contract", value: "Architecture and construction" },
      { label: "Form", value: "Stepped blocks with shaded terraces" },
      { label: "Status", value: "On site — structure complete" },
    ],
    body: [
      "A residential development of stepped apartment blocks, photographed with the structure complete and the finishes still to come.",
      "Concrete pergola beams run over the upper terraces. They are cast with the frame rather than added later, so the shading is part of the structure and there is nothing bolted on to fail or need repainting.",
      "The blocks are set apart and staggered, which gives every unit a private outlook and lets air move between them instead of trapping heat in a single continuous slab of building.",
    ],
  },
  {
    id: "imena-school",
    title: "Imena School",
    category: "institutional",
    categoryLabel: "Education & Institutional",
    location: "Jabana, Gasabo — Kigali",
    year: "2017",
    duration: "2014 – 2017",
    client: "Imena School",
    status: "Completed",
    scope: "Architecture · Master planning · Construction",
    summary:
      "A hillside school campus of brick teaching blocks, linked by ramps and an open court.",
    metric: { value: "10+", label: "Buildings" },
    // Kept last in the list so the six-card preview on the home page stays as
    // it was; HERO_LEAD below moves it up in the slider. The hero is the
    // campus render rather than a photograph, with a thumbnail to match.
    featured: true,
    hero: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583906/imena-school_sm.jpg",
    heroSmall:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583906/imena-school_sm.jpg",
    heroThumb:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583906/imena-school_sm.jpg",
    image:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583906/imena-school_sm.jpg",
    detail:
      "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579956/imena-school-detail.jpg",
    design: {
      src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790583906/imena-school_sm.jpg",
      width: 1600,
      height: 1066,
      alt: "Architect’s aerial render of the whole campus, the court at its centre",
    },
    alt: "Brick school block under a red hipped roof, seen across its paved forecourt",
    gallery: [
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790580003/imena-1.jpg",
        alt: "The red-roofed block and its terraces, the city on the hills beyond",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790580005/imena-2.jpg",
        alt: "Two-storey classroom block behind the playground",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579990/imena-3.jpg",
        alt: "The ramped walkway running between the brick blocks",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579999/imena-4.jpg",
        alt: "Switchback ramps stepping down past the single-storey blocks",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790580002/imena-5.jpg",
        alt: "Stone retaining walls and rails along the upper ramp",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790579995/imena-6.jpg",
        alt: "The stepped amphitheatre seating above the paved court",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790580012/imena-7.jpg",
        alt: "The open court, the terraces and the classroom blocks behind",
      },
      {
        src: "https://res.cloudinary.com/gg1lvim6/image/upload/v1790580012/imena-8.jpg",
        alt: "Brick wings and planting in a quiet inner courtyard",
      },
    ],
    facts: [
      { label: "Client", value: "Imena School" },
      {
        label: "Location",
        value: "Masangano, Kabuye Cell, Jabana Sector — Gasabo District",
      },
      {
        label: "Contract",
        value: "Architecture, master planning and construction",
      },
      { label: "Built", value: "2014 – 2017" },
      { label: "Status", value: "Completed and in use" },
    ],
    body: [
      "A full school campus on a steep hillside: classroom blocks, a two-storey teaching wing, an open court with amphitheatre seating and the ramps that tie them together.",
      "The site was planned as a whole before any building went up. The blocks step down the slope on their own terraces, and ramped walkways rather than stairs link one level to the next, so every part of the school can be reached on foot without a single lift.",
      "Every block is built the same way — exposed brick, a pale concrete frame and a red hipped roof — which keeps the campus reading as one place and keeps its upkeep simple for the school.",
    ],
  },
];

/**
 * The slider's running order is its own, so it can differ from the grid's.
 * These open the slider in this order; every other featured project follows
 * in the order it has in the list above.
 */
const HERO_LEAD = [
  "kagugu-apartment",
  "imena-school",
  "lamar-retirement-house",
];

export const featuredProjects = [
  ...HERO_LEAD.map((id) => projects.find((p) => p.id === id)),
  ...projects.filter((p) => p.featured && !HERO_LEAD.includes(p.id)),
];

/** How many projects sit under each filter id, keyed the same way as FILTERS. */
export const projectCounts = Object.fromEntries(
  FILTERS.map((f) => [
    f.id,
    f.id === "all"
      ? projects.length
      : projects.filter((p) => p.category === f.id).length,
  ]),
);

/** Look a project up by its URL id. */
export const getProject = (id) => projects.find((p) => p.id === id);

/** The next project in the list, for the link at the foot of a project page. */
export const getNextProject = (id) => {
  const i = projects.findIndex((p) => p.id === id);
  return projects[(i + 1) % projects.length];
};
