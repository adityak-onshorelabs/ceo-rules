// PROVISIONAL copy. Voice follows docs/CEO-Rules-Content-Foundation.md.
// Not final. Final copy comes from the founder interview + copy phase.

export const nav = {
  wordmark: "CEO RULES",
  // Root-relative so the nav works from any page. Quiet links + one gold CTA
  // (DESIGN.md): the whole site drives toward the visit, so it is the one
  // action set apart.
  links: [
    { label: "The House", href: "/house" },
    { label: "The Cloth", href: "/the-cloth" },
    { label: "The Wardrobe", href: "/the-wardrobe" },
    { label: "Philosophy", href: "/philosophy" },
  ],
  cta: { label: "Visit the Atelier", href: "/atelier" },
};

// ---------------------------------------------------------------------------
// The houses we keep. Logos supplied by the client (public/brand/mills),
// transparent PNGs, 300×123. `scale` evens out optical weight: each file has
// different padding around its mark, so thin wordmarks are drawn larger.
// ---------------------------------------------------------------------------
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

export const millBand = {
  eyebrow: "The houses we keep",
  headline: "Eight mills, chosen for what they do in the hand.",
  link: { label: "The Cloth", href: "/the-cloth" },
};

// The line, from 1881 (Brioni /history model). Markers follow the verified
// facts: the year, the generations, Anis's decades, one dated moment abroad.
export const timeline = {
  eyebrow: "The line",
  intro: "It did not begin as a tailoring house. It began as cloth.",
  beats: [
    {
      marker: "1881",
      label: "A house of fabrics",
      body: "The house of Haji Soomar opens in Crawford Market, trading in cloth. First a trade, and then, slowly, a language.",
      image: "/images/IMG_3736.jpg",
      alt: "Bolts of cloth stacked edge on, in the house's colours",
    },
    {
      marker: "IV",
      label: "Four generations",
      body: "The knowledge is handed down, hand to hand, each generation adding a little and letting nothing essential fall away.",
      image: "/images/cloth-shelves.jpg",
      alt: "Cloth books and folded bolts on the atelier shelves",
    },
    {
      marker: "30+",
      label: "Years as tailors",
      body: "Anis Soomar grows the fabric house into a tailoring house, stocking the world's finest mills and cutting for the men of the city.",
      image: "/images/founder-stitching.webp",
      alt: "Anis Soomar hand-stitching a lapel, green thread through canvas",
    },
    {
      marker: "2024",
      label: "Among master tailors",
      body: "In Kuala Lumpur, Anis stands with the tailors of Asia at the International Suit Walk, a Malaysia Book of Records national record.",
      image: "/images/world-record.jpg",
      alt: "Anis Soomar holding the national record certificate at the KL International Suit Walk",
    },
    {
      marker: "Today",
      label: "CEO Rules, Bandra",
      body: "One house, where a man is measured, taught, and sent back into the room a little more himself.",
      image: "/images/storefront.jpg",
      alt: "The CEO Rules storefront at dusk, Bandra",
    },
  ],
  close: "Now the number means something.",
};

// Beyond Bandra: the house among the tailoring world (The House page).
export const world = {
  eyebrow: "Beyond Bandra",
  headline: "The house travels.",
  lead: "The craft is a small world. Anis keeps his place in it, among master tailors in Kuala Lumpur and at exhibitions at home, and brings back what he sees to one room in Bandra.",
  plates: [
    {
      image: "/images/world-record.jpg",
      alt: "Anis Soomar holding the Malaysia Book of Records certificate at the KL International Suit Walk",
      caption: "Kuala Lumpur, 2024. The International Suit Walk.",
      aspect: "aspect-[3/4]",
    },
    {
      image: "/images/world-suitwalk.jpg",
      alt: "Anis Soomar in a bandhgala with a fellow guest at the KL International Suit Walk",
      caption: "Among master tailors from across Asia.",
      aspect: "aspect-[4/5]",
    },
    {
      image: "/images/world-exhibition.jpg",
      alt: "Anis Soomar in a bandhgala beside a suit on the stand at an exhibition",
      caption: "At an exhibition, in a bandhgala of the house.",
      aspect: "aspect-[3/5]",
    },
  ],
};

