# Radio 4EB Strategy Portfolio

A bilingual, responsive static portfolio for Jason Ni (Jiaxiang Ni), presenting his audience and competitor research contributions to a five-person Radio 4EB social media strategy project.

## Run locally

Start a simple local server from this folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

The site uses plain HTML, CSS and JavaScript. The workflow in `.github/workflows/pages.yml` deploys the repository root after pushes to `main`. For first-time setup, choose **Settings → Pages → Build and deployment → Source → GitHub Actions**. Keep the report at `assets/Radio4EB_Final_Report.pdf`; the preview and download buttons use that stable relative path.

## Content notes

- The report is a team deliverable. The portfolio credits Jason only for the audience analysis and competitor analysis assigned to him in Appendix C.
- All recommended activity is described as a proposal. No implementation, audience growth or client endorsement is claimed.
- The resume was used only to confirm the project identity and was not copied into this public site.
- The bilingual switch is local to the visitor's browser and does not transmit preference data.

See [MAINTENANCE.md](MAINTENANCE.md) for update and verification guidance.
