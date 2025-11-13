

# 🧱 Block Elements in HTML/CSS

- Block-level elements start on a new line and take up the full available width by default. They create a "block" in the layout, stacking vertically.

## 🔍 Key Features of Block Elements

- ✔ Forces Line Break → Starts on a new line `(<div>, <p>)`.
- ✔ Takes Full Width → Stretches to 100% of parent container.
- ✔ Respects width, height, Margins & Padding → All sides adjustable.
- ✔ Can Contain Inline & Other Block Elements (unless restricted, like `<p>`).

### 📦 Common Block Elements
```css
<div>	- Generic container for layout/styling.	
<p>	- Paragraph text.
<h1>-<h6>	- Headings (h1 = largest, h6 = smallest).
<ul>, <ol>	- Unordered/ordered lists.
<li>	- List item (must be inside <ul>/<ol>).
<section>	- Semantic section of content.
<article>	- Self-contained content (e.g., blog post).
<header>	- Introductory content (e.g., page header).
<footer>	- Footer content.
<nav>	- Navigation links.
<form>	- Input form container.
<table>	- Table structure.
```

# 📍 Inline Elements in HTML/CSS

- In HTML and CSS, an inline element is an element that does not start on a new line and only takes up as much width as necessary. Inline elements flow within the content and do not create line breaks before or after themselves.

## Characteristics of Inline Elements:
- No Line Breaks: They appear in the same line as adjacent content.

- Width & Height: They ignore width and height properties (set by content).

- Margins & Padding: Only horizontal margins (margin-left, margin-right) and padding work; vertical margins (margin-top, margin-bottom) do not affect layout.

- Cannot Contain Block Elements: Typically, inline elements should not contain block-level elements (though some exceptions exist, like `<a>` wrapping blocks in HTML5).

### Common Inline Elements:
```css
<span> (generic inline container)

<a> (hyperlink)

<strong>, <em> (bold/italic emphasis)

<img> (image, though it behaves like inline-block)

<input> (form input)

<label> (form label)

<br> (line break)

<button> (clickable button)
```

### Changing Display Behavior:
```css
span {
  display: block; /* Makes it behave like a block */
}
a {
  display: inline-block; /* Allows width/height but stays inline */
}
```

### 🛠 Controlling Block Elements
```css
div {
  width: 50%;  /* Half of parent width */
  height: 100px;
  margin: 10px auto; /* Centering */
}
```
### Converting to Inline/Inline-Block
```css
.block-to-inline {
  display: inline; /* Now behaves like <span> */
}
.block-to-inline-block {
  display: inline-block; /* Mix of block & inline */
}
```


# 📘 CSS display Property

The display property defines how an element is rendered on the page — whether it’s a block, inline, flex, grid, etc.

## 🔑 Common display Values

| Value                       | Description                                                |
| --------------------------- | ---------------------------------------------------------- |
| `block`                     | Takes full width, starts on new line (e.g., `<div>`)       |
| `inline`                    | Sits inline, only as wide as content (e.g., `<span>`)      |
| `inline-block`              | Inline but allows width/height & padding/margin            |
| `none`                      | Removes element from document (hidden, no space taken)     |
| `flex`                      | Turns element into a flex container                        |
| `inline-flex`               | Same as `flex` but inline-level                            |
| `grid`                      | Turns element into a CSS Grid container                    |
| `inline-grid`               | Same as `grid`, but inline                                 |
| `table`, `inline-table`     | Mimics table layout like `<table>`                         |
| `list-item`                 | Renders like a `<li>` with bullets                         |
| `contents`                  | Makes the element disappear, but its children stay visible |
| `inherit`/`initial`/`unset` | Inherits or resets to default                              |


# 🎯 CSS Flexbox: The Ultimate Guide ([Best Website](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))

- Flexbox is a 1D layout system used to arrange items horizontally or vertically with flexible alignment and spacing.

## 🔥 Key Benefits of Flexbox

- ✔ Easy alignment and distribution of space
- ✔ Responsive by default
- ✔ No more float or clearfix hacks
- ✔ Works great for both rows and columns

### 🚀 Flexbox Basics

1. Flex Container & Items
- Parent (Container) → Becomes flexible with display: flex

- Children (Items) → Automatically flexible inside the container

2. Main Axis vs. Cross Axis
- Main Axis → Direction items are laid out (row or column)

- Cross Axis → Perpendicular to the main axis

## 🎛️ Flex Container Properties
- 1. flex-direction → Controls flow direction
```css
.flex-container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
row (default) → Left to right

column → Top to bottom

- 2. justify-content → Aligns items along the main axis
```css
.flex-container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```
space-between → Equal gaps between items

space-around → Equal gaps around items

- 3. align-items → Aligns items along the cross axis
```css
.flex-container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```
center → Vertically centers items

stretch (default) → Fills container height

- 4. flex-wrap → Controls wrapping
```css
.flex-container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
wrap → Items wrap to next line if needed

- 5. gap → Adds space between items
```css
.flex-container {
  gap: 10px; /* Adds spacing between flex items */
}
```
## 💪 Flex Item Properties
- 1. flex-grow → Expands item to fill space
```css
.item {
  flex-grow: 1; /* Takes available space */
}
```
- 2. flex-shrink → Allows item to shrink if needed
```css
.item {
  flex-shrink: 1; /* Default: allows shrinking */
}
```
- 3. flex-basis → Sets initial size before growing/shrinking
```css
.item {
  flex-basis: 200px; /* Default: auto */
}
```
- 4. align-self → Overrides align-items for a single item
```css
.item {
  align-self: flex-start | flex-end | center;
}
```
- 5. order → Changes item order
```css
.item {
  order: 2; /* Higher numbers appear later */
}
```
