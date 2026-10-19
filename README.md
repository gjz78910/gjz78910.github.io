# Homepage (Printer Version)

This branch only keeps the printer-style website.

## Main pages
- `/` -> `/_pages/about-printer.md`
- `/events/` -> `/_pages/events-printer.md`
- `/publications/` -> `/_pages/publications-printer.md`
- `/grants/` -> `/_pages/grants-printer.md`

The Grants & Awards page presents research grants from OpenAI, ITEA4 GENIUS, and the Leeds–TurinTech Knowledge Transfer Partnership, alongside academic awards. News remains on the homepage.

## Files you will edit most
- Site settings and profile: `/_config.yml`
- Printer layout: `/_layouts/printer.html`
- Printer styles: `/assets/css/printer-theme.css`
- Printer behavior: `/assets/js/printer-theme.js`

## Images and audio
- Page images: `/images/event_images/`
- Avatar: `/images/profile.png`
- Printer sounds: `/assets/audio/`

## Run locally
```bash
bundle install
bundle exec jekyll serve
```
Open: `http://localhost:4000`

## Update workflow
1. Edit files.
2. Run local preview.
3. Commit and push to `printer-theme`.
