---
title: "Four worlds, one system: solving chaos across Blizzard, Xbox, and beyond"
workYear: 2025
company: Legends
client: Activision Blizzard
description: "Activision Blizzard is the conglomerate behind some of the biggest brands in gaming, including Xbox, World of Warcraft, and Call of Duty. I was the architect of a token-based design system which powered fluid, branded Shopify experiences across Activision Blizzard’s physical ecommerce network"
team:
  - "Jeffrey Ren (Dev)"
  - "Nina Armella (Design)"
  - "Courtney Gould (Creative)"
thumb:
draft: true
---

## Four Titans, One Platform

Originally, this project was scoped to sunset a few existing stores while launching new ones for Xbox and Activision. As a newcomer to this client, it was clear that our current process of treating each store as a standalone project led to inconsistent UX patterns, redundant development work, and slower timelines across the board. I proposed a system-level strategy instead, aiming to standardize the _structure_ of the storefronts while create a scalable way to _style_ them per franchise.

Activision Blizzard’s brands are surprising extensive, and many included multiple sub-brands or expansions (like Overwatch and Warcraft under Blizzard, or Gears of War and Halo under Xbox). These all needed distinct visual treatments, and their storefronts needed to support rapid thematic changes during game launches, merch drops, or expansions. At the same time, I wanted to avoid forcing our merchandise teams to constantly have to relearn management of each site.

Every storefront also had to launch in three variants: US, UK, and EU. Each region had different requirements around pricing, fulfillment, and compliance, and the platform had to account for that without creating parallel design or codebases.

## A Tokenized Component System

I led the creation of a core design system in Figma that defined common UX patterns (product cards, filtering, navigation, PDP layouts, etc.) and then layered on a system of tokens that controlled typography, color, spacing, and visual treatments.

To manage this system effectively, I used **Figma Variables** to control all theming values, and built **Variable Modes** to toggle between brand and franchise-specific themes. Each storefront, whether it focused on Hearthstone or Halo, could apply a different mode and instantly switch its styling without duplicating components. The same token architecture was used to define things like heading sizes, color ramps, border radii, and spacing.

I also used Variables and Modes to manage responsive behavior directly in Figma, applying them to layout width, grid behavior, and typography scales. This allowed us to create responsive prototypes that matched the Shopify implementation, while still keeping everything maintainable in a single file.

This system enabled the team to launch storefronts quickly, adapt to future IPs and campaigns, and maintain visual cohesion across all regions and brands.

[Hero image of redesigned Blizzard Gear Store landing page](#)
[Theme modes switching between Overwatch, Hearthstone, and Tony Hawk](#)
[Diablo vs. Gears of War token sets applied to same layout](#)

## The Process: Designing for Complexity Without Chaos

We began by focusing on the Blizzard Gear Store, since it was the most complex storefront with the widest range of sub-brands. I worked closely with our design manager, visual designer, and frontend developers to define the base architecture in Figma. Every component was designed with flexibility in mind but constrained enough to avoid infinite variance.

Once the shared library was solidified, I built out token sets for each brand, defining their visual systems and testing how well they held up across typical UX flows. For example, I validated how the same filter component would appear in a Tony Hawk campaign versus a World of Warcraft one. I also worked with the rest of the team to prototype key flows with these tokens in place to ensure legibility, consistency, and responsiveness across screen sizes.

I used Figma Variables and Modes to simulate responsive behavior within the file itself. Page width, column padding, and text sizing were all controlled through mode toggles that reflected our real breakpoints, allowing developers to match the designs more closely in production.

We planned the rollout so that once the first store launched, future ones would move faster. Xbox and Call of Duty’s stores followed shortly after, with significantly reduced design and dev time. Our component system and token structure proved scalable not only across brands but across markets, without needing dedicated region-specific builds.

[Responsive Figma frames using Variable Modes](#)
[Component library overview with applied tokens](#)
[Annotated PDP layout shared across stores](#)

## The Outcome: One System, Many Expressions

The system allowed us to meet Activision Blizzard’s goals for rapid store launches and brand differentiation. Visual identity could flex while UX remained consistent. New campaigns could be created without bloating the codebase or duplicating design work. Regional storefronts could launch in parallel with minimal overhead.

Most importantly, this wasn’t a one-off solution. We built a system that could accommodate future IPs, new merchandising campaigns, and entire expansions—without resetting the design process every time.

## What I Learned

This project sharpened my understanding of what it takes to scale design across multiple brands without sacrificing their individual voice. I learned how to build systems that remain flexible but focused, and how to make decisions that balance user needs, business constraints, and brand expression.

I also saw firsthand how important it was to advocate for structure early. Without a shared foundation, every store would have required bespoke work and fragmented the user experience. By aligning on tokens, variables, and components from the start, we gave our team the tools to move faster without breaking things—or anyone’s expectations.
