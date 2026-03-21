---
name: seo-expert
description: Implement and audit best-in-class SEO for web applications. Use this skill to optimize meta tags, structured data (JSON-LD), headings, and social sharing (Open Graph).
---

# SEO-Expert Skill

This skill ensures that every page built is optimized for search engines and social platforms, following Google's best practices.

## Core Capabilities

1.  **Semantic HTML Audit**:
    *   Verify a single `<h1>` per page.
    *   Check for logical heading hierarchy (`h1` > `h2` > `h3`).
    *   Ensure the use of semantic elements like `<main>`, `<article>`, `<section>`, and `<footer>`.

2.  **Meta Data Optimization**:
    *   Generate descriptive, keyword-rich `<title>` tags (50-60 characters).
    *   Write compelling `<meta name="description">` content (150-160 characters).
    *   Set up Open Graph tags (`og:title`, `og:description`, `og:image`) for social sharing.

3.  **Structured Data (JSON-LD)**:
    *   Implement "Organization", "Product", "LocalBusiness", or "WebSite" schemas.
    *   Validate schema implementation against Google's Structured Data guidelines.

4.  **Performance & Image SEO**:
    *   Check for `alt` tags on all images.
    *   Ensure images are sized correctly and use modern formats (WebP).

## When to Use

- When building a new page or section.
- When the user asks: "Is this SEO-friendly?" or "How can I rank better?"
- Before final production deployment.

## Workflow

1.  **Content Analysis**: Review the page text for keywords.
2.  **Tag implementation**: Insert/Update `<title>` and `<meta>` tags in the project.
3.  **Schema Gen**: Generate and inject a `<script type="application/ld+json">` block.
4.  **Verification**: Use the browser tool or `read_url_content` to "see" the page as a crawler would.
