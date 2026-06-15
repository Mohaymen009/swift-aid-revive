## Goal

Apply one unified flat design system to every page except the homepage (which stays as-is and acts as the visual anchor), and shift content emphasis toward Home Healthcare and Event Medical Coverage while keeping Patient Transfer routes intact for SEO.

Palette (locked): `#FAFAF7` background, `#EFEAE3` surface, `#0F2A44` navy text, `#E85D2A` orange accent. No gradients, no glassmorphism, no neon, no glossy effects.

## Scope decisions

- Homepage (`/`) — untouched. Its Hero (navy overlay on photo) stays. It defines the look the rest of the site echoes.
- All other pages — moved to a single new `FlatServicePage` template with a flat solid-color hero (no gradient, no SVG noise pattern), warm off-white sections, navy headings, orange accent, no shadows beyond a hairline border.
- URLs, slugs, H1s, schemas — preserved exactly. Content/copy may be reweighted to lean Home Healthcare + Events without dropping existing keywords.
- Home Healthcare hybrid: `/home-healthcare-services-uae/` becomes a full strong internal hub describing all sub-services (Home Nursing, IV Therapy at home, Blood Tests at home, Physiotherapy at home, Doctor on Call summary, Elderly care). Final "Book" CTAs still deep-link to `https://homehealthcare.emrs.ae/`. Navigation entries for "Home Healthcare", "Doctor on Call", "Wellness" continue to redirect externally as today.

## Phases

### Phase 1 — Design system + reusable template (review checkpoint)

1. Add flat tokens to `src/index.css`: new `--surface`, `--surface-muted`, `--hairline`; keep existing `--primary` navy and `--accent` orange. Remove usage of `--gradient-hero`, `--gradient-premium`, `--shadow-glow`, `--shadow-premium`, `hero-radial-gradient`, glass/`backdrop-blur` patterns from non-homepage code paths (leave the CSS classes defined so Hero.tsx keeps working).
2. Build `src/templates/FlatServicePage.tsx` with: Navigation, flat solid hero (navy block, orange accent badge, H1, sub, dual CTA Call/WhatsApp, optional Tabby badge), value-prop strip, key-benefits grid, "How it works" 3–4 step row, detailed explanation prose, trust/credentials strip, FAQ accordion, sticky bottom CTA band, Footer, FloatingContact, SEOHead, JSON-LD passthrough, Breadcrumbs.
3. Rebuild Home Healthcare page (`HomeHealthcareServicesUAE.tsx`) on the new template as the visual reference for Phase 2. Strengthen content (sub-service cards for Home Nursing, IV Therapy at home, Blood Tests at home, Physiotherapy at home, Post-op, Elderly care, Doctor on Call summary). Deep-link final booking CTAs to `homehealthcare.emrs.ae`.
4. Update Navigation/Footer so Home Healthcare and Event Medical Coverage appear earlier/more prominent than Patient Transfer items. Do not change route targets for external redirects.

→ STOP, request approval before Phase 2.

### Phase 2 — Migrate remaining pages to the template

Migrate (one-by-one, content preserved, copy lightly tuned):
- Service pages: `DoctorOnCallUAE`, `WellnessDiagnosticServicesUAE`, `EventMedicalCoverage` (expanded — on-site cover, ambulance standby, medical staffing, response coverage), `AmbulanceServicesUAE`, `NonEmergencyMedicalTransport`, `PrivateAmbulanceUAE`, `ICUAmbulanceDubai`, `PatientTransferServiceDubai`, `BookAmbulanceDubai`.
- Emirate pages (8): Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ, Al Ain.
- Authority pages: `AboutUs`, `Licensing`, `MedicalOversight`, `ServicesHub`.
- Blog templates: `BlogHowToChooseAmbulance`, `BlogPrivateAmbulanceAcrossUAE`, `BlogEmergencyPatientTransfersUAE` — flat editorial layout (white surface, navy text, single accent, no gradient banners).
- `NotFound` — flat 404.
- `Contact` component — flat card grid, remove gradients/blur.

### Phase 3 — Content emphasis tweaks

- Footer: reorder service links — Home Healthcare hub first, Event Medical second, Doctor on Call third, then ambulance/transfer.
- ServicesHub: lead with Home Healthcare hero card and Event Medical card; transfer cards moved to a "Medical Transport" subsection below.
- Update `SEOHead` defaults and meta on Home Healthcare + Events pages to broaden positioning ("UAE home healthcare, doctor on call, IV therapy at home, event medical coverage"); transfer pages keep their current titles/descriptions.
- Update `public/sitemap.xml` priorities so Home Healthcare and Events rank above transfer pages.

## Technical notes

- New tokens in `index.css`:
  ```css
  --background: 40 33% 98%;     /* #FAFAF7 */
  --surface:    34 27% 92%;     /* #EFEAE3 */
  --foreground: 211 65% 16%;    /* #0F2A44 */
  --primary:    211 65% 16%;
  --accent:     15 80% 53%;     /* #E85D2A */
  --hairline:   34 15% 85%;
  --radius:     0.5rem;
  ```
  Remove `--shadow-glow`, `--shadow-premium`; keep `--shadow-card` reduced to `0 1px 2px rgb(0 0 0 / 0.04)`.
- `FlatServicePage` props: `seoTitle, description, canonical, h1, eyebrow, intro, benefits[], steps[], sections[], faqs[], relatedLinks[], primaryCta, schema?`.
- Hero pattern (non-homepage): solid `bg-primary text-primary-foreground` block, no image, no gradient, no `backdrop-blur`, no SVG noise.
- All buttons: solid `bg-accent text-white` primary, `bg-transparent border border-primary text-primary` secondary. No `shadow-glow`.
- Keep `tel:` links untouched so Google Ads tracking continues.
- Run `bunx tsc --noEmit` style check is handled by harness; I'll verify build per-phase via the harness.

## Out of scope

- Homepage (`Index.tsx`, `Hero.tsx`, `Services.tsx`, `EmirateServices.tsx`, `OurStory.tsx`, `WhyChooseUs.tsx`, `HomeFAQ.tsx`, `BlogSection.tsx`, `Contact.tsx` when used on the homepage) — visual untouched. If `Contact.tsx` is reused on subpages with gradients, I'll create a `ContactFlat` variant rather than edit the original.
- Phone numbers and `tel:` URIs — unchanged (`+971 55 472 8133`).
- No new routes, no removed routes.
- No backend or data work.
