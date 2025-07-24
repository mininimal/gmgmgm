# Working around Figma limitations

Figma makes its money from locking features behind progressively higher-priced tiers. I often find teams I'm working with have a Figma plan one tier below a feature they'd need, but the intense price jump (per user!) makes upgrading unfeasible.

As an agency, Legends has numerous clients who all have their own separate design language. In most cases, we have a loose leash on the designs we do since it's fairly rare for even some larger brands to have their own design system. Some clients have very comprehensive branding guides, and in project like we've handled for Real Madrid and Activision Blizzard, the limits of our Figma license mean we have to wrestle with missing features to save literally thousands of dollars. 

## Thanks I didn't want Variable Modes anyway

When I was assigned Activision Blizzard's account, my solution was unifying the entire portfolio with a component library and token system. With Figma's [variables](https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables) and [team library](https://help.figma.com/hc/en-us/articles/360041051154-Guide-to-libraries-in-Figma) features, this should have definitely been possible.

The problem we ran into was the sheer number of brands  belonging to Activision Blizzard. Under their umbrella were the already-gigantic Blizzard, Xbox, Call of Duty, and Activision. Right there, we have four variable modes, the [limit of our Organization plan](https://help.figma.com/hc/en-us/articles/360040328273-Figma-plans-and-features). The project also required subtheming for the IPs of each of these companies — World of Warcraft, Diablo, Overwatch, Heathstone, StarCraft, Call of Duty Black Ops 6, Warzone, Halo, Gears of War, Tony Hawk's Pro Skater, and on and on.

The component library for all four stores was easy enough to build, but applying the individual company branding and then their multiple franchise brands is where we ran into our plan limit on variable modes.

## Pay up

I try to avoid incorporating tools that aren't part of a mainline product, like plugins or add-ons. I have a fear of them losing support in the future and crippling our workflow, so I try to work in a native tool as much as I can to keep our processes simple for my whole team.

To keep in Figma's ecosystem while completing this Activision Project, we'd need to upgrade from the Organization plan to the Enterprise plan — the only extra features this adds are:
- Up to 40 modes per variable collection
- REST API for variables
- Workspaces

While the REST API would maybe be useful, we didn't really need any of the features besides more variable modes. At the time of this project, upgrading to Enterprise would have cost an _additional_ $10/mo per developer and another **$35/mo**(!!) per designer.

Just for this project, that's at least $45/mo forever for one tiny feature.

## Save hundred of dollars a month with one simple trick!

Surely this problem has happened to others, so I figured it was time to venture out into the Figma plugin ecosystem. The first solution I happened onto was Michal Kováčik's [Infinite variable modes](https://www.figma.com/community/plugin/1404783727338541788/infinite-variable-modes), which does seem to do a majority of what I needed, but there was a $3/mo charge and I wasn't sure if the technique used would survive Figma updating how variables work. I didn't end up testing it out.

Next, I tried Figterate's [Variables Pro](https://www.figma.com/community/plugin/1264578192495051449/variables-pro-swap-import-export-variables), which has a 10-use demo mode before charging a one-time $49. I'm sure I could have convinced my company to spend such a luxurious sum, but I didn't want to deal with having to manage plugin licenses for all of our UX team members separately, or wonder if devs and PMs would need it, etc. The plugin does work for this use case, though!

## I just want 

There are a few other plugins that have a similar feature, but I ended up using [Swap Variables](https://www.figma.com/community/plugin/1334258818515407420/swap-variables) from Alexey Zaycev and Nick Qurle. It's free, does exactly what I need, and the interface is simple! Performance-wise, even in the node-heavy files I used the plugin took at most two minutes to finish its procedure.
  
This setup requires a library design file, and multiple separate files for between 1 and 4 variable modes each. For our Activision Blizzard project, I had these files:
- Component Library
- Activision Gear Shop
- Call of Duty Gear Shop
- Xbox Gear Store
- Blizzard Gear Store
- BGS / World of Warcraft
- BGS / StarCraft
- BGS / Hearthstone
- etc...

This let me handle all of the component structure in the Component Library file. 
