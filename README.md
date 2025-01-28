This is my personal portfolio site.

Currently built with [11ty](https://www.11ty.dev/), but maybe that'll change.

Deploys to [Netlify](https://www.netlify.com/) when a pull comes through. Wow! Neat!

Run `npm run start` locally to see it at http://localhost:8080/.

```txt
/
├── eleventy.config.js
├── styles/                # CSS files, hopefully separated by layout
├── assets/                # Fonts and other assets passed through to the build
├── scripts/               # JavaScript stuff eventually.
├── site/                  # The site source file, pages live here
│   ├── _data/             # Data in JSON to make it easier to update meta stuff
│   ├── _include/          # Partial templates, like header and footer
│   ├── _layout/           # Layout templates
│   ├── posts/             # Blog posts
│   ├── work/              # Portfolio projects
└── dist/                  # 11ty build output folder (build directory, created by 11ty)
```
