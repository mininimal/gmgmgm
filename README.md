Stack:
Static Site Generator: [11ty](https://www.11ty.dev/)
Utility Framework: [Every Layout](https://every-layout.dev/layouts/cluster/)
Theme: [Open Props](https://open-props-ui.netlify.app)

Run `npm run start` locally to see it at http://localhost:8080/.

```txt
/
├── eleventy.config.js
├── styles/                # CSS files
├── assets/                # Fonts and other assets passed through to the build
├── scripts/               # JavaScript
├── site/                  # The site source file, pages live here
│   ├── _data/             # JSON source for repeated content
│   ├── _include/          # Partial templates, like header and footer
│   ├── _layout/           # Layout templates
│   ├── posts/             # Blog posts
│   ├── work/              # Portfolio projects
└── dist/                  # 11ty build output folder
```
