# Kala Drycleaners Website

A static website for Kala Drycleaners — a trusted family-run dry cleaning business serving customers for over 35 years.

## Folder Structure

```
Kala-Drycleaners/
├── .github/
│   └── workflows/
│       └── deploy.yml      — GitHub Actions workflow for GitHub Pages deployment
├── css/
│   └── style.css           — Responsive styles
├── js/
│   └── main.js             — Sticky navbar, mobile menu, smooth scroll
├── index.html              — Single-page site with all sections
└── README.md               — Project documentation
```

## How to Run Locally

No build tools or frameworks are required. Simply open `index.html` in your browser:

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.

That's it — the site runs entirely with plain HTML, CSS, and JavaScript.

## Deployment

This project auto-deploys to **GitHub Pages** on every push to the `main` branch via GitHub Actions.

The workflow is defined in `.github/workflows/deploy.yml` and performs the following steps:

1. Checks out the repository.
2. Configures GitHub Pages.
3. Uploads the entire repository as a Pages artifact.
4. Deploys the artifact to GitHub Pages.

No manual deployment steps are needed — just push your changes to `main` and the site will be updated automatically.

### Live URL

Once deployed, the site will be available at:

```
https://[YOUR-GITHUB-USERNAME].github.io/[YOUR-REPO-NAME]/
```

> **Note:** Replace `[YOUR-GITHUB-USERNAME]` with your actual GitHub username and `[YOUR-REPO-NAME]` with the name of your repository.