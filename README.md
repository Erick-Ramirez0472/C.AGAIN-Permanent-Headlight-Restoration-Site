# C.AGAIN — Permanent Headlight Restoration

Marketing site for C.AGAIN, a mobile headlight restoration service. The pitch: most
restoration kits just sand and buff a headlight lens, which clouds up again within
months. C.AGAIN finishes every job with a UV-cured protective clear coat so the
clarity actually lasts.

## Structure

```
index.html          Single-page site (hero, services, process, gallery, contact)
css/style.css        Styles
js/script.js         Mobile nav, scroll reveal, back-to-top, demo contact form
assets/images/       Logo and photos
```

## Running locally

This is a static site with no build step. Open `index.html` directly, or serve it
with any static file server, e.g.:

```
npx serve .
```

## TODO before launch

- [ ] Replace placeholder phone number, email, service area, and hours in `index.html`
- [ ] Add real before/after photos to the Results section
- [ ] Connect the contact form to a real backend (e.g. Formspree, a mailto service, or your own endpoint)
- [ ] Fill in pricing and warranty/guarantee terms
- [ ] Add real customer testimonials
