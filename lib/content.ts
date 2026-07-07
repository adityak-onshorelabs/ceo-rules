// PROVISIONAL copy. Voice follows docs/CEO-Rules-Content-Foundation.md.
// Not final. Final copy comes from the founder interview + copy phase.

export const nav = {
  wordmark: "CEO RULES",
  // Root-relative so the nav works from any page.
  links: [
    { label: "The Wardrobe", href: "/the-wardrobe" },
    { label: "Insights", href: "/insights" },
    { label: "Visit", href: "/#visit" },
  ],
};

// Real client reviews (lightly edited for length). The airport/Goa story is featured.
export const testimonials = {
  eyebrow: "In their words",
  featured: {
    lead: "They don't just make great suits. They deliver legendary service.",
    body: "Our family has gone to CEO Rules for nearly twenty years, and they still find ways to exceed us. I flew into Mumbai for a wedding with no time to spare. Anis had me fitted the same day, and sent tailors to my hotel when jet-lag kept me from returning. He flew a staff member with our finished suits from Mumbai to Goa, and delivered them into our room closets. When I noticed a tiny flaw near a button on my way back to the US, his tailor met me at Mumbai airport, waited for my flight from Goa, and fixed it in under five minutes outside baggage claim.",
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
        "Perfect tailoring, perfect guidance in styling, and a real upgrade in the way my clothes look.",
      author: "Dr. Gopal Sharma",
    },
    {
      quote:
        "The family is so involved in the entire process that you won't leave dissatisfied. A customer for more than eight years.",
      author: "Pavan Shetty",
    },
    {
      quote:
        "They were very patient with me, and I never felt any pressure. I will definitely be back for more.",
      author: "Bogdan Z.",
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
  body: "The house of Haji Soomar opened in Crawford Market in 1881, and has been cutting cloth ever since. What began as one man's trade became a family's language, refined and handed down, generation after generation.",
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
  eyebrow: "Insights",
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
  line: "A family house of bespoke tailoring. Bandra, Mumbai.",
  since: "Est. 1881",
  instagram: { label: "Instagram", href: "https://www.instagram.com/ceorules/" },
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
  image: "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/CEO%20rules/images/IMG_3728.jpg",
  imageAlt: "Anis Soomar fitting a jacket at the shoulder",
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
