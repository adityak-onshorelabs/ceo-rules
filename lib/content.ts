// Site copy. Structure and wording follow the Sept 2026 redesign handoff
// ("CEO Rules website redesign"). Photo notes (`audit`) show only with ?audit
// in the URL; they list which frames still need the brief's 3000px reshoot.

export const site = {
  whatsapp: { label: "WhatsApp +91 98333 14141", href: "https://wa.me/919833314141" },
  instagram: "https://www.instagram.com/ceorules/",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=CEO+Rules+Shabistan+CHSL+Dr+Ambedkar+Road+Bandra+West+Mumbai",
  address: ["Shabistan CHSL, 319/A", "Dr Ambedkar Road, Bandra West", "Mumbai 400 050"],
  hours: ["Every day", "10:30 am – 9:00 pm"],
  appointment: "/appointment",
};

export const nav = {
  left: [
    { label: "The House", href: "/house" },
    { label: "The Bespoke", href: "/bespoke" },
  ],
  right: [
    { label: "The Wardrobe", href: "/the-wardrobe" },
    { label: "The Rules", href: "/philosophy" },
  ],
  cta: { label: "Visit the Atelier", href: "/appointment" },
};

export const footer = {
  line: "A family house of bespoke tailoring, in Mumbai. Est. 1881.",
  links: [
    { label: "The Cloth", href: "/the-cloth" },
    { label: "The Atelier", href: "/atelier" },
    { label: "Instagram", href: site.instagram, external: true },
    { label: "WhatsApp", href: site.whatsapp.href, external: true },
    { label: "Appointment", href: site.appointment },
  ],
};

export const testimonial = {
  quote:
    "I flew into Mumbai for a wedding with no time to spare. Anis fitted me the same day, then flew a tailor with our finished suits to Goa. Heading back to the US I noticed a flaw on a button — his tailor met me at the airport and fixed it in five minutes outside baggage claim.",
  by: "Mujtaba Khambatti · client, nineteen years",
};

export const theEye = {
  kicker: "The Eye",
  name: "Anis Soomar",
  pull: "Anyone can sell you expensive cloth. Judgement is the part you cannot buy by the metre.",
  body: "Proportion, fit, cloth, occasion, personality, and how a man should actually wear the thing. Thirty years of deciding those six things correctly, for one man at a time.",
  cta: "Sit with Anis",
};

// The houses we keep. Logos supplied by the client (public/brand/mills),
// transparent PNGs, 300×123. `scale` evens out optical weight: each file has
// different padding around its mark, so thin wordmarks are drawn larger.
export const mills = [
  { name: "Loro Piana", logo: "/brand/mills/loro-piana.png", scale: 1.3 },
  { name: "Zegna", logo: "/brand/mills/zegna.png", scale: 1.5 },
  { name: "Scabal", logo: "/brand/mills/scabal.png", scale: 1 },
  { name: "ALUMO", logo: "/brand/mills/alumo.png", scale: 1.05 },
  { name: "Canclini", logo: "/brand/mills/canclini.png", scale: 1.15 },
  { name: "S.I.C. Tess", logo: "/brand/mills/sic-tess.png", scale: 1 },
  { name: "Roger La Viale", logo: "/brand/mills/roger-la-viale.png", scale: 1.05 },
  { name: "Raymond", logo: "/brand/mills/raymond.png", scale: 0.95 },
];

