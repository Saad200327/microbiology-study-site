# 🦠 Microbiology Study Site

A complete, student-friendly study website built from the [OpenStax Microbiology](https://openstax.org/details/books/microbiology) textbook.

## 🚀 Live Site

Deployed on GitHub Pages: `https://saad200327.github.io/microbiology-study-site/`

## 📚 How the PDF Was Transformed

The OpenStax Microbiology PDF was reorganized into:
- **Units & Modules** — chapters grouped by theme
- **Lessons** — each major section rewritten in plain language
- **Key Terms / Glossary** — searchable definitions
- **Cheat Sheets** — condensed process/pathway references
- **Practice** — MCQs, short-answer, and flashcards per chapter
- **Exam Week Mode** — ultra-condensed review summaries

## 🖥️ Run Locally

```bash
git clone https://github.com/Saad200327/microbiology-study-site.git
cd microbiology-study-site
# Open index.html in your browser — no build step needed!
open index.html
```

## ➕ Adding a New Chapter

1. Add a new `chapter-XX.html` file in `/pages/`
2. Follow the template in `/pages/_template.html`
3. Add a link in the sidebar inside `_nav.html` partial (copy into each page) or update `nav-data.js`
4. Add glossary terms to `/data/glossary.js`
5. Add practice questions to `/data/questions.js`

## 🌐 Redeploy

Push to `main` — GitHub Pages auto-deploys from the root.

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS (no build step)
- Mobile-first responsive design
- Client-side search, flashcards, and quiz engine
