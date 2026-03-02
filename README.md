A simple academic website built with Jekyll and the Minimal Mistakes theme (via an older fork).  
Only the most important things you need are listed below.

## Basic structure
- **Site settings**: `/_config.yml`  
  - Name, bio, social links, Google Scholar, etc.
- **Main pages** (shown in the printer-style homepage):
  - `/_pages/about-printer.md` → main “About” page at `/`
  - `/_pages/events-printer.md` → events page at `/events/`
  - `/_pages/publications-printer.md` → selected publications at `/publications/`
- **Classic (non‑printer) pages**:
  - `/_pages/about.md`, `/_pages/events.md`, `/_pages/publications.md` (kept for reference at `/classic/...`)

## Editing the homepage content
1. Open `/_pages/about-printer.md`.
2. Edit the paragraphs, links, and small inline styles directly in that file.
3. Images on the main page live in `images/event_images/` and are referenced with:
   - `<img src="/images/event_images/filename.png" ... >`

## Adding / updating publications
There are two ways publications appear:

- **Selected publications section** (on the printer “Publications” page):
  - Edit the list in `/_pages/publications-printer.md` (plain HTML/Markdown entries).

- **Full publications list** (classic archive):
  1. Create or edit files in `/_publications/` (one file per publication).
  2. If needed, add the PDF to the `files/` folder and link to it from the publication entry.

## Images and media
- Put images under `images/` (for example `images/event_images/`).
- Put PDFs and other files under `files/`.
- Audio used by the printer animation lives in `assets/audio/` (already wired up).

## Running the site locally
If you want to preview changes before pushing:

```bash
bundle install        # first time only
bundle exec jekyll serve
```

Then open `http://localhost:4000` in your browser.

## Notes
- The printer layout and animations are defined in:
  - Layout: `/_layouts/printer.html`
  - Styles: `/assets/css/printer-theme.css`
  - JS: `/assets/js/printer-theme.js`
- Only change these if you want to modify the printer visual effect itself.***