// The Bespoke: the commission, step by step.
export const bespoke = {
  hero: {
    eyebrow: "Bespoke",
    title: "One garment, cut for one man.",
    lede: "A commission takes four to six weeks and three visits. This is what happens between the first conversation and the finished coat.",
    image: "/images/IMG_3736.jpg",
    imageAlt: "Bolts of cloth stacked edge on, in the house's colours",
  },
  intro: {
    headline: "Bespoke is a process, not a purchase.",
    body: "There is no rail to choose from and no size to fall into. A pattern is drafted for your body, cut by hand, and adjusted on you across fittings until the garment does what you need it to do.",
  },
  steps: [
    {
      title: "The conversation",
      when: "Visit one, 45 minutes",
      body: "We talk before we measure. What rooms you walk into, what your week looks like, what you already own and never wear. Anis will tell you what to commission and, more usefully, what not to.",
      image: "/images/eye-poster.jpg",
      alt: "Anis Soomar at his desk, a length of cloth under his hand",
    },
    {
      title: "The cloth",
      when: "Same visit",
      body: "The books come out. Weight, weave and season matter more than the name on the selvedge, and Mumbai narrows the field further than most men expect. You will handle the cloth before you choose it.",
      image: "/images/bespoke-cloth.jpg",
      alt: "A length of grey suiting, fresh from its box",
    },
    {
      title: "The measure and the pattern",
      when: "Drafted in house",
      body: "Around thirty measurements, then a paper pattern drafted for your posture, one shoulder lower than the other as it is for almost everyone. The pattern is kept, so the second commission is easier than the first.",
      image: "/images/craft-cut.jpg",
      alt: "Anis Soomar cutting cloth with shears on the table",
    },
    {
      title: "The fittings",
      when: "Visits two and three",
      body: "A basted garment first, held together loosely so it can be opened and moved. You walk in it, sit in it, reach in it. Two fittings is typical; we will take a third if the coat asks for one.",
      image: "/images/canvas.jpg",
      alt: "A basted canvas chest inside a jacket on the form",
    },
    {
      title: "The finish",
      when: "Four to six weeks from the first visit",
      body: "Buttonholes, lining, pressing. The work nobody sees and everybody feels. The garment stays ours until it is right, and it comes back to us for alterations for as long as you wear it.",
      image: "/images/founder-stitching.webp",
      alt: "Hand-stitching at the lapel",
    },
  ],
  price: {
    eyebrow: "What it costs",
    body: "Price follows the cloth and the hours, and we tell you both before anything is cut. In the first conversation you get a firm number for what you are considering, and a plain word if a simpler commission would serve you better.",
  },
};