// ---------------------------------------------------------------------------
// Homepage: the brief's eight-act sequence.
// ---------------------------------------------------------------------------
export const home = {
  hero: {
    kicker: "Mumbai · Since 1881",
    title: "Private tailoring for a more considered life.",
    cta: "Book a Private Appointment",
    image: "/images/storefront-day.jpg",
    alt: "The CEO Rules storefront by day, suits on the stands behind the glass",
    audit:
      "Client-supplied · 1280×960, reads as a rendering — confirm it matches the real façade before launch. Want a 3000px photograph, plus an 8s loop.",
  },
  statement: {
    lead: "A house in Bandra, six generations in cloth, one man's eye.",
    body: "We are not a shop. You come in, you sit down, and we talk about the rooms you walk into before we talk about cloth. Everything after that is a consequence of that conversation.",
  },
  cloth: {
    kicker: "The Cloth",
    title: "A wardrobe begins in the book.",
    body: "Before a measurement, before a cut, there is a decision made with your hands. We keep the books that are worth opening.",
    millsLabel: "The houses we keep",
    cta: { label: "The Bespoke", href: "/bespoke" },
    image: "/images/stock/cloth.jpg",
    alt: "Folded lengths of tartan wool stacked on the shelf",
    audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
  },
  craft: {
    kicker: "The Craft",
    title: "Most of the work never shows.",
    steps: [
      {
        label: "01 / The Cut",
        line: "Every line begins on the table.",
        image: "/images/stock/craft-cut.jpg",
        alt: "A tailor's hands laying out pieces of tweed on a wooden cutting table",
        position: "50% 50%",
        audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
      },
      {
        label: "02 / The Canvas",
        line: "Structure without stiffness.",
        image: "/images/stock/craft-canvas.jpg",
        alt: "Shears cutting along a paper pattern on the table",
        position: "50% 50%",
        audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
      },
      {
        label: "03 / The Fit",
        line: "Adjusted on the man, not the form.",
        image: "/images/stock/craft-fit.jpg",
        alt: "A man fastening a navy jacket, shirt cuffs and watch showing",
        position: "50% 40%",
        audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
      },
      {
        label: "04 / The Finish",
        line: "The work most people never see.",
        image: "/images/stock/craft-finish.jpg",
        alt: "A teal jacket lapel with a folded pocket square",
        position: "50% 45%",
        audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
      },
    ],
  },
  eye: {
    video: "/video/anis-cloth-loop.mp4",
    image: "/images/eye-poster.jpg",
    alt: "Anis Soomar at his desk, a length of grey suiting in his hands",
    position: "23% 50%",
    mobilePosition: "15% 50%",
    audit:
      "Temporary · 1024×576 phone video, 67s — right moment, low resolution. Reshoot in 4K: Anis handling cloth, warm light, 10–15s loop.",
  },
  wardrobe: {
    kicker: "The Wardrobe",
    title: "This is what the house can make for you.",
    categories: ["Suits", "Shirts", "Jackets", "Tuxedos", "Bandhgalas", "Sherwanis"],
    cta: "The Wardrobe",
    image: "/images/stock/wardrobe-rack.jpg",
    alt: "Finished jackets on a brass rail",
    audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
  },
  reels: {
    kicker: "From the House",
    title: "Three things worth knowing before you commission anything.",
    more: { label: "More from the house", href: "/philosophy" },
    items: [
      {
        line: "The details speak before you do.",
        href: "https://www.instagram.com/ceorules/",
        image: "/images/lapel.jpg",
        alt: "Reel: folded pocket squares in the house patterns",
        position: "50% 40%",
      },
      {
        line: "True luxury is never loud.",
        href: "https://www.instagram.com/ceorules/",
        image: "/images/tuxedo-detail.webp",
        alt: "Reel: a finished tuxedo on the stand, satin lapel and pleated shirt",
        position: "50% 42%",
      },
      {
        line: "Better combinations, not more clothes.",
        href: "https://www.instagram.com/ceorules/",
        image: "/images/ties.jpg",
        alt: "Reel: silk ties laid out in combination",
        position: "50% 45%",
      },
    ],
    audit: "Poster stand-in · select 3 Reels · 1080×1920 posters",
  },
  heritage: {
    kicker: "The House",
    title: "Six generations in the clothing industry. A history that traces to 1881.",
    body: "The family began in cloth, in Crawford Market. What was traded became what was cut, and what was cut became a way of speaking to a man about himself. The house carries that forward in Bandra.",
    cta: { label: "The House", href: "/house" },
  },
  visit: {
    kicker: "Visit",
    title: "Come sit with us in Bandra.",
    body: "A cup of coffee, and no obligation to commission anything. Anis will tell you honestly whether we are the right house for you.",
    cta: "Book a Private Appointment",
    image: "/images/interior.jpg",
    alt: "Inside the house in Bandra",
    audit:
      "Temporary · 1206×1175 — reads as retail shelving. Want the seating area, coffee on the table, someone mid-conversation. 3000px portrait.",
  },
};

