# CEO Rules — Asset audit

Per brief V2 §29. Status: **FINAL** (good enough for production), **TEMPORARY** (proves the
layout, needs replacing), **REPLACE** (do not ship). Brief §4 floor for full-screen desktop
photography: 2400px wide preferred, 3000px+ masters better.

**Headline finding:** no photograph in the project reaches the 2400px floor. The largest
landscape frame is 1280px. Nothing is FINAL yet. The shoot is the hard blocker.

Checked 21 September 2026 against `public/images/`.

## By brief §4 category, as used now

Status: FINAL / TEMPORARY / REPLACE. Nothing is FINAL until the shoot.

### The House (storefront, architecture, interiors, shelves, mirrors, walnut)
| File | Size | Used on | Status | Note |
|---|---|---|---|---|
| `storefront-day.jpg` | 1280×960 | Home hero | TEMPORARY | The client's enhanced daytime frame (§5). Half the resolution floor. Baked-in plaque "Master tailors since 1881 · A legacy of six generations" contradicts §1 and §4. Confirm against the real façade. |
| `storefront.jpg` (dusk) | 1206×927 | House, Atelier heroes | TEMPORARY | The real façade; too small. |
| `interior.jpg` | 1206×1175 | Home Visit, House band | TEMPORARY | Reads as retail shelving, not the salon. |
| `cloth-shelves.jpg` | 1206×1177 | (was Home Cloth) | REPLACE | Occasion brocade, not suiting cloth books. Replaced by a stock placeholder. |

### The Man (Anis with clients, fitting, talking, selecting cloth)
| File | Size | Used on | Status | Note |
|---|---|---|---|---|
| `video/anis-cloth-loop.mp4` + `eye-poster.jpg` | 1024×576, 12s, 2.1 MB | Home Eye, Bespoke stage 1, Appointment | TEMPORARY | Anis with Scabal suiting; phone video. Cut to a silent 12s loop from the 67s original (11 MB). |
| `anis-fitting.jpg` | 1075×1089 | Craft · Fit, Bespoke stage 4, Wardrobe · Suits | REPLACE | Colour cast; too small. |
| `principals-portrait.png` | 545×612 | House · The Eye | REPLACE | Far too small. |
| `world-record.jpg`, `world-suitwalk.jpg` | 1400×2610, 1600×2133 | House · Beyond Bandra | TEMPORARY | Authentic event photos (KL, 2024); event branding in frame, Holland & Sherry cropped out. |
| `world-exhibition.jpg` | 720×1280 | House · Beyond Bandra | REPLACE | Too small. |

### The Hands (cutting, stitching, chalking, measuring, buttonholes, canvas)
| File | Size | Used on | Status | Note |
|---|---|---|---|---|
| `craft-cut.jpg` | 793×799 | Craft · Cut, Bespoke stage 3 | REPLACE | Phone frame, far below the floor. |
| `canvas.jpg` | 1061×764 | Craft · Canvas, Wardrobe · Jackets, The Rules | TEMPORARY | Right subject, too small. |
| `founder-stitching.webp` | 826×1020 | Craft · Finish, Bespoke stage 5, House band | TEMPORARY | Usable; yellow grade. |

### The Cloth (cloth books, swatches, wool, shirting, hands selecting)
| File | Size | Used on | Status | Note |
|---|---|---|---|---|
| `bolts.jpg` | 1074×1084 | Bespoke hero, stage 2, Wardrobe · Sherwanis | TEMPORARY | Tactile swatches; too small for a hero. |
| `navy-cloth.jpg` | 1109×1027 | The Cloth page, The Rules | TEMPORARY | Woven-for-CEO-Rules selvedge. |

### The Garment (suits, jackets, tuxedos, bandhgala, sherwani, movement and fit)
| File | Size | Used on | Status | Note |
|---|---|---|---|---|
| `anis-bandhgala.jpg` | 1440×3540 | Home Wardrobe, Wardrobe · Bandhgalas | TEMPORARY | A real, worn bandhgala (§9: a person, not a mannequin; no watermark). Crop of an event snapshot. |
| `lapel.jpg` | 1206×2089 | Wardrobe hero, Shirts, Bespoke stage 6, Reel poster | TEMPORARY | Detail, not a finished garment in movement. |
| `tuxedo-detail.webp` | 574×1020 | Wardrobe · Tuxedos, Reel poster | REPLACE | Mannequin; too small. |
| `ties.jpg` | 1206×1491 | Reel poster, House band | TEMPORARY | Accessories. |
| Sherwani | none | | REPLACE | No usable photography exists. |

### Archive
None on file. Brief §4: authentic historical material only; never generate fake historical photographs.

### Removed from the site (21 Sept)
Watermarked (`checked-suit.jpg`, `form-tape.jpg`), a banned mill in frame (`atelier-conversation.webp`,
Dormeuil box), a baked-in grey border (`buttonhole.jpg`), and the unused Instagram-derived `IMG_37xx` set.
All remain in git history.

## Stock placeholders (added 21 Sept, evening)

