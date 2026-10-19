# Maintenance guide

This is a build-free GitHub Pages site. Edit `index.html` for the story and translation strings, `assets/site.css` for presentation, and `assets/site.js` for the language switch. Keep all content in the existing English/Chinese pairs so the two languages stay aligned.

## Update the report

Replace `assets/Radio4EB_Final_Report.pdf` only with a specifically approved report version. Keep that exact filename, then verify both **Open report preview** and **Download original PDF**. The portfolio currently identifies the 32-page report as version 37, modified 13 October 2026.

## Update evidence

When refreshing figures, update the number, period, sample note, and source limitation together. Do not present national ACMA age-group use as Radio 4EB listener demographics. Mark lifetime metrics, paid exposure, sample sizes, and missing data where they affect interpretation. Keep 4ZZZ, SBS, and Triple A Murri observations tied to dated public sources and avoid inferring their unpublished performance or internal process.

## Preserve attribution and scope

Appendix C assigns Jason the Audience Analysis and Competitor Analysis sections. Keep the team-project credit visible and do not describe the whole report, audit, SWOT, strategy, creative execution, or measurement plan as Jason's solo work. Recommendations remain proposals until the client implements and measures them.

## Publish changes

Live site: https://jasonni-design.github.io/radio-4eb-social-strategy-portfolio/. Commit changes to `main`; `.github/workflows/pages.yml` deploys the updated static files. The workflow enables the GitHub Pages site through `configure-pages` on its first run. Use a short commit message stating what changed. After each update, check the language switch, all five navigation links, the three competitor source links, mobile layout, and the embedded/downloaded PDF. Keep the PDF file alongside the site source so the project can be cloned and maintained without external paid services.