// ---------------------------------------------------------------------------
// The House
// ---------------------------------------------------------------------------
export const house = {
  hero: {
    kicker: "The House · Since 1881",
    title: "Six generations in cloth.",
    image: "/images/storefront.jpg",
    alt: "The house on Dr Ambedkar Road, Bandra",
  },
  breath: {
    title: "A trade that became a craft.",
    body: [
      "The family began in cloth, in Crawford Market. What was traded became what was cut, and what was cut became a way of speaking to a man about himself. The house carries that forward in Bandra, and it is still run by the family.",
      "Nothing here is licensed, franchised, or made elsewhere. The measuring, the cutting and the fitting happen in one room, which is the only reason the standard holds.",
    ],
  },
  plates: [
    { image: "/images/interior.jpg", alt: "Inside the house", position: "46% 50%" },
    { image: "/images/founder-stitching.webp", alt: "Hand stitching at the bench", position: "46% 60%" },
    { image: "/images/ties.jpg", alt: "Accessories and ties", position: "50% 45%" },
  ],
  // The house abroad: Anis among the tailoring world.
  world: {
    kicker: "Beyond Bandra",
    title: "The house travels.",
    body: "The craft is a small world. Anis keeps his place in it — among master tailors in Kuala Lumpur, at exhibitions at home — and brings back what he sees to one room in Bandra.",
    plates: [
      {
        image: "/images/world-record.jpg",
        alt: "Anis Soomar holding the Malaysia Book of Records certificate at the KL International Suit Walk",
        position: "50% 22%",
        caption: "Kuala Lumpur, 2024 · the International Suit Walk, a Malaysia Book of Records national record",
      },
      {
        image: "/images/world-suitwalk.jpg",
        alt: "Anis Soomar in a bandhgala with a fellow guest at the KL International Suit Walk",
        position: "50% 30%",
        caption: "Among master tailors from across Asia",
      },
      {
        image: "/images/world-exhibition.jpg",
        alt: "Anis Soomar in a bandhgala beside a suit on the stand at an exhibition",
        position: "60% 45%",
        caption: "At an exhibition, in a bandhgala of the house",
      },
    ],
  },
  portrait: {
    image: "/images/principals-portrait.png",
    alt: "Anis Soomar in the atelier",
    position: "56% 24%",
    audit: "Replace · 545×612 — confirm which figure is Anis; need a 3000px portrait, warm atelier light.",
  },
};

// ---------------------------------------------------------------------------
// The Bespoke
// ---------------------------------------------------------------------------
export const bespoke = {
  hero: {
    kicker: "The Bespoke",
    title: "One garment, cut for one man.",
    lede: "Here is exactly what happens between the first conversation and the finished coat.",
    image: "/images/bolts.jpg",
    alt: "Folded bolts of cloth in the atelier",
  },
  breath: {
    title: "Bespoke is a process, not a purchase.",
    body: "There is no rail to choose from and no size to fall into. A pattern is drafted for your body, cut by hand, and adjusted on you across fittings until the garment does what you need it to do. That is the whole of it.",
  },
  // Brief §15: six stages, shown one at a time in a large photographic field.
  steps: [
    {
      title: "Private Consultation",
      when: "The first visit",
      body: "We talk before we measure. What rooms you walk into, what your week looks like, what you already own and never wear. Anis will tell you what to commission and, more usefully, what not to.",
      image: "/images/eye-poster.jpg",
      alt: "Anis Soomar at his desk with a length of suiting",
      position: "30% 50%",
    },
    {
      title: "Fabric Selection",
      when: "Same visit",
      body: "The books come out. Weight, weave and season matter more than the name on the selvedge, and Mumbai narrows the field further than most men expect. You will handle the cloth before you choose it.",
      image: "/images/bolts.jpg",
      alt: "Swatches of suiting and jacketing fanned on the table",
      position: "50% 50%",
    },
    {
      title: "Measurement",
      when: "Drafted in house",
      body: "Around thirty measurements, then a paper pattern drafted for your posture: one shoulder lower than the other, as it is for almost everyone. The pattern is kept, so the second commission is easier than the first.",
      image: "/images/craft-cut.jpg",
      alt: "Anis Soomar cutting cloth with shears on the table",
      position: "50% 50%",
    },
    {
      title: "Fitting & Reshaping",
      when: "At the fittings",
      body: "A basted garment first, held together loosely so it can be opened and moved. You walk in it, sit in it, reach in it. It is reshaped on you until the line is right.",
      image: "/images/anis-fitting.jpg",
      alt: "Anis Soomar adjusting a jacket at the shoulder during a fitting",
      position: "62% 40%",
    },
    {
      title: "Final Hand-Finishing",
      when: "In the atelier",
      body: "Buttonholes, lining, pressing. The work nobody sees and everybody feels, done by hand.",
      image: "/images/founder-stitching.webp",
      alt: "Hand-stitching at the lapel, green thread through canvas",
      position: "46% 60%",
    },
    {
      title: "Delivery",
      when: "When it is right",
      body: "The garment stays ours until it is right. It is yours when it disappears on you, and it comes back to us for alterations for as long as you wear it.",
      image: "/images/lapel.jpg",
      alt: "A finished jacket lapel with a folded pocket square",
      position: "50% 40%",
    },
  ],
  price: {
    kicker: "What it costs",
    title: "Price follows the cloth and the hours, and we tell you both before anything is cut.",
    body: "There is no published price list because there is no standard garment. What we will do, in the first conversation, is give you a firm number for what you are considering — and say plainly if a simpler commission would serve you better.",
  },
};