Supplied in `assets/homepage` and `assets/the-wardrobe` as placeholders, now live on the
`redesign` preview in `public/images/stock/` (resized from ~27 MB to ~4.4 MB). High resolution,
but **all appear to be stock photography**, which brief §28 bans for production ("generic
tailoring stock imagery"; §4 asks for a believable CEO Rules environment). Status for all:
**TEMPORARY: proves the layout, must be replaced before launch.** Each carries a ?audit note.

| Used for | File (public/images/stock) | Source file | Note |
|---|---|---|---|
| Home Cloth | cloth.jpg | homepage/the-cloth.jpg | Stock, 2592×1944. Folded tartans: rich, but brief §1 warns against reading as an old British tailoring house; §6 asks for hands in a suiting cloth book. |
| Craft · Cut | craft-cut.jpg | homepage/the-cut.jpg | Stock. |
| Craft · Canvas | craft-canvas.jpg | homepage/the-canvas.jpg | Stock; shows pattern-cutting rather than canvas. |
| Craft · Fit, Wardrobe · Suits | craft-fit.jpg | homepage/the-fit.jpg = the-wardrobe/01-suits.jpg | Same photo supplied twice. |
| Craft · Finish | craft-finish.jpg | homepage/the-finish.jpg | Stock. |
| Home Wardrobe, Wardrobe hero | wardrobe-rack.jpg | homepage/wardrobe.jpg = the-wardrobe/the-wardrobe-hero.jpg | Same photo supplied twice; a retail rail (§9 prefers a person). |
| Wardrobe · Shirts | shirts.jpg | the-wardrobe/02-shirts.jpg | Stock. |
| Wardrobe · Jackets | jacket.jpg | bundo-kim-…-unsplash.jpg | Unsplash (licence permits use); mannequin. |
| Wardrobe · Tuxedos | tuxedo.jpg | the-wardrobe/tuxedo.jpg | Stock studio shot. |
| Wardrobe · Bandhgalas | bandhgala.jpg | the-wardrobe/05-bandhgalas.jpg | **736px and likely another brand's catalogue image: copyright risk, do not ship.** |
| Wardrobe · Sherwanis | sherwani.jpg | the-wardrobe/06-sherwani.jpg | Stock; mannequin. |

Not used: `logan-weaver-…-unsplash.jpg` (mannequin suit), `suits-wide.jpg` (hand at tie),
`the-wardrobe/formal-shirt.jpg` (retail shirt rail). Licences for the non-Unsplash files are
unknown; confirm the source of each before any of them could ship.

## Brand

| Asset | Status | Note |
|---|---|---|
| `brand/ceo-rules-logo-blue.png` | TEMPORARY | Official wordmark in its original blue (§3), 700×105 PNG. Ask for the SVG. |
| `brand/ceo-rules-logo-ivory.png` | Do not use on photography | §3: the logo keeps its blue; not recoloured white. |

## Shot list for every REPLACE

All photography: authentic, no watermarks, no Instagram UI, no baked-in text, no AI artifacts,
controlled warm grade, deliberate negative space where type will sit (§4).

| Shot | Orientation | Min. size | Composition and negative space | Light | Crop | Photo / video |
|---|---|---|---|---|---|---|
| Storefront, daytime | Landscape | 3000px | Full façade and signage from across the road; open wall or sky at left for type | Morning or late-afternoon sun | Desktop keeps left third clear; mobile centres the sign and door | Photo + 8s silent loop (exterior arrival) |
| Hands in a cloth book | Landscape | 3000px | Hands paging suiting swatches on the table; dark shelves at left | Warm, low, shallow depth | Left 35% quiet | Video preferred (hands paging) |
| The cut | Portrait | 2400px | Shears physically cutting wool on the table | Controlled, top-down | Hands and blade centred | Video preferred |
| The canvas | Portrait | 2400px | Close-up of basted canvas inside an open jacket | Raking side light | Tight on the basting | Photo or video |
| The fit | Portrait | 2400px | Anis or a CEO Rules tailor fitting a real client | Warm atelier light, no colour cast | Faces and hands protected on mobile | Video preferred (live fitting) |
| The finish | Portrait | 2400px | Hand buttonhole, pick stitch or lining | Warm, close | Macro | Photo or video |
| Anis at work | Portrait | 3000px | Anis explaining cloth to a client, three-quarter | Warm salon light | Air at left for type | Video strongly preferred |
| Finished garment | Portrait | 3000px | A real client, full length or three-quarter, in movement | Natural | Negative space at the base for type | Photo + video (adjusting jacket / walking) |
| Bandhgala | Portrait | 2400px | Worn, closed collar clearly read | Natural | Collar and face protected | Photo |
| Sherwani | Portrait | 2400px | Worn, occasion context | Warm evening | Full length | Photo |
| The salon | Portrait | 2400px | Seating area, coffee on the table, someone mid-conversation | Warm evening | Room for type at one side | Photo |
| Three Reels | Portrait 9:16 | 1080×1920 | Chosen Reels showing Anis, craft, style | As shot | Posters without Instagram UI | Poster + link out |

## Still needed from the client (brief §26)

Calendly is live at `anis-ceorules/30min` but the event is configured as **1 hr**; confirm the length with Anis
(the site no longer states a duration). Still needed: the three Reels, the licensed jazz track for §16,
the logo as SVG, and sign-off on the mill list and heritage wording.
