---
title: Computers and Abstractions
excerpt: I am paid to press buttons and make lights blink in *very* specific ways.
date: 2020-05-20
tags: computers, philosophy
---

Computers are funny things. At the lowest level they're just a pile of ones and zeros that we assign meaning to. It's something you can easily take for granted, but there's a disconnect with how we talk about how things operate at the hardware level and then again at the software level.

Since writing a compiler, I've been able to bridge that gap in part. The fundamental idea is that we represent some meaning in a concrete, though still high-level form. Example: we might represent an entry in a contact book with a struct.

```elixir
defstruct [name: :string, age: :integer]
```

The critical step is this: we find a way to *consistently represent that entity in the physical realm*. We pack up a bunch of ones and zeros next to each other that are spaced apart at the right distances. Operations on bits in that neighborhood have to obey the rules we put in place. (E.g. treat the bits representing the age as a single thing, the bits representing the name can be broken up along character boundaries, etc.) Once our operations are complete, assuming our rules—our invariants—were never violated, then we can ascribe new meaning to the resulting mass of ones and zeros.

Perhaps this isn't that profound. Or maybe it's more profound than my attempt to talk about it shoes. I'm sure I'll gain more insight about this phenomenon as time goes on.
