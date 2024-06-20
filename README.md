# Libstiny
A CSS Component Library for destiny.gg

## Installation

1. Generate a personal access token ([instructions](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)) and put it in your `~./npmrc` file.
2. In the project directory at the same level as your `package.json`, create a `.npmrc` file and add the following: `@destinygg:registry=https://npm.pkg.github.com`
3. Run `npm install @destinygg/libstiny`

## Usage
You can import the entire CSS using
```scss
@import "~@destinygg/libstiny/lib";
```

### Core Tokens
The Core Tokens are the base color, space, and icon size variables. You can import them from

```scss
@import "~@destinygg/libstiny/lib/tokens/core";
```

#### Colors
We have four main color scales; `primary`, `success`, `danger`, `neutral` and each has 12 steps. In Dark Mode, 1 is darkest and 12 is lightest.

```scss
.example {
  background-color: $palette-danger-1;
  color: $palette-danger-12;
}
```

99% of the time, you will be using our core colors. However, we have 33 different color palettes available for use.

```scss
@import "~libstiny/lib/tokens/colors";

.example {
  background-color: $iris-3;
  color: $purple-8;
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
@import "~@destinygg/libstiny/lib/tokens/semantic";
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
@import "~@destinygg/libstiny/lib/tokens/typography";
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

### Components
Please visit the [Libstiny Documentation](https://libstiny.pages.dev/?path=/docs/alert--docs) for usage of our components.
In order to view code examples, click the "Show Code" button in the bottom-right corner.
