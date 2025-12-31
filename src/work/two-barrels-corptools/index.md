---
title: "CorpTools V3: Transforming internal tools to products"
workYear: 2024
company: "Two Barrels"
client: "Registered Agents Inc."
description: "Two Barrels operated dozens of internal apps without design or interaction standards. I built the foundation of CorpTools V3, a custom design system that unified patterns across tools, saving dev time and launching new products faster."
role:
  - "Design Systems"
tools:
  - Figma
  - Storybook
  - Zeroheight
  - Vue
team:
  - "Tyler Aikey"
  - "Amariah Adams"
  - "Carlos Rivera"
  - "Jason Kasper"
thumb:
draft: true
---

## Dozens of tools, dozens of patterns

On the UX team at Two Barrels, we supported an ecosystem of internal apps for everything from document processing and call logging to customer portals, mobile apps, hosting dashboards, an AI website builder, and more. Most tools were built in-house and some we acquired, but none of them looked or worked the same.

UX patterns were inconsistent across app and _within_ our tools — even basic interactions like deleting an item could be a different process depending on where in our software you were. Visual design was almost chaotic, and developers wasted time rebuilding UI from scratch for each app, duplicating work that had already been done somewhere else.

When the head of the company wanted to push our tools into SaaS products, we immediately realized we couldn’t scale like that.

## A custom system built for unity

I helped lead the design of **CorpTools V3**, a custom design system tailored for our internal ecosystem. We didn’t just need reusable components, but a scalable foundation that worked across our CRUD-heavy apps, admin dashboards, portals, and mobile-first tools.

We used PrimeVue as a base component library, but heavily extended it to meet our design and functional needs. In Figma, I created our component library using tokenized BEM conventions for consistent structure and flexibility. We built slot-based components that retained instance linkage in templates, which made large-scale template building much faster and easier to maintain.

We tracked component adoption across files using Figma’s library analytics. That let us see which teams were actively using the system, where inconsistencies were popping up, and how to prioritize next iterations.

[Component library in Figma showing slot-based templates and tokenized naming](#)
[Component adoption analytics from Figma library tracking](#)

---

## Documentation and Developer Integration

Once we had design-side structure in place, I partnered with engineering to port the system to Storybook and document design guidelines in Zeroheight.

We created an internal contribution model to support long-term growth of the system, ensuring that new components could be proposed, tested, and added without requiring a full rebuild. Documentation covered both usage patterns and edge-case guidance—for example, how to customize a standard table layout for rare CRM use cases.

[Zeroheight page showing contribution model and edge case pattern guidance](#)
[Storybook screenshot showing synced Vue components with Figma equivalents](#)

---

## The Outcome: A System Ready to Scale

CorpTools V3 provided a clear visual and interaction foundation across the company’s internal tools. Teams building new products had a real starting point for both design and development. Designers stopped duplicating work. Developers could skip pixel-matching and plug in real components. Product leads finally had consistency between tools that supported different services and customer experiences.

Although I was laid off before full rollout, the system was already adopted by multiple teams and fully documented. I built it to be modular and flexible enough to support the company’s future tools—even ones we hadn’t imagined yet.

---

## What I Learned

This project solidified my system thinking at scale. I learned how to shape a design system not around ideal UI, but around _actual product needs_—across legacy tools, evolving business requirements, and fast-moving dev timelines.

I also deepened my ability to bridge design and engineering. Working with Vue components, structuring contribution models, and tracking design adoption in Figma taught me how to measure success without needing pixel-perfect rollouts.
