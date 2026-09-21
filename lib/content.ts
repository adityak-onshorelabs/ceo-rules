import type { ImageId } from "@/lib/images";

// PROVISIONAL copy. Voice follows docs/CEO-Rules-Content-Foundation.md.
// Not final. Final copy comes from the founder interview + copy phase.

export const nav = {
  wordmark: "CEO RULES",
  // Labels follow the approved IA. Canonical routes (/bespoke, /the-rules)
  // land in Phase 3; until then these point at the existing pages.
  leftLinks: [
    { label: "The House", href: "/house" },
    { label: "The Bespoke", href: "/the-cloth" },
  ],
  rightLinks: [
    { label: "The Wardrobe", href: "/the-wardrobe" },
    { label: "The Rules", href: "/philosophy" },
  ],
  cta: { label: "Visit the Atelier", href: "/atelier" },
};

// Real client reviews (lightly edited for length). The airport/Goa story is featured.
export const testimonials = {
  eyebrow: "Client stories",
  featured: {
    // COPY: "legendary service" is generic-luxury; keep the specific story.
    lead: "They don't just make great suits. They deliver legendary service.",
    body: "Our family has gone to CEO Rules for nearly twenty years. I once flew into Mumbai for a wedding with no time to spare; Anis fitted me the same day, then flew a tailor with our finished suits to Goa. When I noticed a tiny flaw on a button heading back to the US, his tailor met me at the airport and fixed it in five minutes outside baggage claim.",
    author: "Mujtaba Khambatti",
  },
  supporting: {
    quote:
      "Mr. Anis patiently, personally walked me through every characteristic of making a suit. I bought a bespoke one, and it has been my favourite piece of clothing ever since.",
    author: "Raunak",
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
  eyebrow: "Mumbai · Since 1881",
  statement: ["Private tailoring for", "a more considered life."] as const,
  cta: { label: "Book a Private Appointment →", href: "appointment" },
  imageId: "heroStorefront" as const,
};

export const homeCloth = {
  kicker: "The Cloth",
  observation: ["A wardrobe begins", "in the book."] as const,
  body: "An exceptional range of suiting, jacketing and shirting from the world's leading cloth houses.",
  housesEyebrow: "The Houses",
  suiting: [{ name: "Loro Piana" }, { name: "Zegna" }, { name: "Scabal" }],
  shirting: [{ name: "ALUMO" }, { name: "Söktas" }],
  primaryImageId: "clothSelection" as const,
  secondaryImageId: "clothLoroBook" as const,
};

export const homeCraft = {
  observation: ["Most of the work", "never shows."] as const,
  beats: [
    {
      label: "01 / The Cut",
      body: "Every line begins on the table.",
      imageId: "craftCutShears" as const,
    },
    {
      label: "02 / The Canvas",
      body: "Structure without stiffness.",
      imageId: "canvasChest" as const,
    },
    {
      label: "03 / The Fit",
      body: "Adjusted on the man, not the form.",
      imageId: "craftFitBasted" as const,
    },
    {
      label: "04 / The Finish",
      body: "The work most people never see.",
      imageId: "craftFinishThread" as const,
    },
  ],
};

export const homeEye = {
  kicker: "The Eye",
  name: "Anis Soomar",
  title: null as string | null,
  approach: "He would rather teach the cloth and the fit than sell the room.",
  body: "Anis takes the measure himself. The visit is a conversation about the life you actually lead, then the cloth and the cut that belong to it.",
  workImageId: "anisFitting" as const,
  relationImageId: "conversation" as const,
  notes: [] as { id: string; title: string; href: string; permalink: string | null }[],
  feedMode: "off" as const,
};

export const homeWardrobe = {
  observation: "What the house can create.",
  lead: "Cut for the life you actually lead — not a catalogue.",
  imageId: "suitWorn" as const,
  pieces: [
    { name: "Suits" },
    { name: "Shirts" },
    { name: "Jackets" },
    { name: "Tuxedos" },
    { name: "Bandhgalas" },
    { name: "Sherwanis" },
  ],
  link: { label: "Explore the Wardrobe", href: "/the-wardrobe" },
};

export const homeHouse = {
  headline: "Six generations in the clothing industry.",
  body: "The house of Haji Soomar opened in Crawford Market in 1881. Today CEO Rules continues that line in Bandra: a family atelier where a man is measured, taught, and sent back into the room in cloth that belongs to him.",
  meta: "1881  ·  Haji Soomar  ·  Mumbai",
  story: {
    body: "Our family has gone to CEO Rules for nearly twenty years. I once flew into Mumbai for a wedding with no time to spare. When I noticed a tiny flaw on a button heading back to the US, his tailor met me at the airport and fixed it in five minutes outside baggage claim.",
    author: "Mujtaba Khambatti",
  },
  supporting: {
    quote:
      "Mr. Anis patiently, personally walked me through every characteristic of making a suit. I bought a bespoke one, and it has been my favourite piece of clothing ever since.",
    author: "Raunak",
  },
};

export const houseIntro = {
  eyebrow: "The house",
  wordmark: "CEO Rules",
  headline: "Six generations in Mumbai.",
  meta: "Since 1881",
  body: "The house of Haji Soomar opened in Crawford Market in 1881. Today CEO Rules continues that line in Bandra: a family atelier where a man is measured, taught, and sent back into the room in cloth that belongs to him.",
  lineage: "1881  ·  Haji Soomar  ·  Bandra",
  imageId: "atelierCloth" as const,
  link: { label: "The house since 1881", href: "/house" },
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
  eyebrow: "Heritage",
  lead: "The work did not begin as a tailoring house. It began as cloth.",
  year: "1881",
  beats: [
    {
      marker: "1881",
      label: "A house of fabrics",
      body: "The family opens in Crawford Market, trading in cloth. First a trade, and then, slowly, a language.",
    },
    {
      marker: "Six",
      label: "Six generations",
      body: "The knowledge is handed down, hand to hand, each generation adding a little and letting nothing essential fall away.",
    },
    {
      marker: "Today",
      label: "CEO Rules, Bandra",
      body: "One house, where a man is measured, taught, and sent back into the room a little more himself.",
    },
  ],
  link: { label: "Read the line", href: "/house" },
};

export const mastery = {
  eyebrow: "The craft",
  headline: "Most of the work never shows.",
  lead: "Canvas, not glue. A chest shaped by hand, and stitches a room will never see.",
  pieces: [
    {
      label: "The Cloth",
      body: "The jacket is only ever as honest as the cloth beneath it.",
      imageId: "clothEdges" as const,
      layout: "wide" as const,
    },
    {
      label: "The Cut",
      body: "The shoulder is the one line a tailor cannot fake, and the first thing a room reads.",
      imageId: "jacketOnForm" as const,
      layout: "portrait" as const,
    },
    {
      label: "The Canvas",
      body: "A chest shaped by hand holds the cloth to you and lets it breathe.",
      imageId: "canvasChest" as const,
      layout: "feature" as const,
    },
    {
      label: "The Fit",
      body: "Anis takes the measure himself. It is taken slowly.",
      imageId: "anisFitting" as const,
      layout: "fit" as const,
    },
    {
      label: "The Finish",
      body: "The last things a room notices: the lapel, the square, the work you never see.",
      imageId: "lapelSquare" as const,
      layout: "detail" as const,
    },
  ],
};

export const wardrobe = {
  eyebrow: "The wardrobe",
  headline: "What the house can create.",
  lead: "Cut for the life you actually lead — not a catalogue.",
  imageId: "suitWorn" as const,
  pieces: [
    { name: "Suits", line: "Cut for the life you actually lead." },
    { name: "Shirts", line: "Cut to the same measure as the jacket." },
    { name: "Jackets", line: "The jacket is built, not sewn." },
    { name: "Tuxedos", line: "For the evenings that ask for black." },
    { name: "Bandhgalas", line: "For the rooms that ask for a little more." },
    { name: "Sherwanis", line: "For the days you will want to remember." },
  ],
  link: { label: "The wardrobe", href: "/the-wardrobe" },
};

// Visit: the natural ending. Remove friction, do not sell (brief §9).
export const visit = {
  eyebrow: "The atelier",
  headline: "Come sit with us in Bandra.",
  lead: "A first visit is a conversation. Nothing to buy today.",
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
  appointmentLabel: "Book a Private Appointment",
  imageId: "conversation" as const,
  moreHref: "/atelier",
  moreLabel: "Visit the Atelier",
};

export const instagramProfile = {
  handle: "@ceorules",
  href: "https://www.instagram.com/ceorules/",
} as const;

export type AnisDispatch = {
  id: string;
  title: string;
  caption: string;
  imageId?: ImageId;
  href: string;
  permalink: string | null;
  source: "editorial" | "instagram";
};

export const rulesByAnis = {
  eyebrow: "From Anis",
  headline: "Rules by Anis",
  framing:
    "Fit, cloth, and proportion — written so it can leave the atelier.",
  follow: {
    label: "Follow Anis on Instagram →",
    href: instagramProfile.href,
  },
  sourceNote: "Instagram",
  // Phase A: native editorial dispatches. `permalink` is reserved for real
  // Instagram post/Reel URLs. Until those exist, every href points at the
  // confirmed profile. Do not invent permalinks.
  // Future: a Meta-supported feed can populate `items` (and set permalinks)
  // without changing the section layout. mode remains "editorial" until then.
  feedMode: "editorial" as const,
  items: [
    {
      id: "details",
      title: "The details make all the difference.",
      caption: "From the lapel to the shoulder, each choice speaks before you do.",
      imageId: "silkTies",
      href: instagramProfile.href,
      permalink: null,
      source: "editorial",
    },
    {
      id: "fit",
      title: "An expensive suit means nothing if it does not fit.",
      caption: "The perfect fit never demands attention. It moves with you.",
      href: instagramProfile.href,
      permalink: null,
      source: "editorial",
    },
    {
      id: "cloth",
      title: "The jacket is only as honest as the cloth.",
      caption: "Chosen not for the season, but for the life you actually lead.",
      href: instagramProfile.href,
      permalink: null,
      source: "editorial",
    },
  ] satisfies AnisDispatch[],
};

export const rulesTeasers = {
  eyebrow: "The Rules",
  intro: "A few things the house will tell you whether or not you commission a suit.",
  link: { label: "All the rules", href: "/philosophy" },
  items: [
    { id: "fit", tag: "Fit", title: "An expensive suit means nothing if it does not fit." },
    { id: "details", tag: "Proportion", title: "The details make all the difference." },
    { id: "solaro", tag: "Fabric", title: "Solaro is cut to keep its wearer comfortable." },
    { id: "combinations", tag: "Personal style", title: "Better combinations, not more clothes." },
  ],
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
  line: "Mumbai · Since 1881",
  heritage: "Six generations in the clothing industry.",
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
  kicker: "The founder",
  name: "Anis Soomar",
  quote:
    "I have never sold a man a suit. I have only ever taught him how to wear one.",
  attribution: "Anis Soomar",
  body: "Anis Soomar is the living voice of the house: a teacher more than a salesman. He does not enjoy selling. He enjoys teaching — fit, cloth, and how a man occupies a room.",
  aside:
    "The six-generation line that began with Haji Soomar in 1881 continues in Bandra under Anis, with his brother Arshad as co-keeper of the house. He takes the measure himself. It is taken slowly.",
  imageId: "conversation" as const,
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
    lede: "Six generations of one family, and the same quiet work: dressing a man so the room believes him before he speaks.",
    image: "/images/house-hero.jpg",
    imageAlt: "Anis Soomar in the atelier, in conversation over coffee",
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
        marker: "VI",
        label: "Six generations",
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


// The Cloth / Bespoke page. Provenance over mill advertising.
export const cloth = {
  eyebrow: "The cloth",
  headline: "The cloth remembers where it came from.",
  lead: "The house keeps a broad range of the mills a serious wardrobe uses, then chooses for the man, the climate, and the life the garment will lead.",
  openingImageId: "clothLoroBook" as const,
  edgesImageId: "clothEdges" as const,
  formImageId: "jacketOnForm" as const,
  housesLabel: "The houses we keep",
  suitingLabel: "Suiting & jacketing",
  shirtingLabel: "Shirting",
  suiting: [
    { name: "Loro Piana", place: "Quarona" },
    { name: "Zegna", place: "Trivero" },
    { name: "Scabal", place: "Brussels / Huddersfield" },
  ],
  shirting: [{ name: "ALUMO" }, { name: "Söktas" }],
  cut: {
    label: "The Cut",
    body: "Every line begins on the table.",
  },
  canvas: {
    label: "The Canvas",
    line: "Canvas, not glue.",
    body: "A chest shaped by hand holds the cloth to you and lets it breathe.",
  },
  fit: {
    label: "The Fit",
    body: "Adjusted on the man, not the form.",
  },
  finish: {
    label: "The Finish",
    body: "The work most people never see.",
  },
  teach: {
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
