# Haru Cat — a tiny cat living in your website

Haru Cat is a React component for placing Haru-kun, a small original cat
character, at the bottom of your website.

This first release displays a static image. Animations and additional behaviors
are planned for future versions.

[日本語](./README.ja.md)

## Installation

```sh
npm install haru-cat
```

Haru Cat supports React 18 and React 19.

## Usage

```tsx
import { HaruCat } from 'haru-cat'

export default function App() {
  return <HaruCat position="bottom-right" size={120} />
}
```

Haru-kun is displayed in the bottom-right corner by default.

```tsx
<HaruCat />
```

You can also place Haru-kun at the bottom-left or bottom-center of the viewport.

```tsx
<HaruCat position="bottom-left" />
<HaruCat position="bottom-center" />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'bottom-right'` | Position along the bottom of the viewport. |
| `size` | `number` | `120` | Width and height of the image in pixels. |
| `offset` | `number` | `16` | Distance from the bottom and, when applicable, the left or right edge in pixels. |
| `zIndex` | `number` | `9999` | CSS `z-index` of the component. |
| `className` | `string` | `undefined` | Class name applied to the wrapper element. |

The component uses `position: fixed` and `pointer-events: none`, so Haru-kun
stays at the bottom of the viewport without blocking buttons or links.

## TypeScript

The component props and position type are exported from the package.

```tsx
import type { HaruCatPosition, HaruCatProps } from 'haru-cat'
```

## Development

```sh
npm install
npm run dev
```

Run the checks and library build with:

```sh
npm run lint
npm run build
npm pack --dry-run
```

See the [design notes](https://github.com/Colorful12/haru-cat/blob/main/docs/design-notes.md)
for the project's principles and planned direction.

## Creators

Haru Cat is developed by [taki](https://x.com/taki73_cat).

Haru-kun is the original character known in English as Gray Cat Haru and in
Japanese as ジト目猫のハル. The character and artwork are created by
[73cat](https://x.com/73cat_mina).

## License

The software and character artwork use different licenses.

- The Haru Cat software is Copyright (c) 2026 taki and is available under the
  [MIT License](./LICENSE-CODE.md).
- The Gray Cat Haru character and artwork are Copyright (c) 2026 73cat and are
  subject to the separate [character and artwork license](./LICENSE-ASSETS.md).

The character and artwork are not MIT-licensed. Limited personal,
non-commercial website use is permitted under the stated conditions, including
credit requirements. Standalone redistribution, merchandising, and AI/ML use
are prohibited. Commercial use requires express permission from 73cat before
publication or production use.

Read the complete [licensing overview](./LICENSE.md) before using or
redistributing Haru Cat. A [Japanese licensing overview](./LICENSE.ja.md) is
also available.
