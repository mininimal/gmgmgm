# gmgmgm.design

This is just my portfolio website. Wow.

## Goals

1. Portable content so I can change to whatever tool I want. Aimed for Markdown.
1. Use as little framework as possible and as much semantic HTML as possible.
1. DRY as much as I can.

## Stack

- Static Site Generator: [11ty](https://www.11ty.dev/)
- Utility Framework: [Every Layout](https://every-layout.dev/layouts/cluster/)
- Theme: [Open Props](https://open-props-ui.netlify.app)

## Using locally

Run `npm run start` locally to see it at http://localhost:8080/.

## Structure

```txt
├───dist            // Output folder
└───src             // Source folder
    ├───assets      // Global fonts, images, etc.
    ├───content     // Content like Posts and Projects, including their Markdown and images.
    │   ├───posts
    │   └───work
    ├───data        // Global JSON
    ├───includes    // Partials like components, header/footer, etc.
    ├───layouts     // Templates
    ├───pages       // Pages
    └───styles      // CSS
```