// ---------------------------------------------------------------------------
// The Wardrobe
// ---------------------------------------------------------------------------
export const wardrobe = {
  hero: {
    kicker: "The Wardrobe",
    title: "Better combinations, not more clothes.",
    image: "/images/stock/wardrobe-rack.jpg",
    alt: "Finished jackets on a brass rail",
    audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
  },
  breath: {
    title: "Six things the house makes.",
    body: "Most men need fewer garments than they own and more range from each one. What follows is the working repertoire — Western and Indian formalwear held to the same standard, because a Mumbai wardrobe has to do both.",
  },
  pieces: [
    {
      label: "01 / Suits",
      title: "The one that has to work everywhere.",
      body: "Two or three-piece, single or double breasted, in weights that survive a Mumbai afternoon.",
      image: "/images/stock/craft-fit.jpg",
      audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
      alt: "A man fastening a navy suit jacket",
      position: "50% 40%",
    },
    {
      label: "02 / Shirts",
      title: "Where fit is noticed first.",
      body: "Collar, cuff and yoke drafted to you. ALUMO, Canclini and S.I.C. Tess cottons.",
      image: "/images/stock/shirts.jpg",
      audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
      alt: "White and pale blue shirts on wooden hangers",
      position: "50% 50%",
    },
    {
      label: "03 / Jackets",
      title: "The most used thing you will own.",
      body: "Softer in the shoulder, lighter in the canvas. Worn six days out of seven.",
      image: "/images/stock/jacket.jpg",
      audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
      alt: "A checked jacket with a bow tie on a form",
      position: "55% 40%",
    },
    {
      label: "04 / Tuxedos",
      title: "Evening dress has rules for a reason.",
      body: "Grosgrain or satin facing, no notch lapel, no black tie worn as a suit.",
      image: "/images/stock/tuxedo.jpg",
      audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
      alt: "A black tuxedo with a bow tie and waistcoat",
      position: "50% 35%",
    },
    {
      label: "05 / Bandhgalas",
      title: "Cut with a tailor's discipline.",
      body: "The closed collar is unforgiving. It is drafted here the way a coat is, not draped.",
      image: "/images/stock/bandhgala.jpg",
      alt: "A man in a black embroidered bandhgala",
      position: "50% 30%",
      audit: "Stock placeholder, 736px and likely another brand's catalogue image: do not ship",
    },
    {
      label: "06 / Sherwanis",
      title: "For the day you are looked at all day.",
      body: "Commission early. Wedding work needs its own calendar, and we will tell you when to start.",
      image: "/images/stock/sherwani.jpg",
      alt: "An ivory sherwani on a stand in a doorway of flowers",
      position: "50% 55%",
      audit: "Stock placeholder · replace with CEO Rules photography before launch (brief §4, §28)",
    },
  ],
  close: {
    kicker: "Where to start",
    title: "Come in with the wardrobe you have. We will tell you what is missing.",
  },
};

