---
title: Uniting internal tools into a SaaS product
workYear: 2024
company: Two Barrels
description: "Two Barrels had too many tools and no shared design language. I helped build a design system from scratch while juggling feature work across multiple product teams. The result: faster dev handoffs, fewer UI bugs, and a system still in use today."
role:
  - Product Design
  - UX Design
thumb:
featured: true
draft: true
---

## Unifying Two Barrels

Two Barrels was the internal software team for Registered Agents, a company that helps small businesses stay compliant with state regulations. Our team built and maintained the tools employees and resellers used daily: customer service platforms, hosting products, domain dashboards, and a few oddball apps we’d inherited along the way.

I was a product designer embedded across several product teams. Most days, I was working on new features, modernizing old workflows, or hunting down usability issues. But the bigger challenge was upstream: every product looked and worked differently, even when they solved similar problems. There wasn’t a shared language, much less a design system.

Some apps were homegrown. Others were acquisitions duct-taped into the stack. With no standards, everything had to be relearned — by users, by developers, by us. That was fine when these were just internal tools. But leadership had started talking about selling them as a SaaS platform. Suddenly, the fragmentation wasn’t just inconvenient — it was a blocker.

This case study focuses on the stretch when we tried to bring consistency to that mess without slowing down feature work — and before anyone officially told us to.

## Starting from the middle

The design system wasn’t handed down from the top. It came from my UX team, who were tired of rebuilding the same patterns differently every time. I was one of three designers who pushed for it and got buy-in to begin.

We didn’t pause sprint work to start over. I audited the tools my teams owned, looking for overlap, inconsistencies, and repeatable patterns. While we didn’t do full research, we had years of support feedback and dev complaints pointing to real usability friction.

We’d been using PrimeVue as a UI base, but it didn’t scale well to our needs. One of our engineers spun up Storybook, and I created a shared Figma library with tokens and flexible, composable components. These weren’t copies of what we had — we redesigned from the ground up, combining the best of each product into shared patterns that worked across them all.

I also set up the contribution process: who could submit new components, how to document usage, and the tone and structure we’d use in our documentation. As we built out the system, I wrote and maintained most of our Zeroheight library, which by the time I left included:

- 12 documented interaction patterns
- Around 40 core components
- 5 shared page templates
- Guidance for accessibility, spacing, content, and exceptions

Because we couldn’t stop for a redesign, we integrated it into everyday work. As product teams shipped new features, we slowly folded in the system. My teams saw a sharp drop in rollover tickets — builds were faster, QA was easier, and devs weren’t stuck asking what a dropdown should look like this time.

## A system that stuck

Management considered the design system a side project, but we made it part of how we worked.

Every new feature we shipped was a chance to clean something up or swap in a reusable pattern. If a dev needed a button, they didn’t build it from scratch — they grabbed it from Storybook. If a designer wasn’t sure how to handle pagination or bulk actions, they checked the pattern library. It wasn’t just about visual consistency; it meant fewer decisions, fewer surprises, and fewer things to QA.

The documentation played a big role in that. Every component had clear usage guidelines, visual do’s and don’ts, and links to working Figma examples. The system became the default answer to “How do we do this?” — which made handoff smoother and made good decisions easier, especially for newer teammates.

I left before the system was fully rolled out across every product, but the foundation was strong: a clear design direction, shared assets, and a process anyone could follow. The team still uses it today, years later.

[img]
