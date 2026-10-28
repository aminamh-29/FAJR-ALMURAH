# FAJR ALMURAH

A responsive business website for FAJR ALMURAH, an engineering and construction company focused on delivering civil, mechanical, electrical, HVAC, IT, consulting, and equipment rental solutions across the Middle East.

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Project Purpose](#project-purpose)
- [Main Features](#main-features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Environment Variables and Configuration](#environment-variables-and-configuration)
- [Backend, API, and Database](#backend-api-and-database)
- [Deployment](#deployment)
- [Testing](#testing)
- [Security Considerations](#security-considerations)
- [Known Limitations](#known-limitations)
- [Future Improvements](#future-improvements)
- [Author](#author)

## Overview

FAJR ALMURAH is presented in this project as an engineering and construction company with a focus on building quality, innovation, and long-term client relationships. The website acts as a digital company profile and service showcase, highlighting the organization’s areas of expertise and business capabilities.

The current repository contains a static single-page website built using HTML, CSS, and JavaScript. It is designed to present the company professionally and provide visitors with quick access to service information and company profile documentation.

## Problem Statement

Many businesses need a clean, modern, and credible website to communicate their services, values, and regional capabilities. For a company like FAJR ALMURAH, a website serves as a digital presence that helps present:

- the business identity
- service offerings
- company strengths and expertise
- project-oriented credibility
- downloadable company documentation

This project addresses that need by creating a polished landing page and service showcase without requiring a backend system.

## Project Purpose

The purpose of this project is to provide a professional website experience for FAJR ALMURAH that:

- introduces the company and business focus
- explains core areas of service
- displays company values and mission
- provides a clear overview of project capabilities
- offers a downloadable company profile
- works well on desktop and mobile devices

The site is intended to support business presentation and client engagement rather than process-heavy web application functionality.

## Main Features

The website includes the following sections and capabilities:

- Responsive single-page layout
- Sticky header navigation
- Hero section with business branding and call-to-action buttons
- About section describing the company and its specialization
- Services section covering:
  - Civil Works
  - Mechanical Works
  - HVAC & Ducting
  - Electrical & Plumbing
  - Fire Fighting
  - IT Solutions
  - Office Fit-Out
  - Equipment Rental
- Core values and mission section
- Consultancy services section
- Equipment rental section
- Animated counters and scroll-reveal effects
- Mobile navigation menu
- Downloadable company profile PDF
- Visual asset gallery and image-based presentation
- Styling and layout built with custom CSS

## Technologies Used

This project uses a lightweight front-end stack:

| Category | Tools / Technologies |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Interaction | JavaScript |
| Fonts | Google Fonts |
| Assets | Local image files and PDF assets |
| Deployment Model | Static website |

## Screenshots

No public live demo URL or deployment link was found in the repository during review. The project is currently presented as a static local website.

Recommended screenshots for GitHub presentation:
- Hero section
- Services overview
- About/mission section
- Consultancy section
- Equipment rental or project gallery section

If you want to improve recruiter-facing presentation, add screenshots of the homepage and key sections to the repository or to a project documentation page.

## Project Structure

```text
FAJR-ALMURAH/
├── assets/
│   ├── images/
│   └── pdf/
│       └── Fajr Almurah_Final.pdf
├── css/
│   ├── animation.css
│   ├── component.css
│   ├── layout.css
│   ├── reset.css
│   ├── style.css
│   └── variable.css
├── js/
│   ├── main.js
│   └── nav.js
├── index.html
├── Readme.md
└── .gitignore
```

## Installation

There are no package dependencies or build steps required for this project because it is a static HTML/CSS/JavaScript website.

### Option 1: Open directly in the browser
1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.

### Option 2: Serve locally with a simple HTTP server
From the project root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Running the Project Locally

After starting a local server, browse to the project directory in a browser. The site is designed as a static landing page and does not require a framework or application startup command.

Example:

```bash
cd FAJR-ALMURAH
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Environment Variables and Configuration

No environment variables are required for this project as it does not use a backend server, database, or API configuration.

The current project is a static front-end website and does not contain:

- `.env` files
- backend configuration
- database configuration
- deployment secrets
- package installation scripts

## Backend, API, and Database

This repository does not include a backend, server-side application, API layer, or database.

The project is currently a static front-end website that renders content directly in the browser and loads local asset files such as:

- CSS files
- JavaScript files
- image assets
- a company profile PDF

## Deployment

This project is suitable for static hosting.

Common options include:

- GitHub Pages
- Netlify
- Vercel
- any static hosting provider

Because no build system or server configuration exists in the repository, deployment is straightforward: upload or publish the project folder as a static site.

### Minimal deployment example
If hosting on GitHub Pages or a static host, publish the repository root as the site base and ensure the following files remain available:

- `index.html`
- `css/`
- `js/`
- `assets/`

## Testing

No automated test suite or application tests were found in the repository as reviewed.

### Manual verification steps
- Open the homepage in a browser.
- Confirm navigation links work.
- Check the responsive layout on desktop and mobile widths.
- Verify the company profile PDF download works.
- Check image assets load correctly.
- Confirm text sections are readable and styled correctly.

## Security Considerations

Because this is a static front-end site, the security risk is relatively low compared to dynamic applications. However, a few considerations still apply:

- Ensure downloadable files such as PDFs are from trusted sources.
- Review third-party assets (for example, Google Fonts) if external dependencies need to be restricted.
- Use clean, properly encoded file names and avoid untrusted user input.
- If future forms or contact features are added, validate and sanitize submissions server-side.

## Known Limitations

The project is a static business website, and the repository has a few limitations to acknowledge:

- No backend or database
- No API integration
- No automated tests
- No verified live deployment URL in the repository
- No formal project documentation beyond a very brief README
- No formal SEO metadata review
- No automated accessibility audit performed

## Future Improvements

Potential improvements for future versions include:

- adding a proper `README.md` file in standard GitHub format
- adding professional screenshots to the repository
- adding a contact form with backend validation
- improving SEO metadata and social preview tags
- adding more structured content sections for projects and testimonials
- adding accessibility improvements
- adding lazy loading for media assets
- supporting multilingual content if needed
- integrating a CMS or content management solution
- improving performance optimization for large image assets
- adding a professional project portfolio page or dedicated services detail pages

## Author

Name: Amina

GitHub: https://github.com/aminamh-29

## Repository Summary

This repository presents a static, professional company website for FAJR ALMURAH using HTML, CSS, and JavaScript. It is designed to showcase the company’s engineering, construction, consulting, and service capabilities in a clean and visually polished format.
