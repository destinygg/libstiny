# Libstiny

A CSS Component Library for destiny.gg

## Installation

```
npm install @destinygg/libstiny
```

## Usage

You can import the entire CSS, including all variables, using

```scss
@use "~@destinygg/libstiny" as *;
```

### Plain CSS

If your project doesn't use Sass, the package also ships a pre-compiled stylesheet
containing every component and token. Import it once, at the root of your application.

```js
import "@destinygg/libstiny/dist/libstiny.css";
```

This gives you the component classes and CSS output only. The Sass variables
documented below are available exclusively through the `@use` entry points.

### Namespacing

You can also namespace the import for clarity and to avoid collisions with your own variables.

```scss
@use "~@destinygg/libstiny" as dgg;

body {
  background-color: dgg.$semantic-background-default;
  color: dgg.$semantic-foreground-default;
}
```

### Core Tokens

The Core Tokens are the base color, space, and icon size variables. You can import them from

```scss
@use "~@destinygg/libstiny/lib/tokens/core" as *;
```

#### Colors

We have four main color scales; `primary`, `success`, `danger`, `neutral` and each has 12 steps. In Dark Mode, 1 is darkest and 12 is lightest.

```scss
.example {
  background-color: $palette-danger-1;
  color: $palette-danger-12;
}
```