// ---------------------------------------------------------------------------
// Appointment
// ---------------------------------------------------------------------------
export const appointment = {
  image: "/images/eye-poster.jpg",
  alt: "Anis Soomar at his desk with a length of suiting",
  place: "Bandra West · Mumbai",
  pull: "A cup of coffee, and no obligation to commission anything.",
  kicker: "Appointment",
  title: "Come sit with us.",
  body: "Appointments are held one at a time, so the room is yours. Tell us roughly what you have in mind and we will hold the hour.",
  fallback: "Message us on WhatsApp with a day and time that suits you, and we will confirm the hour.",
};

// ---------------------------------------------------------------------------
// The Cloth (not in the redesign set; kept and restyled)
// ---------------------------------------------------------------------------
export const cloth = {
  hero: {
    kicker: "The Cloth",
    title: "The cloth remembers where it came from.",
    lede: "A jacket is only ever as honest as the cloth beneath it. We keep the finest houses in the world, and we keep them for what they do, not for what they say.",
    image: "/images/cloth-shelves.jpg",
    alt: "Cloth books and folded bolts on the shelves of the atelier",
  },
  housesLabel: "The houses we keep",
  // Provenance kept to what is certain; lines are provisional copy for sign-off.
  houses: [
    { name: "Loro Piana", place: "Italy", line: "The finest wool and cashmere, kept for what it does in the hand." },
    { name: "Zegna", place: "Italy", line: "Suiting milled from the longest fibres, for cloth that holds its line." },
    { name: "Scabal", place: "Brussels", line: "Suiting worn like jewellery. The Noble Diamond book lives on our desk." },
    { name: "ALUMO", place: "Switzerland", line: "Swiss two-ply cottons: the shirting that holds a collar all day." },
    { name: "Canclini", place: "Italy", line: "Italian shirting in weaves that read from across a room." },
    { name: "S.I.C. Tess", place: "Italy · since 1924", line: "Italian shirting cloth, a century in the making." },
    { name: "Roger La Viale", place: "Since 1932", line: "Shirting with a quiet pattern and a long memory." },
    { name: "Raymond", place: "India", line: "The house cloth of India, for everyday suiting done properly." },
  ].map((h) => ({ ...h, logo: mills.find((m) => m.name === h.name)?.logo ?? "" })),
  teach: {
    kicker: "Why it matters",
    title: "Weight, weave and season matter more than the name on the selvedge.",
    body: "Mumbai narrows the field further than most men expect. You will handle the cloth before you choose it, and we will tell you plainly which books are worth opening for the life you lead.",
  },
  plate: { image: "/images/navy-cloth.jpg", alt: "Navy suiting cloth", position: "50% 50%" },
};

// ---------------------------------------------------------------------------
// The Atelier (not in the redesign set; kept and restyled)
// ---------------------------------------------------------------------------
export const atelier = {
  hero: {
    kicker: "The Atelier",
    title: "Come sit with us in Bandra.",
    lede: "A first visit takes an hour and asks nothing of you. This is how it goes.",
    image: "/images/storefront.jpg",
    alt: "The CEO Rules storefront at dusk, Bandra",
  },
  breath: {
    title: "Nothing to buy today. Only a conversation.",
    body: "The house is a room, not a shop floor. There is coffee, there are the books, and there is Anis — who will tell you honestly whether we are the right house for you.",
  },
  steps: [
    { title: "The conversation", body: "Over coffee, we talk about your life before your measurements: the rooms you walk into, the way you want to be read." },
    { title: "The measure", body: "Anis takes the measure himself. It is the one line a tailor cannot fake, so it is taken slowly." },
    { title: "The cloth", body: "We put the finest houses in front of you, then narrow them to the few that suit your life, not the season." },
    { title: "The fittings", body: "The jacket is built over fittings, a canvas chest shaped by hand, corrected until it disappears on you." },
    { title: "The delivery", body: "It comes to you finished. And if it ever needs us again, we come to you." },
  ],
};

