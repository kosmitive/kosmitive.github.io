# kosmitive.github.io

Minimal GitHub Pages blog based on [knhash/jekyllBear](https://github.com/knhash/jekyllBear).
The theme stylesheet is vendored from commit `e9fc24318f7a40dfd9c550d0d9bf510fe5ca4796`; its MIT license is retained in LICENSE.txt. Home and Blog follow the theme's example pages with personalized copy. The blog layout preserves its date-and-title list, fixes the example's hardcoded date, and includes posts without tags. Colors are overridden with the blog’s ivory palette for the left Light position, and white text on black for the right Dark position.

## Write a post

All pages share the same navigation and a labeled Light/Dark slider. It follows the system preference initially and remembers a manual choice in local storage.

Add `_posts/YYYY-MM-DD-title.md` with front matter:

```yaml
---
layout: post
title: My post
math: true
---
```

Use `$x$` for inline LaTeX and `$$` on separate lines for display equations. MathJax 3.2.2 loads from jsDelivr only on pages with `math: true`.

## Preview

With a supported Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

## Publish

GitHub Pages builds the root of the `main` branch. Push changes to publish them at https://kosmitive.github.io.