// The six things the house makes (The Wardrobe page).
export const garments = {
  eyebrow: "What the house makes",
  headline: "Better combinations, not more clothes.",
  lead: "Western and Indian formalwear held to the same standard, because a Mumbai wardrobe has to do both.",
  items: [
    { name: "Suits", line: "Two or three-piece, in weights that survive a Mumbai afternoon.", image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3730.jpg", alt: "A man in a bespoke checked suit", aspect: "aspect-[4/5]", position: "50% 50%" },
    { name: "Bandhgalas", line: "The closed collar is unforgiving. It is drafted here the way a coat is, not draped.", image: "/images/anis-bandhgala.jpg", alt: "Anis Soomar in a black bandhgala, the collar closed", aspect: "aspect-[3/4]", position: "50% 8%" },
    { name: "Tuxedos", line: "Grosgrain or satin facing, and no black tie worn as a suit.", image: "/images/tuxedo-detail.webp", alt: "A black tuxedo on the stand, satin lapel and pleated shirt", aspect: "aspect-[3/4]", position: "50% 50%" },
    { name: "Jackets", line: "Softer in the shoulder, lighter in the canvas. Worn six days out of seven.", image: "/images/form-tape.jpg", alt: "A jacket on the form, tape measure at the chest", aspect: "aspect-[4/5]", position: "50% 50%" },
    { name: "Shirts", line: "Collar, cuff and yoke drafted to you, in ALUMO, Canclini and S.I.C. Tess cottons.", image: "/images/lapel.jpg", alt: "A patterned shirt beneath a jacket lapel and pocket square", aspect: "aspect-[4/5]", position: "50% 50%" },
    { name: "Sherwanis", line: "For the day you are looked at all day. Commission early; wedding work keeps its own calendar.", image: "/images/bolts.jpg", alt: "Folded bolts of occasion cloth", aspect: "aspect-[3/4]", position: "50% 50%" },
  ],
};

// The Atelier as a place to arrive at (Aman model).
export const arrival = {
  eyebrow: "Arrive",
  headline: "Shabistan, Bandra West.",
  lead: "Appointments are held one at a time, so the room is yours. Message us with a day that suits you and we will hold the hour.",
  book: { label: "Hold an hour on WhatsApp", href: "https://wa.me/919833314141" },
  image: "/images/interior.jpg",
  imageAlt: "Inside the house in Bandra",
};

// Real client reviews (lightly edited for length). The airport/Goa story is featured.
export const testimonials = {
  eyebrow: "In their words",
  featured: {
    lead: "They don't just make great suits. They deliver legendary service.",
    body: "Our family has gone to CEO Rules for nearly twenty years. I once flew into Mumbai for a wedding with no time to spare; Anis fitted me the same day, then flew a tailor with our finished suits to Goa. When I noticed a tiny flaw on a button heading back to the US, his tailor met me at the airport and fixed it in five minutes outside baggage claim.",
    author: "Mujtaba Khambatti",
  },
  items: [
    {
      quote:
        "Climbing the ladder of success wasn't easy without the right attire. I was lost, and my job was at stake. Then I found the house through Instagram. His wisdom, his expertise, the whole experience was amazing.",
      author: "Ursula Paul",
    },
    {
      quote:
        "Mr. Anis patiently, personally walked me through every characteristic of making a suit. I bought a bespoke one, and it has been my favourite piece of clothing ever since.",
      author: "Raunak",
    },
    {
      quote:
        "Anis walked me through every offering, and shared his knowledge of suits and the finer points of construction, tailored to the wearer.",
      author: "Anubhav Saha",
    },
    {
      quote:
        "The family is so involved in the entire process that you won't leave dissatisfied. A customer for more than eight years.",
      author: "Pavan Shetty",
    },
  ],
};

export const hero = {
  eyebrow: "Bandra · Mumbai",
  headline: ["The quiet language", "of confidence."],
  lede: "We have dressed self-made men longer than most houses have existed. Quietly.",
  cta: { label: "Visit the Atelier", href: "#visit" },
  scrollHint: "Scroll",
  // Authentic CEO Rules imagery (from their Instagram).
  image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3731.jpg",
  imageAlt: "A jacket taking shape on the form, tape measure across the chest",
};

export const manifesto = {
  eyebrow: "What we believe",
  lines: [
    "We do not sell suits.",
    "We teach a man how to occupy a room.",
    "The cloth is only the medium.",
    "Presence is the work.",
  ],
  // Education woven in: every section leaves the visitor slightly wiser.
  takeaway:
    "A jacket is built, not sewn. The shoulder is the one line a tailor cannot fake, and the first thing a room reads.",
  image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3726.jpg",
  imageAlt: "A jacket lapel with a folded pocket square",
};

// The Craft. Adapted from Anis's own words on Instagram:
// "A gentleman isn't born, he's built through attention to detail... every detail
// speaks before you do... first impressions are made in seconds."
export const craft = {
  eyebrow: "The details",
  headline: "A gentleman isn't born. He is built.",
  lead: "Built through attention to detail, because every detail speaks before you do.",
  details: [
    "A considered cut.",
    "A kept beard.",
    "Cloth made to you.",
    "Shoes that mean it.",
    "A watch with a past.",
    "A scent that stays.",
  ],
  close: "First impressions are made in seconds. We make yours count.",
  image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3738.jpg",
  imageAlt: "Folded silk ties in the house's patterns",
};

// Heritage as a plot twist (brief Part II §12): the year lands late, after the
// visitor is already invested, so 145 years suddenly means something.
export const heritage = {
  lead: "We have told you what the house believes. We have not told you how long it has believed it.",
  year: "1881",
  years: "One hundred and forty-five years.",
  body: "The house of Haji Soomar opened in Crawford Market in 1881, and has been cutting cloth ever since. What began as one man's trade became a family's language, handed down generation after generation.",
  close: "Now the number means something.",
};

// The Craft (brief §5): mastery shown through visuals, not paragraphs.
export const mastery = {
  eyebrow: "The craft",
  headline: "Most of the work never shows.",
  lead: "Canvas, not glue. A chest shaped by hand, and stitches you will never see. Mastery is quiet, and mostly hidden inside the jacket.",
  pieces: [
    { src: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3727.jpg", alt: "Cloth waiting in the atelier", label: "Fabric" },
    {
      src: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3739.jpg",
      alt: "A hand-basted canvas chest taking shape",
      label: "Construction",
    },
    {
      src: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3729.jpg",
      alt: "Working buttonholes and the finish",
      label: "Finish",
    },
  ],
};

// The wardrobe: the outcome as identity, editorial, never a catalogue (brief §7).
export const wardrobe = {
  eyebrow: "The wardrobe",
  headline: "A wardrobe is a kind of autobiography.",
  lead: "Not a collection of clothes. A record of who a man has decided to be.",
  pieces: [
    { name: "Bespoke suits", line: "Cut for the life you actually lead." },
    { name: "Bandhgalas", line: "For the rooms that ask for a little more." },
    { name: "Sherwanis", line: "For the days you will want to remember." },
    { name: "The finishing", line: "The tie, the square, the things that speak last." },
  ],
  image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3730.jpg",
  imageAlt: "A man in a bespoke checked suit",
};

// Visit: the natural ending. Remove friction, do not sell (brief §9).
export const visit = {
  eyebrow: "Visit",
  headline: "Come sit with us in Bandra.",
  lead: "There is nothing to buy today. Only a conversation, and a good cup of coffee.",
  addressLabel: "The house",
  address: [
    "CEO Rules",
    "Shabistan CHSL, 319/A",
    "Dr Ambedkar Road, Bandra West",
    "Mumbai 400 050",
  ],
  hoursLabel: "Hours",
  hours: ["Open every day", "10:30 am until 9 pm"],
  mapLabel: "Get directions",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=CEO+Rules+Shabistan+CHSL+Dr+Ambedkar+Road+Bandra+West+Mumbai",
  whatsapp: { label: "+91 98333 14141", href: "https://wa.me/919833314141" },
  image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3732.jpg",
  imageAlt: "The CEO Rules storefront at night, Bandra",
};

// Insights: the founder sharing knowledge (education as generosity, brief §13).
// Adapted from CEO Rules' own Instagram posts.
export const insights = {
  eyebrow: "Philosophy",
  title: "What the founder sees.",
  intro:
    "Anis has spent a lifetime noticing what most people miss. A little of what he has learned, shared freely, whether or not you ever commission a suit.",
  entries: [
    {
      id: "details",
      tag: "The detail",
      title: "The details make all the difference.",
      body: "Timeless style is decided in the details. From the lapel to the shoulder, and every stitch in between, each choice shapes a suit that stands out without asking to.",
      image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3726.jpg",
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
      image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3730.jpg",
      imageAlt: "A man in a bespoke checked suit",
    },
    {
      id: "trends",
      tag: "On style",
      title: "Trends come and go. Style stays.",
      body: "Oversized is not always stylish, and true elegance is never accidental. Dress for lasting impact, not for the fashion of a season.",
      image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3731.jpg",
      imageAlt: "A jacket taking shape on the form, tape measure across the chest",
    },
    {
      id: "solaro",
      tag: "The cloth",
      title: "True luxury is never loud.",
      body: "It is thoughtful, timeless, and made with purpose. Solaro is more than a fabric; it is a legacy of intelligent tailoring, cut to keep its wearer comfortable while carrying an effortless ease. Chosen not for trends, but for the finer details. Style fades. Class endures.",
      image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3735.jpg",
      imageAlt: "Navy cloth woven exclusively for CEO Rules by Huddersfield",
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
      image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3728.jpg",
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
  ],
};

export const footer = {
  wordmark: "CEO RULES",
  line: "A family house of bespoke tailoring, in Mumbai.",
  since: "Est. 1881",
  pages: [
    { label: "The House", href: "/house" },
    { label: "The Cloth", href: "/the-cloth" },
    { label: "Bespoke", href: "/bespoke" },
    { label: "The Wardrobe", href: "/the-wardrobe" },
    { label: "Philosophy", href: "/philosophy" },
    { label: "The Atelier", href: "/atelier" },
  ],
  instagram: { label: "Instagram", href: "https://www.instagram.com/ceorules/" },
  addressLabel: "The house",
  address: [
    "Shabistan CHSL, 319/A",
    "Dr Ambedkar Road, Bandra West",
    "Mumbai, Maharashtra 400 050",
  ],
  hoursLabel: "Hours",
  hours: "Open every day · 10:30 am to 9 pm",
  whatsapp: { label: "+91 98333 14141", href: "https://wa.me/919833314141" },
};

// The founder is not an "About Us" (brief Part II §8): he is the house, a mentor
// and teacher, never simply "founder."
export const founder = {
  eyebrow: "The house is a person",
  quote:
    "I have never sold a man a suit. I have only ever taught him how to wear one.",
  attribution: "Anis Soomar",
  body: "For most of a lifetime he has done the same two things each morning: measure a man, and listen to him. He will steer you away from the loud cloth, toward what your life actually asks for.",
  roles: "Mentor. Teacher. Craftsman. Guide. Storyteller.",
  note: "The word founder never quite fit him.",
  image: "/images/founder-stitching.webp",
  imageAlt: "Anis Soomar at work, hand-stitching a lapel",
  // The client's film of Anis with a length of Scabal cloth, looped silently.
  video: "/video/anis-cloth.mp4",
  poster: "/images/eye-poster.jpg",
  videoAlt: "Anis Soomar at his desk, a length of cloth under his hand",
  videoAudit:
    "Temporary · 1024×576 phone video, 67s. Reshoot in 4K: Anis handling cloth, warm light, a 10 to 15 second loop.",
};

// The brand's central contradiction (brief Part II): the name sounds like hustle;
// the reality is heritage and quiet. Told as story, not resolved.
export const identity = {
  eyebrow: "The name, and the truth",
  nameImage: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3736.jpg",
  nameImageAlt: "Stacked bolts of cloth, edge on",
  heard: "You hear the name before you meet the house.",
  loud: "It sounds like ambition. Like hurry. Like a man in a rush to be seen.",
  quiet: "Walk in, and the noise falls away.",
  reality:
    "What remains is older than the name. Heritage. Patience. A hand that has taken the same measure ten thousand times, and still takes its time.",
  reconcile: "We have never resolved the contradiction. We wear it well.",
  // Images for the 'truth' band.
  truthImageA: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3739.jpg",
  truthImageAAlt: "A jacket taking shape, hand-basted canvas at the chest",
  truthImageB: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3727.jpg",
  truthImageBAlt: "Bolts of cloth waiting in the atelier",
  truthCaption: "Chosen by hand. Cut once, and correctly.",
  // Shopfront beat: Anis's own invitation (from Instagram).
  placeLead: "Join me at the house, in Bandra.",
  placeAccent: "We'll talk presence, over a cup of coffee.",
  // Kept for reuse elsewhere (the transformation payoff):
  // "You arrive successful. You leave significant."
  image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3737.jpg",
  imageAlt: "Inside the CEO Rules store, Bandra",
};

// ---------------------------------------------------------------------------
// Secondary pages (The House / The Cloth / The Atelier). Copy provisional.
// ---------------------------------------------------------------------------

// The House (Brioni /history model): the pedigree, told as a line handed down.
export const house = {
  hero: {
    eyebrow: "Since 1881",
    title: "Clothiers and tailors of impeccable pedigree.",
    lede: "Four generations of one family, and the same quiet work: dressing a man so the room believes him before he speaks.",
    image: "/images/anis-fitting.jpg",
    imageAlt: "Anis Soomar adjusting a jacket at the shoulder during a fitting",
  },
  lineage: {
    eyebrow: "The line",
    intro: "It did not begin as a tailoring house. It began as cloth.",
    beats: [
      {
        marker: "1881",
        label: "A house of fabrics",
        body: "The family opens in Crawford Market, trading in cloth. First a trade, and then, slowly, a language.",
      },
      {
        marker: "IV",
        label: "Four generations",
        body: "The knowledge is handed down, hand to hand, each generation adding a little and letting nothing essential fall away.",
      },
      {
        marker: "30+",
        label: "Years as tailors",
        body: "Anis Soomar grows the fabric house into a tailoring house, stocking the world's finest mills and cutting for the men of the city.",
      },
      {
        marker: "Today",
        label: "CEO Rules, Bandra",
        body: "One house, where a man is measured, taught, and sent back into the room a little more himself.",
      },
    ],
    close: "Now the number means something.",
  },
  tagline: "Clothiers & Tailors Of Impeccable Pedigree.",
};


// The Cloth (Loro Piana model): material as hero, provenance over paragraphs.
export const cloth = {
  eyebrow: "The cloth",
  headline: "The cloth remembers where it came from.",
  lead: "A jacket is only ever as honest as the cloth beneath it. We keep the finest houses in the world, and we keep them for what they do, not for what they say.",
  housesLabel: "The houses we keep",
  // Client-supplied mill list. Provenance kept to what is certain; the lines
  // for the four shirting houses are provisional copy for sign-off.
  houses: [
    { name: "Loro Piana", place: "Italy", line: "The gift of kings: the world's finest wool and cashmere." },
    { name: "Zegna", place: "Italy", line: "Trofeo and 15milmil15, milled from the longest fibres." },
    { name: "Scabal", place: "Brussels", line: "Super 150s and diamond chip, cloth worn like jewellery." },
    { name: "ALUMO", place: "Switzerland", line: "Swiss two-ply cottons: the shirting that holds a collar all day." },
    { name: "Canclini", place: "Italy", line: "Italian shirting in weaves that read from across a room." },
    { name: "S.I.C. Tess", place: "Italy, since 1924", line: "Italian shirting cloth, a century in the making." },
    { name: "Roger La Viale", place: "Since 1932", line: "Shirting with a quiet pattern and a long memory." },
    { name: "Raymond", place: "India", line: "The house cloth of India, for everyday suiting done properly." },
  ],
  detailImage: "/images/bespoke-cloth.jpg",
  detailAlt: "Anis Soomar's hand on a length of grey suiting, fresh from its box",
  fabricImage: "/images/IMG_3735.jpg",
  fabricAlt: "Navy cloth woven exclusively for CEO Rules by Huddersfield",
  teach: {
    eyebrow: "Why it matters",
    body: "Canvas, not glue. A chest shaped by hand holds the cloth to you and lets it breathe, so a suit only looks better with the years.",
    link: { label: "More from the founder", href: "/philosophy" },
  },
};

// The Atelier (Aman model): the store as a place, the visit as an experience.
export const process = {
  eyebrow: "The visit",
  headline: "Nothing to buy today. Only a conversation.",
  lead: "A first visit takes an hour and asks nothing of you. This is how it goes.",
  steps: [
    { title: "The conversation", body: "Over coffee, we talk about your life before your measurements: the rooms you walk into, the way you want to be read." },
    { title: "The measure", body: "Anis takes the measure himself. It is the one line a tailor cannot fake, so it is taken slowly." },
    { title: "The cloth", body: "We put the finest houses in front of you, then narrow them to the few that suit your life, not the season." },
    { title: "The fittings", body: "The jacket is built over fittings, a canvas chest shaped by hand, corrected until it disappears on you." },
    { title: "The delivery", body: "It comes to you finished. And if it ever needs us again, we come to you." },
  ],
  image: "/images/eye-poster.jpg",
  imageAlt: "Anis Soomar at his desk, a length of cloth under his hand",
};
