# Skin Mentor Starter Website

Skin Mentor is a lightweight, framework-free starter website for a relationship-first skincare mentoring brand. The project uses only HTML5, CSS3, and vanilla JavaScript so it can be hosted easily on GitHub Pages, Vercel, or any static hosting provider.

This is the Sprint 1 foundation, not the final website. It is intentionally simple, readable, and ready for future expansion.

## Project Structure

```text
/
├── index.html
├── he.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

## What Is Included

- English homepage in `index.html`
- Hebrew RTL homepage in `he.html`
- Shared responsive stylesheet in `css/style.css`
- Small vanilla JavaScript file in `js/app.js`
- Placeholder asset folders for images, icons, and fonts
- Mobile-first responsive layout
- Header, navigation, hero, about, services, process, call-to-action, and footer sections
- Language links between English and Hebrew pages

## How to Edit the Site

### Content

Edit page text directly in:

- `index.html` for English content
- `he.html` for Hebrew content

Each section uses semantic HTML, including `header`, `main`, `section`, `article`, `nav`, and `footer`.

### Styles

Edit shared styles in `css/style.css`.

The top of the file contains CSS variables for colors, spacing, borders, shadows, and layout sizes. Start there when changing the visual identity.

### JavaScript

Edit behavior in `js/app.js`.

Current scripts include:

- Automatic current year in the footer
- Mobile navigation toggle
- Smooth scrolling for same-page links

Keep scripts small and dependency-free unless a later sprint clearly requires more.

### Assets

Place future brand assets in:

- `assets/images/`
- `assets/icons/`
- `assets/fonts/`

If custom fonts are added later, define them with `@font-face` in `css/style.css`.

## Local Preview

Open `index.html` directly in a browser, or use any simple static server.

No build step is required.

## Deploy with GitHub and Vercel

1. Push the project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/).
3. Create a new project and import the GitHub repository.
4. Keep the framework preset as `Other`.
5. Leave build settings empty because this is a static site.
6. Deploy.

Vercel will serve `index.html` from the repository root.

## Deploy with GitHub Pages

1. Push the project to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Choose the `main` branch.
5. Select the repository root as the publish source.
6. Save and wait for GitHub to publish the site.

## Future Roadmap

- Replace the logo placeholder with final brand assets.
- Add real photography or approved brand imagery.
- Add service detail pages.
- Add contact form integration.
- Add accessibility QA and content review.
- Add SEO metadata and social sharing images.
- Add privacy policy and terms pages when needed.
- Add structured content conventions for future client sites.

## Development Principles

- Relationship first.
- Education first.
- Trust and clarity over pressure.
- No medical claims.
- No product-pushing language.
- Keep the code readable for future maintainers.
