#let conf(
    cols: 95,
    char-width: 0.53em,
    monospace: ("Iosevka Output Extended","Monaco"),
    theme-file: "Nord.tmTheme",
    foreground: rgb("#eceff4"),
    background: rgb("#2e3440").darken(80%),
    border-radius: 3pt,
    doc
) = {
    // Styling for code blocks
    set raw(theme: theme-file)
    show raw: set text(font: monospace)
    show raw.where(block: true): it => block(
        fill: background,
        width: 100%,
        inset: 8pt,
        radius: border-radius,
        align(left, text(fill: foreground, it))
    )

    // Fairly narrow page size; make background transparent
    set page(height: auto, width: cols * char-width, margin: 10pt, fill: none)

    doc
}