// ---------------------------------------------------------------------------
// Philosophy / The Rules (not in the redesign set; kept and restyled)
// ---------------------------------------------------------------------------
export const insights = {
  hero: {
    kicker: "The Rules",
    title: "What the founder sees.",
    lede: "Anis has spent a lifetime noticing what most people miss. A little of what he has learned, shared freely, whether or not you ever commission a suit.",
    image: "/images/lapel.jpg",
    alt: "A finished lapel and pocket square",
  },
  entries: [
    {
      id: "details",
      tag: "The detail",
      title: "The details make all the difference.",
      body: "Timeless style is decided in the details. From the lapel to the shoulder, and every stitch in between, each choice shapes a suit that stands out without asking to.",
      image: "/images/lapel.jpg",
      imageAlt: "A jacket lapel with a folded pocket square",
    },
    {
      id: "winchester",
      tag: "The shirt",
      title: "The Winchester, evolved.",
      body: "Not every classic belongs in the past; some evolve with it. The Winchester shirt has long stood for refinement and authority. We reimagine it with coordinated collars and cuffs, and bring heritage tailoring into the modern wardrobe.",
      image: "/images/tuxedo-detail.webp",
      imageAlt: "A pleated dress shirt and satin lapel on the stand",
    },
    {
      id: "combinations",
      tag: "The wardrobe",
      title: "Better combinations, not more clothes.",
      body: "A well-dressed man does not need more clothes. He needs better combinations. A timeless wardrobe is not dozens of outfits; it is a few versatile essentials that work together effortlessly. Build one that works smarter, not bigger.",
      image: "/images/ties.jpg",
      imageAlt: "Silk ties laid out in combination",
    },
    {
      id: "trends",
      tag: "On style",
      title: "Trends come and go. Style stays.",
      body: "Oversized is not always stylish, and true elegance is never accidental. Dress for lasting impact, not for the fashion of a season.",
      image: "/images/canvas.jpg",
      imageAlt: "Tape and tailor's form on the cutting table",
    },
    {
      id: "solaro",
      tag: "The cloth",
      title: "True luxury is never loud.",
      body: "It is thoughtful, timeless, and made with purpose. Solaro is more than a fabric; it is a legacy of intelligent tailoring, cut to keep its wearer comfortable while carrying an effortless ease. Chosen not for trends, but for the finer details. Style fades. Class endures.",
      image: "/images/navy-cloth.jpg",
      imageAlt: "Navy suiting cloth",
    },
    {
      id: "fit",
      tag: "The fit",
      title: "An expensive suit means nothing if it does not fit.",
      body: "The perfect fit never demands attention. It moves with you like a second skin, with no pulling, no bunching, no constant adjusting. A few things to look for:",
      list: [
        "No gap between the shirt and the jacket collar.",
        "Shoulders that sit, neither drooping nor tight.",
        "Lapels in proportion to your chest and frame.",
      ],
      coda: "True elegance is not about the price. It is about precision.",
      image: "/images/anis-fitting.jpg",
      imageAlt: "Anis Soomar fitting a jacket at the shoulder",
    },
    {
      id: "legend",
      tag: "The craft",
      title: "What makes a tailor a legend.",
      body: "The eye to notice the smallest detail. Craftsmanship is not only stitching cloth; it is seeing what others miss. Here, every cut, every seam, and every finish is worked with a precision that speaks for itself.",
      image: "/images/founder-stitching.webp",
      imageAlt: "Anis Soomar hand-stitching, green thread through cloth",
    },
  ] as {
    id: string;
    tag: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    list?: string[];
    coda?: string;
  }[],
};

// ---------------------------------------------------------------------------
// Sound (brief §16). Optional atelier ambience: fades in to ~12% after the
// visitor's first genuine interaction, with a persistent Sound on/off control.
// `src` must be a properly licensed commercial track hosted locally
// (public/audio). Until one is supplied the control stays hidden.
// ---------------------------------------------------------------------------
export const sound = {
  // Set to the licensed track once supplied, e.g. "/audio/atelier.mp3"
  // (file in public/audio). While null, nothing is requested and the Sound
  // control stays hidden.
  src: null as string | null,
  volume: 0.12,
  fadeMs: 2000,
};

// ---------------------------------------------------------------------------
// /kazim (brief §19): standalone QR contact card, not linked from the site.
// ---------------------------------------------------------------------------
export const kazim = {
  name: "Kazim Soomar",
  place: "CEO Rules · Mumbai",
  whatsapp: "https://wa.me/919833817791",
  // The site root, so the card works on whatever domain the site ships on.
  website: "/",
};
