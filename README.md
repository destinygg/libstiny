# Libstiny
A CSS Component Library for destiny.gg

## Installation
Run `npm install @destinygg/libstiny`

## Usage
You can import the entire CSS, including all variables, using
```scss
@use "~@destinygg/libstiny" as *;
```

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
|--------------------------------|-----------------------|-------------------------------------------------------------------|
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
  transition: all map-get($transition-curves, enter-exit);
}
```

Or if you prefer to break out of the system entirely, we do provide a map of our transition curves.

```scss
@use "~@destinygg/libstiny/lib/utils/transitions" as *;

.example {
  transition: all 500ms map-get($core-transitions, ease-in-out-cubic);
}
```

#### Standard Transitions
Below is the map of our standard transitions and their use cases.
```scss
$transition-curves: (
  // Used for hover, active, and focus transitions
  default: 150ms ease,
  // Used for when a new element appears on screen, like a modal
  enter-exit: 300ms map-get($core-transitions, ease-out-quart),
  // Used for large elements, like drawers
  large-enter-exit: 400ms cubic-bezier(0.32, 0.72, 0, 1),
  // Used for moving existing elements around the screen
  movement: 200ms map-get($core-transitions, ease-in-out-quart)
);
```

### Components
Please visit the [Libstiny Documentation](https://libstiny.pages.dev/?path=/docs/alert--docs) for usage of our components.
In order to view code examples, click the "Show Code" button in the bottom-right corner.
