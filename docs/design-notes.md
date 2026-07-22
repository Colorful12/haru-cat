# Haru Cat Project — Design Notes

Last updated: 2026-07-23

Status: Living document. The principles describe the intended product direction;
roadmap versions and proposed APIs may change as the project develops.

## Project goal

Haru Cat is not an animation library. It is a React component library that lets
developers place a small cat living inside their website.

The goal is not to make flashy animations. The goal is to make the user feel
that there is actually a cat living there.

> A tiny cat living in your website.

The library should optimize for personality rather than animation quantity.

## Product principles

- Haru-kun behaves like a living creature, not an instantly reactive UI effect.
- Small delays, hesitation, and imperfect behavior are part of the character.
- Behavior is modeled as state; animation effects are implementations of that
  state.
- New features should remain small and focused until their behavior feels
  natural.
- Future animation techniques should not be fixed before the illustrations and
  behavior requirements are understood.
- Existing static usage should keep working as animated behaviors are added.

## Character naming

- Official Japanese name: `ジト目猫のハル`
- Official English name: `Gray Cat Haru`
- Japanese nickname used in general prose: `ハルくん`
- English nickname used in general prose: `Haru-kun`
- Library and component names remain `Haru Cat` and `HaruCat`.

Formal rights and licensing text should use the official names. Product copy,
examples, and descriptions of the character may use the nicknames.

## Character design

Haru-kun is an original, simplified character and is not based on realistic
cat anatomy. Animation proposals must follow Haru-kun's design rather than
assume a real cat skeleton or realistic proportions.

Key characteristics:

- Large oval head
- Cylindrical body
- Small rounded paws
- Large triangular ears
- Thin, simple tail
- No visible neck
- Very simplified silhouette

The base illustration for v0.0.1 is `haru-sit-01.png`. It is the initial static
pose, but it is not expected to support every future behavior. Walking,
running, stretching, and other states may use different illustrations.

## Asset policy

The official asset format for v0.0.1 is transparent PNG. Do not automatically
convert official artwork to SVG or trace it as vector artwork.

Current production pipeline:

```text
Clip Studio Paint / Procreate
  -> transparent PNG
  -> React component
  -> npm package
```

The v0.0.1 asset will be stored at:

```text
src/assets/haru-sit-01.png
```

Production specification:

- Format: transparent PNG
- Canvas: 1024 x 1024 px
- Color profile: sRGB
- Background: transparent
- Default display size: 120 px
- Expected display range: 64–240 px

The layered source artwork should preserve separable eyes, ears, tail, head,
body, and other useful parts when practical. Only the flattened
`haru-sit-01.png` is included in v0.0.1.

Future versions may use PNG frame animation, multiple PNG layers, sprite sheets,
or CSS transforms. SVG is not required.

## v0.0.1 scope

The first release proves that Haru Cat works as a real React package. It contains
no animation.

Required outcomes:

- Import `HaruCat` from `haru-cat`
- Display the static Haru-kun PNG
- Configure position and size
- Provide TypeScript types
- Document installation and usage
- Verify the packed package in a separate React project
- Publish version 0.0.1 to npm

Planned component API:

```ts
export type HaruCatPosition =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type HaruCatProps = {
  position?: HaruCatPosition
  size?: number
  offset?: number
  zIndex?: number
  className?: string
}
```

Defaults:

```text
position = bottom-right
size = 120
offset = 16
zIndex = 9999
pointer-events = none
```

Example:

```tsx
import { HaruCat } from 'haru-cat'

export default function App() {
  return <HaruCat position="bottom-right" size={120} />
}
```

The high default z-index is acceptable for the first release because it is
configurable. It must not become an unchangeable assumption in future layering
features.

## Architecture direction

The component should separate screen positioning from the visual content. This
allows an outer element to own fixed positioning while an inner visual can be
animated independently later.

Do not build a general animation framework in v0.0.1. In particular, do not add
timers, animation state hooks, frame systems, or speculative behavior APIs
before an animated milestone requires them.

The project should be designed around states rather than isolated animation
effects. A future model may include:

```text
Idle -> Watching -> Sleeping -> Walking -> Playing
```

Each state may coordinate several visual actions:

- Idle: breathing, blinking, ear twitch
- Watching: look at the cursor, tilt the head
- Sleeping: closed eyes, breathing, tail movement
- Walking: stand, walk, stop, sit

The exact public API is intentionally undecided. `behavior` is the current
candidate because it describes character behavior better than a single visual
effect:

```tsx
<HaruCat behavior="idle" />
```

Static behavior should remain available so later versions do not unexpectedly
animate existing usage.

## Animation philosophy

Haru-kun should not react as soon as an input occurs.

Avoid:

```text
Cursor moves -> immediately follows
```

Prefer:

```text
Cursor moves
  -> Haru-kun notices
  -> looks
  -> waits
  -> maybe walks
  -> gets distracted
  -> sits
```

Timing, hesitation, transitions, and occasional non-reactions are part of the
character design. Movement should tell a small story rather than merely execute
an effect.

## Planned roadmap

Version numbers below are planning labels until each release is finalized.

### v0.0.1 — Static Haru-kun

- Publish the real npm package
- Display the flattened sitting PNG
- Support the initial positioning and sizing API
- Include types and user documentation

### v0.0.2 — Haru-kun feels alive

- Breathing
- Blinking
- Ear twitch
- No walking

The illustration technique remains open until the artwork is evaluated. Options
include whole-image CSS motion, layered PNGs, or PNG frames. Reduced-motion
preferences and resource cleanup must be considered when implementation begins.

### v0.0.3 — Haru-kun notices the environment

Possible behaviors:

- Look at the cursor
- Randomly look around
- Yawn
- Other idle reactions

Reactions should include a perceptible notice-and-decide sequence instead of an
instant response.

### v0.1.0 — Movement

Expected movement sequence:

```text
Sit -> stand -> walk -> stop -> sit
```

Haru-kun should not teleport between locations. Standing before walking and
sitting after stopping are part of making the movement feel natural.

### v0.2.0 — Website interaction

Examples:

- Sit on buttons or other elements
- Sleep during loading
- Appear in empty states

These behaviors require more careful positioning and layering than v0.0.1.

## Sitting on an element

A future sit-on-element behavior should locate a target, observe its position,
walk toward it, and sit on it rather than teleporting.

Possible implementation sequence:

1. Resolve the target element.
2. Read its position with `getBoundingClientRect()`.
3. Walk toward the target.
4. Stop and sit at the appropriate edge.

Possible APIs:

```tsx
<HaruCat behavior="sit-on-element" target="#submit-button" />
```

```tsx
<HaruCat behavior="sit-on-element" targetRef={buttonRef} />
```

The selector-versus-ref API is not decided yet.

## Layering

For v0.0.1, `position: fixed` with a configurable default `zIndex` of 9999 is
acceptable. Future website-interaction features must handle stacking contexts
more deliberately.

The library must continue exposing control over layering. A CSS custom property
may eventually be useful, but it should be introduced only when it solves a
concrete styling or integration need.

## Explicitly out of scope for v0.0.1

- Idle, walking, cursor-following, and sleep behaviors
- Mood systems
- Click and drag interaction
- SVG animation
- Canvas and Three.js
- Part-based PNG animation
- Multiple characters

## Rights and licensing

Haru Cat uses a split-license model so that the software can remain open while
the value and identity of the Gray Cat Haru character remain protected.

- The component code and related software are licensed under the MIT License.
- Gray Cat Haru, the character design, and the official artwork remain
  Copyright (c) 2026 73cat and use a separate asset license.
- Personal, non-commercial website display is permitted with credit.
- Commercial website use requires prior express permission from 73cat, normally
  recorded by email or direct message, and is generally paid.
- Standalone artwork redistribution, unauthorized modification,
  merchandising, and AI/ML use are prohibited.
- Original, non-commercial fan works created without copying the official
  assets or using generative AI are permitted under the asset license.
- Private local evaluation is allowed so that developers can assess the
  package before requesting a commercial license.

The repository and npm package must never describe the entire package simply
as MIT-licensed. README, package metadata, and distributed license files must
consistently distinguish the software from the character and artwork.

## v0.0.1 release gate

Before the first npm publication, perform an adversarial review with a separate
agent. The review must inspect the packed package, public API, README, package
metadata, and licensing language for ambiguity, contradictions, missing files,
and unintended permissions.

Resolve the findings and repeat the relevant checks before publication. Do not
run `npm publish` until 73cat has reviewed the final package contents and given
explicit approval.

## Open decisions

These decisions should be made when their first required milestone is designed:

- Public API name and shape for behavior/state selection
- Whether animation uses layered PNGs, frames, sprite sheets, or CSS transforms
- Exact default behavior after animation support exists
- Accessibility semantics for a decorative versus meaningful Haru-kun
- Selector, ref, or both for element-targeting behavior
- Long-term z-index and stacking-context strategy

## Maintaining this document

- Update this file when product principles, roadmap milestones, or architectural
  direction change.
- Record current released behavior in the README, not only here.
- Treat roadmap APIs as proposals until they are implemented and documented.
- Let Git history preserve why and when design decisions changed.
- Split stable, consequential technical decisions into separate decision records
  only if this document becomes difficult to navigate.
- Do not use this document as a changelog; release notes should describe what was
  actually shipped.
