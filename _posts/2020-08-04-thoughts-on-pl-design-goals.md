---
title: Thoughts on Goals in Programming Language Design
author: Ashton Wiersdorf
tags: programming languages
date: 2020-08-04
---

I've been thinking about programming languages a lot recently. A question I asked myself was: why do we work on, refine, and create new programming languages?

I thought of several reasons, but they seemed to boil down into two broader reasons:

 1. **Better abstractions and more automation**: some languages automate and ease some tedious tasks like memory management, concurrency, or type annotations. Almost all languages give you some ways of creating abstractions that let you reason with concepts in your problem domain, but different languages do this in different ways.

 2. **More precisely describe what you want**: languages like Haskell let you describe the behavior of your program very precisely with an expressive type system. This lets you write *correct* programs with a high degree of confidence.

    Other languages give you a different level of control: C lets you manipulate bits at arbitrary memory locations and evaluate them as you please. You can get very good performance from a well-tuned C program.

There's some overlap between these domains for sure, but these goals often seem to conflict one another: the first objective seems optimal for *drafting* programs. The second group is more tuned for long-running projects or programs with specific constraints. Permissive languages like Perl, Ruby, and most Lisps seem designed with the first objective in mind and are very easy to use when exploring an idea. They can be expressive and concise. More demanding languages, like Rust or Haskell, seem optimized for a long-lived project or a program with intensive system resource constraints or performance requirements. Maybe some people can draft in Rust, but I find it more difficult to whip up something in Rust than Perl or Elixir.

Can we reconcile these two goals? Maybe. I think the further away you get away from the machine—trading some fine-grained control for abstraction—the closer the goals can converge. You can have a language well-suited for discovering an idea, which can then let you evolve your program into a more correct, reliable version.

In the end, I don't think there is a perfect language. But some languages are more perfect than others! Hopefully I'll strike on something interesting in my fumbling about with PL.
