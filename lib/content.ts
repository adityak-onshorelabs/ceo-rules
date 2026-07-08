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
    },
    {
      id: "winchester",
      tag: "The shirt",
      title: "The Winchester, evolved.",
      body: "Not every classic belongs in the past; some evolve with it. The Winchester shirt has long stood for refinement and authority. We reimagine it with coordinated collars and cuffs, and bring heritage tailoring into the modern wardrobe.",
    },
    {
      id: "combinations",
      tag: "The wardrobe",
      title: "Better combinations, not more clothes.",
      body: "A well-dressed man does not need more clothes. He needs better combinations. A timeless wardrobe is not dozens of outfits; it is a few versatile essentials that work together effortlessly. Build one that works smarter, not bigger.",
    },
    {
      id: "trends",
      tag: "On style",
      title: "Trends come and go. Style stays.",
      body: "Oversized is not always stylish, and true elegance is never accidental. Dress for lasting impact, not for the fashion of a season.",
    },
    {
      id: "solaro",
      tag: "The cloth",
      title: "True luxury is never loud.",
      body: "It is thoughtful, timeless, and made with purpose. Solaro is more than a fabric; it is a legacy of intelligent tailoring, cut to keep its wearer comfortable while carrying an effortless ease. Chosen not for trends, but for the finer details. Style fades. Class endures.",
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
    },
    {
      id: "legend",
      tag: "The craft",
      title: "What makes a tailor a legend.",
      body: "The eye to notice the smallest detail. Craftsmanship is not only stitching cloth; it is seeing what others miss. Here, every cut, every seam, and every finish is worked with a precision that speaks for itself.",
    },
  ],
};

export const footer = {
  wordmark: "CEO RULES",
  line: "A family house of bespoke tailoring, in Mumbai.",
  since: "Est. 1881",
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
  eyebrow: "The men of the house",
  quote:
    "I have never sold a man a suit. I have only ever taught him how to wear one.",
  attribution: "Anis Soomar",
  body: "Anis and his brother Arshad are the fourth generation of the family, a lifetime between them at the same work. Anis measures a man and listens to him; Arshad keeps the cloth and the craft. Together they steer you away from the loud choice, toward what your life actually asks for.",
  roles: "Mentors. Teachers. Craftsmen. Custodians.",
  note: "The word founder never quite fit them.",
  image: "/images/founders.png",
  imageAlt: "Anis and Arshad Soomar, the fourth generation of the house",
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
    image: "/images/founders.png",
    imageAlt: "Anis and Arshad Soomar, the fourth generation of the house",
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
        body: "Anis and Arshad grow the fabric house into a tailoring house, stocking the world's finest mills and cutting for the men of the city.",
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

// The custodians: both brothers, co-equal. Anis is the teaching voice.
export const custodians = {
  eyebrow: "The custodians",
  headline: "Two brothers, one hand.",
  body: "Anis and Arshad Soomar are the fourth generation to keep this house. Anis is the teacher: he measures a man, listens, and steers him toward the cloth his life actually asks for. Arshad keeps the craft and the cloth, the quiet machinery behind every finished jacket. Neither has ever thought of it as selling.",
  people: [
    { name: "Anis Soomar", role: "The teacher. Measure, and counsel." },
    { name: "Arshad Soomar", role: "The craftsman. Cloth, and construction." },
  ],
  image: "/images/founders.png",
  imageAlt: "Anis and Arshad Soomar",
  close: "The word founder never quite fit them.",
};

// The Cloth (Loro Piana model): material as hero, provenance over paragraphs.
export const cloth = {
  eyebrow: "The cloth",
  headline: "The cloth remembers where it came from.",
  lead: "A jacket is only ever as honest as the cloth beneath it. We keep the finest houses in the world, and we keep them for what they do, not for what they say.",
  housesLabel: "The houses we keep",
  houses: [
    { name: "Dormeuil", place: "Paris, since 1842", line: "Sportex and Tonik, cloths with a memory of their own." },
    { name: "Loro Piana", place: "Quarona, Italy", line: "The gift of kings: the world's finest wool and cashmere." },
    { name: "Ermenegildo Zegna", place: "Trivero, Italy", line: "Trofeo and 15milmil15, milled from the longest fibres." },
    { name: "Holland & Sherry", place: "Peebles, Scotland", line: "English and Scottish cloth, cut for weather and for weight." },
    { name: "Scabal", place: "Brussels and Huddersfield", line: "Super 150s and diamond chip, cloth worn like jewellery." },
  ],
  detailImage: "/images/tuxedo-detail.webp",
  detailAlt: "A black tuxedo on the stand, satin lapel and pleated shirt",
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
  image: "/images/atelier-conversation.webp",
  imageAlt: "Anis Soomar with a client over coffee at the atelier",
};