You can view the complete color palette [here](https://www.radix-ui.com/colors/docs/palette-composition/scales).

#### Space

To keep our layouts consistent, we use the following Space tokens to control padding, margin, and gap.

```scss
$space-1: 0.25rem; // 4px
$space-2: 0.5rem; // 8px
$space-3: 0.75rem; // 12px
$space-4: 1rem; // 16px
$space-5: 1.5rem; // 24px
$space-6: 2rem; // 32px
$space-7: 2.5rem; // 40px
$space-8: 3rem; // 48px
$space-9: 3.5rem; // 56px
$space-10: 4rem; // 64px
$space-11: 6rem; // 96px
$space-12: 8rem; // 128px
```

99% of the time, you should use one of these tokens.

#### Icon Size

We support 5 different sizes of icons.

```scss
$icon-sm: $space-4; // 16px
$icon-default: 1.25rem; // 20px
$icon-md: $space-5; // 24px
$icon-lg: $space-6; // 32px
$icon-xl: $space-7; // 40px
```

### Semantic Tokens

These tokens have specific usages. You can import them from

```scss
@use "~@destinygg/libstiny/lib/tokens/semantic" as *;
```

| Variable Name                  | Value (Dark Mode)     | Description                                                       |
| ------------------------------ | --------------------- | ----------------------------------------------------------------- |
| `$semantic-background-default` | `$palette-neutral-1`  | The background color of the application                           |
| `$semantic-background-overlay` | `$black-a10`          | The default overlay color for modals and drawers                  |
| `$semantic-background-surface` | `$palette-neutral-2`  | The background color of surfaces, such as cards                   |
| `$semantic-border-default`     | `$palette-neutral-6`  | The default border color for containers                           |
| `$semantic-foreground-default` | `$palette-neutral-12` | The default color of text in the application                      |
| `$semantic-foreground-subtle`  | `$palette-neutral-10` | The color of subtitles and subtle text                            |
| `$semantic-screen-width`       | `72rem (1,152px)`     | The width of the main container for the application               |
| `$semantic-height-default`     | `$space-7`            | The height of components such as buttons and inputs               |
| `$semantic-radii-small`        | `0.5rem (8px)`        | The border radius of small components, like small buttons         |
| `$semantic-radii-default`      | `0.625rem (10px)`     | The border radius of components such as buttons and inputs        |
| `$semantic-radii-medium`       | `0.75rem (12px)`      | The border radius of containers such as cards                     |
| `$semantic-radii-large`        | `0.875rem (14px)`     | The border radius of large containers such as modals and tables   |
| `$semantic-radii-pill`         | `9999px`              | The border radius of components that are pill-shaped, like badges |

### Typography

We have our own typography system. There are two main styles, `Display` and `Body`. You can import them from

```scss
@use "~@destinygg/libstiny/lib/tokens/typography" as *;
```

#### Display

We have 6 sizes and 4 font-widths of our Display font. These fonts should be used for headers and other large text. We use the Poppins font here.

```scss
.example {
  font: $display-100-semi-bold;
}

.example {
  font: $display-600-regular;
}
```

#### Body

We have 5 sizes and 4 font-widths of our Body font. These fonts should be used for body text and small headers. We use the Inter font here.

```scss
.example {
  font: $body-100-medium;
}

.example {
  font: $body-500-bold;
}
```

### Transitions

We have built-in transitions in order to maintain a consistent user experience. You can use our `create-transition` mixin
to easily apply transitions to multiple properties.

```scss
@use "~@destinygg/libstiny/lib/utils/transitions" as *;

.example {
  // The properties, the transition to use, the delay (optional, defaults to 0s)
  @include create-transition((color, background-color), default, 150ms);
}
```

You can also use curves from our library directly without the mixin.

```scss
@use "~@destinygg/libstiny/lib/utils/transitions" as *;

.example {
  transition: all map.get($transition-curves, enter-exit);
}
```

Or if you prefer to break out of the system entirely, we do provide a map of our transition curves.

```scss
@use "~@destinygg/libstiny/lib/utils/transitions" as *;

.example {
  transition: all 500ms map.get($core-transitions, ease-in-out-cubic);
}
```

#### Standard Transitions

Below is the map of our standard transitions and their use cases.

```scss
$transition-curves: (
  // Used for hover, active, and focus transitions
  default: 150ms ease,
  // Used for when a new element appears on screen, like a modal
  enter-exit: 300ms map.get($core-transitions, ease-out-quart),
  // Used for large elements, like drawers
  large-enter-exit: 400ms cubic-bezier(0.32, 0.72, 0, 1),
  // Used for moving existing elements around the screen
  movement: 200ms map.get($core-transitions, ease-in-out-quart)
);
```

### Components

Please visit the [Libstiny Documentation](https://libstiny.pages.dev/?path=/docs/alert--docs) for usage of our components.
In order to view code examples, click the "Show Code" button in the bottom-right corner.

## React Components

Libstiny also ships pre-styled React components. They are entirely optional — the
SCSS and tokens above work exactly the same whether or not you use them, so
non-React consumers are unaffected.

```
npm install @destinygg/libstiny react react-dom
```

```jsx
import { Button, Badge, Card, Notification, SectionHeader, Table } from "@destinygg/libstiny/react";

<Button intent="secondary" size="large">Save</Button>
<Button render={<a href="/faq" />}>Styled as a button, renders an anchor</Button>
```

The components apply libstiny's classes for you, so you still need the stylesheet
once at the root of your app — either the Sass entry or `dist/libstiny.css`.

### Props

Every component takes its native element's props, plus a `className` that is
appended to (never replaces) the libstiny classes, and a `render` prop to
substitute the rendered element.

`render` behaves exactly like the `render` prop on Base UI components, because
it is implemented with Base UI's own `useRender`. Props on the substituted
element win, except that `className` and `style` are merged, event handlers on
both run (the element's first, and it can call `event.preventBaseUIHandler()`
to skip the component's), and refs on both receive the node:

```jsx
<Button onClick={track} render={<a href="/faq" onClick={navigate} />}>
  FAQ
</Button>
// both navigate() and track() run
```

You don't need to install `@base-ui/react` for this; the small piece it relies
on is bundled. In React Server Components apps, the components are client
components.

The colour axis is called `intent` on every component, matching the Twig
components in the website repo.

### Components that need behaviour

Components with real interaction are built on
[Base UI](https://base-ui.com) and live under their own subpath, so that
installing libstiny does not oblige you to install Base UI if you only use the
presentational components:

```
npm install @base-ui/react
```

```jsx
import { Tabs } from "@destinygg/libstiny/react/tabs";

<Tabs.Root defaultValue="one">
  <Tabs.List>
    <Tabs.Tab value="one">One</Tabs.Tab>
    <Tabs.Tab value="two">Two</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="one">…</Tabs.Panel>
  <Tabs.Panel value="two">…</Tabs.Panel>
</Tabs.Root>;
```

Keyboard navigation, roving tabindex and the `tablist`/`tab`/`tabpanel` roles come
from Base UI; the libstiny classes are applied from its component state.

### Module resolution caveat

The package deliberately has no `exports` map, because adding one breaks the
`@use "~@destinygg/libstiny"` Sass import that every stylesheet consumer relies
on. As a result the React entry resolves by directory-index lookup, which works
in **webpack, Vite, esbuild, Rollup**, and in TypeScript under
`moduleResolution: "bundler"` or `"node"` — but **not** in raw Node ESM or under
`moduleResolution: "nodenext"`, which report:

```
ERR_UNSUPPORTED_DIR_IMPORT               # Node ESM
TS2307: Cannot find module '@destinygg/libstiny/react'   # tsc --moduleResolution nodenext
```

If you hit either, import the file directly:

```js
import { Button } from "@destinygg/libstiny/react/index.js";
```

This is temporary. Once consumers migrate off the deprecated `~` prefix in their
Sass imports, the package can adopt an `exports` map and the bare specifier will
work everywhere.
