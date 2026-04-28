# Howard County Muslim Council Website

Static public website for Howard County Muslim Council, built with Astro and Tailwind CSS.

## Edit Content

Main page text lives in `src/content/pages`.

Program, event, and news entries live in:

- `src/content/programs`
- `src/content/events`
- `src/content/news`

Newsletter signup copy and Mailchimp form actions are editable in page frontmatter, currently on:

- `src/content/pages/home.md`
- `src/content/pages/contact.md`

The `formAction` should match the `action` URL from Mailchimp's embedded signup form. The optional `honeypotName` should match Mailchimp's hidden anti-spam field name.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Scope

This is a static public website. It does not include a backend, login system, member database, contact form backend, or donation processor.
