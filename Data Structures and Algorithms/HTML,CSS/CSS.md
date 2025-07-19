

# 🧱 Block Elements in HTML/CSS

- Block-level elements start on a new line and take up the full available width by default. They create a "block" in the layout, stacking vertically.

## 🔍 Key Features of Block Elements

- ✔ Forces Line Break → Starts on a new line (<div>, <p>).
- ✔ Takes Full Width → Stretches to 100% of parent container.
- ✔ Respects width, height, Margins & Padding → All sides adjustable.
- ✔ Can Contain Inline & Other Block Elements (unless restricted, like <p>).

### 📌 Common Block-Level Elements

Icon	Element	Usage Example
📦	<div>	<div>Container</div>
📝	<p>	<p>Paragraph text.</p>
🏗️	<section>	<section>Content</section>
🗂️	<ul>, <ol>	<ul><li>Item</li></ul>
🎨	<h1>-<h6>	<h1>Heading</h1>
🖥️	<form>	<form><input></form>


# 📍 Inline Elements in HTML/CSS

- In HTML and CSS, an inline element is an element that does not start on a new line and only takes up as much width as necessary. Inline elements flow within the content and do not create line breaks before or after themselves.

## Characteristics of Inline Elements:
- No Line Breaks: They appear in the same line as adjacent content.

- Width & Height: They ignore width and height properties (set by content).

- Margins & Padding: Only horizontal margins (margin-left, margin-right) and padding work; vertical margins (margin-top, margin-bottom) do not affect layout.

- Cannot Contain Block Elements: Typically, inline elements should not contain block-level elements (though some exceptions exist, like <a> wrapping blocks in HTML5).

### Common Inline Elements:

<span> (generic inline container)

<a> (hyperlink)

<strong>, <em> (bold/italic emphasis)

<img> (image, though it behaves like inline-block)

<input> (form input)

<label> (form label)

<br> (line break)

<button> (clickable button)

### Changing Display Behavior:
```css
span {
  display: block; /* Makes it behave like a block */
}
a {
  display: inline-block; /* Allows width/height but stays inline */
}
```



# 📘 CSS display Property

The display property defines how an element is rendered on the page — whether it’s a block, inline, flex, grid, etc.