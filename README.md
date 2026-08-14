# njzhan.github.io — Site Maintenance Guide

**[中文版说明请点这里 →](README.zh-CN.md)**

Personal academic website of Prof. Naijun Zhan (School of Computer Science, Peking University).

- **Live site:** https://njzhan.github.io
- **Built with:** [Jekyll](https://jekyllrb.com/) + the [al-folio](https://github.com/alshedivat/al-folio) theme
- **Deployment:** fully automatic. Every push to the `main` branch rebuilds and republishes the site in about 1–2 minutes. You never need to build or upload anything by hand.

---

## The usual workflow

1. Edit a file (see [Editing each page](#editing-each-page) below).
2. Commit and push (see [Committing and pushing](#committing-and-pushing)).
3. Wait 1–2 minutes, then reload https://njzhan.github.io.

If the change doesn't appear, see [Troubleshooting](#troubleshooting).

> **Easiest option for small text edits:** you don't need any software installed. Open the file on GitHub in a browser, click the ✏️ pencil icon, edit, and click **Commit changes**. That is a complete, valid workflow — GitHub commits and deploys for you.

---

## Where everything lives

| Page                      | URL                 | File to edit                                |
| ------------------------- | ------------------- | ------------------------------------------- |
| Home / About              | `/`                 | `_pages/about.md`                           |
| Publications              | `/Publications/`    | `_bibliography/papers.bib`                  |
| Services                  | `/Services/`        | `_pages/academic-services.md`               |
| Grants                    | `/Grants/`          | `_pages/grants.md`                          |
| Students                  | `/Students/`        | `_pages/students.md`                        |
| Teaching                  | `/Teaching/`        | `_pages/teaching.md`                        |
| Discrete Mathematics 2017 | `/teaching/dm2017/` | `_pages/dm2017.md`                          |
| CV                        | `/CV/`              | `_data/cv.yml` (+ the PDF in `assets/pdf/`) |

Supporting files:

| What                                   | File                          |
| -------------------------------------- | ----------------------------- |
| Email, Google Scholar, DBLP, CV link   | `_data/socials.yml`           |
| Site title, description, navbar name   | `_config.yml`                 |
| Profile photo                          | `assets/img/prof_pic.jpg`     |
| Paper PDFs                             | `assets/pdf/papers/`          |
| Software downloads (MARS, HHL Prover…) | `assets/tools/`               |
| Course handouts                        | `assets/pdf/teaching/dm2017/` |

Every page file starts with a block between `---` lines called _front matter_. It sets the title, the URL, and the position in the navigation bar. **Edit the text below the front matter freely; change the front matter only if you intend to move or rename a page.**

```yaml
---
layout: page
permalink: /Grants/ # the page URL
title: Grants # shown in the navbar
nav: true # false = hidden from the navbar (still reachable by URL)
nav_order: 3 # left-to-right order in the navbar
---
```

The navbar order is currently: About (1st, always) · Publications · Services · Grants · Students · Teaching. The CV page is deliberately `nav: false` — it exists at `/CV/` but is not listed in the navbar.

---

## Editing each page

All content pages are written in **Markdown**. The few rules you need:

```markdown
## A heading

- a bullet point
- **bold text**, _italic text_
- [link text](https://example.com)
```

### Home page (`_pages/about.md`)

Contains the biography paragraph, Research interests, Tools and resources, and the note to prospective students. Just edit the text.

To change the photo, replace `assets/img/prof_pic.jpg` (keep the same filename). To change the office address or email shown beside the photo, edit the `more_info` block in the front matter.

### Publications (`_bibliography/papers.bib`)

This is the only page not edited as Markdown. It is generated from a BibTeX file, and it has **rules that matter** — please read this section before adding a paper.

The file has four sections, marked by comment lines:

```bibtex
% ===== Books and book chapters =====        → @book / @incollection   → [B1], [B2], …
% ===== Edited volumes and special issues =====  → @misc               → [E1], [E2], …
% ===== Journal papers =====                  → @article               → [J1], [J2], …
% ===== Conference and workshop papers =====   → @inproceedings        → [C1], [C2], …
```

The entry type decides which section of the page a paper appears in.

#### ⚠️ The three rules

1. **Never reorder or sort the file.** The `[J1]`, `[C1]` reference numbers are generated from the order entries appear in the file. Sorting it would renumber every paper and break the numbers used in the CV and elsewhere.
2. **Add a new paper at the _top_ of its section**, immediately under the `% =====` comment line. It then becomes `[J1]` (or `[C1]`) and everything below shifts down by one — exactly the behaviour of the old website.
3. **Do not begin `booktitle` with "In".** The template already adds it, so `booktitle = {In Proc. of CAV 2026}` would render as "In In Proc. of CAV 2026".

#### Adding a journal paper

Put the PDF in `assets/pdf/papers/` (use a filename without spaces), then add this at the top of the journal section:

```bibtex
@article{zhan2027example,
  bibtex_show = {true},
  abbr = {TOSEM},
  title = {The Title of the Paper},
  author = {First Author and Second Author and Naijun Zhan},
  journal = {ACM Transactions on Software Engineering and Methodology, 36(2):1-30},
  year = {2027},
  pdf = {papers/my-new-paper.pdf},
  html = {https://doi.org/10.1145/xxxxxxx},
}
```

#### Adding a conference paper

Identical, except the type is `@inproceedings` and the venue field is `booktitle`:

```bibtex
@inproceedings{zhan2027example,
  bibtex_show = {true},
  abbr = {CAV},
  title = {The Title of the Paper},
  author = {First Author and Naijun Zhan},
  booktitle = {Proc. of CAV 2027, Lecture Notes in Computer Science 12345, pp.1-20},
  year = {2027},
  pdf = {papers/my-new-paper.pdf},
}
```

#### Field reference

| Field                  | Required?        | Notes                                                                                                  |
| ---------------------- | ---------------- | ------------------------------------------------------------------------------------------------------ |
| citation key           | yes              | The `zhan2027example` after `{`. Must be unique — convention is lastname + year + first word of title. |
| `title`                | yes              |                                                                                                        |
| `author`               | yes              | Separate **every** author with `and`. Prof. Zhan's name is automatically emphasised.                   |
| `year`                 | yes              |                                                                                                        |
| `journal`              | `@article`       | Journal name, volume, pages.                                                                           |
| `booktitle`            | `@inproceedings` | Conference name and proceedings details. Must not start with "In".                                     |
| `publisher`            | `@book`          |                                                                                                        |
| `howpublished`         | `@misc`          | Details of the edited volume or special issue.                                                         |
| `bibtex_show`          | recommended      | `{true}` adds the "Bib" button.                                                                        |
| `pdf`                  | optional         | `{papers/filename.pdf}` — relative to `assets/pdf/`.                                                   |
| `html`                 | optional         | DOI or publisher link; adds an "HTML" button.                                                          |
| `abbr`                 | optional         | Short venue tag, e.g. `{CAV}`.                                                                         |
| `award` / `award_name` | optional         | See below.                                                                                             |

#### Marking an award-winning paper

Add two fields. `award_name` is the short badge text; `award` is the full sentence shown when the badge is clicked.

```bibtex
  award = {Best Paper Award at SETTA 2018.},
  award_name = {Best Paper},
```

Three papers currently carry awards (ATVA 2018, SETTA 2018, HSCC 2025) — search the file for `award_name` to see live examples.

#### For papers not yet published

Write the venue as `EMSOFT 2027 (to appear)`.

### Services (`_pages/academic-services.md`)

Editorial boards, steering committees, and program committees by year. To add a new year, copy an existing line and put it at the top of the Program Committees list. Conference links use `https://dblp.org/db/conf/<venue>/`; for venues without a DBLP page, use `https://dblp.org/search?q=<venue>`.

### Grants (`_pages/grants.md`)

A numbered list, newest first. The numbering is automatic — add a new line at the top and everything renumbers itself.

### Students (`_pages/students.md`)

Current PhD and master's students, then alumni grouped as PhD / Master / Postdoctoral. When a student graduates, move their line from the current list to the alumni list and add their new position:

```markdown
- Name (now: Assistant Professor, Some University)
```

There is a commented-out undergraduate section at the bottom of the file. To publish it, delete the `<!--` and `-->` markers around it.

### Teaching (`_pages/teaching.md` and `_pages/dm2017.md`)

`teaching.md` is the course list. `dm2017.md` is the Discrete Mathematics course page; its handouts live in `assets/pdf/teaching/dm2017/`.

To create a page for another course, copy `_pages/dm2017.md`, change the `permalink` and `title` in the front matter, put the handouts in a new folder under `assets/pdf/teaching/`, and link to the new page from `teaching.md`.

### CV (`_data/cv.yml`)

The structured CV shown at `/CV/`. To update the downloadable PDF, add the new file to `assets/pdf/` and update the filename in **both** places — note they use different path formats:

- `_pages/cv.md` → `cv_pdf: Naijun-cv-2022.pdf` (filename only)
- `_data/socials.yml` → `cv_pdf: /assets/pdf/Naijun-cv-2022.pdf` (full path)

### Email, Scholar and DBLP links (`_data/socials.yml`)

The footer and sidebar icons come from here.

---

## Previewing locally (optional)

You can skip this entirely and simply push — the site rebuilds automatically, and a mistake is always fixable with another commit. But for large changes, previewing first is safer.

**Use Docker** (the Ruby installed on macOS is too old to build this site):

```bash
cd /path/to/njzhan.github.io

# Build once, then open _site/index.html in a browser
docker run --rm -v "$PWD:/srv/jekyll" -e JEKYLL_ENV=production \
  amirpourmand/al-folio:v0.15.0 \
  /bin/bash -c "cd /srv/jekyll && bundle exec jekyll build"

# Or run a live preview at http://localhost:8080
docker compose up
```

---

## Committing and pushing

From the project folder:

```bash
# 1. Check formatting — the automated check will fail the build if you skip this
npx prettier . --write

# 2. See what changed
git status

# 3. Stage, commit, push
git add -A
git commit -m "Add CAV 2027 paper"
git push origin main
```

Then watch the deployment (optional):

```bash
gh run list --branch main --limit 3
```

Write commit messages that say what changed — "Add CAV 2027 paper", "Update Wang Ziran's graduation status" — rather than "update".

### If `git push` fails with "Permission denied" / 403

This happens on a computer signed in to more than one GitHub account: git picks the wrong saved credential. Push using the GitHub CLI's credentials instead:

```bash
gh auth switch --user njzhan
git -c credential.helper= -c 'credential.helper=!gh auth git-credential' push origin main
```

---

## Troubleshooting

**The site didn't update after pushing.**
Wait 2 minutes and hard-refresh (`Cmd/Ctrl + Shift + R`). If it still hasn't changed, check whether the build failed: `gh run list --branch main --limit 5`, or open the **Actions** tab on GitHub. A red ✗ on "Deploy site" means the build broke — the log will name the file.

**The "Prettier code formatter" check failed.**
Run `npx prettier . --write`, then commit and push again. This check only enforces formatting; it does not affect the published site.

**A paper shows the wrong reference number.**
Its entry is in the wrong place in `_bibliography/papers.bib`. Numbering follows file order within each section, top to bottom.

**A paper's PDF link is broken.**
Confirm the file is in `assets/pdf/papers/` and that the `pdf = {papers/...}` filename matches exactly, including capitalisation. Avoid spaces in filenames.

**The venue reads "In In Proc. of…".**
Remove the leading "In" from that entry's `booktitle`.

**I broke something and want to undo it.**
Nothing is ever lost — every version is in the git history.

```bash
git log --oneline -10          # find the last good commit
git revert <commit-id>         # undo one commit, safely, as a new commit
git push origin main
```

---

## Repository map

```
_pages/          the content pages (Markdown)
_bibliography/   papers.bib — the entire publication list
_data/           cv.yml, socials.yml — structured data
assets/
  pdf/papers/    paper PDFs
  pdf/teaching/  course handouts
  tools/         software downloads
  img/           profile photo
_layouts/        page templates (rarely edited)
_sass/           styling (rarely edited)
_config.yml      site-wide settings
website/         archive of the old lcs.ios.ac.cn site — ignored by git, not published
```

`_site/` is the generated output. Never edit it; it is overwritten on every build.

---

## Notes for developers

A few deliberate customisations differ from stock al-folio. If you upgrade the theme, preserve these:

- `_layouts/bib.liquid` renders the `[B1]/[E1]/[J1]/[C1]` reference numbers server-side, using jekyll-scholar's per-section `index`, gated on `pub_index_labels: true` in the page front matter. CSS counters were tried first and are **not** viable: counters do not increment on `display: none` elements, so the bibliography search box silently renumbered the list.
- The reference-number `<span>` sits **outside** the Bootstrap column, because those columns are `position: relative` and an absolutely positioned label inside one anchors to the column and overlaps the title.
- `bib.liquid` also renders venues for `@book` (`publisher`) and `@misc` (`howpublished`), which upstream omits entirely.
- `_pages/publications.md` issues four separate `{% bibliography %}` calls filtered by entry type, each with `--group_by none`. Keep exactly one `<ol>` per `<h2 class="bibliography">`, or the search box's empty-section hiding misbehaves.
- Publication thumbnails and the selected-papers section are intentionally off (`enable_publication_thumbnails: false`, `selected_papers: false`).

---

## Credits

Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, MIT licensed — see [LICENSE](LICENSE). Theme documentation: [INSTALL.md](INSTALL.md), [CUSTOMIZE.md](CUSTOMIZE.md), [FAQ.md](FAQ.md).
